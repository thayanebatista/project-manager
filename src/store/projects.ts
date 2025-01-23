import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  getDoc,
} from 'firebase/firestore';
import { defineStore } from 'pinia';
import { db } from '@/firebase/config';
import { useAuthStore } from '@/store/auth';
import { FirebaseError } from 'firebase/app';
import { useFilterList } from '@/composables/filterList';
import { filterEnum, IProject } from '@/interfaces/project';

export const useProjectsStore = defineStore('projects', {
  persist: true,
  state: (): {
    projects: IProject[];
    searchTerm: string;
    recentSearches: { prependIcon: string; name: string }[];
  } => ({
    projects: [],
    searchTerm: '',
    recentSearches: [],
  }),
  getters: {
    filteredProjects: state => {
      if (!state.searchTerm || state.searchTerm.length < 3) {
        return state.projects;
      }
      return state.projects.filter(project =>
        project.name.toLowerCase().includes(state.searchTerm.toLowerCase()),
      );
    },
    sortdAndFilteredProjects: state => {
      return (filter: filterEnum) => {
        const searchFiltered =
          state.searchTerm && state.searchTerm.length >= 3
            ? state.projects.filter(project =>
                project.name
                  .toLowerCase()
                  .includes(state.searchTerm.toLowerCase()),
              )
            : state.projects;

        const { filteredProjects } = useFilterList(searchFiltered, filter);
        return filteredProjects.value;
      };
    },
  },
  actions: {
    async createNewProject(project: IProject) {
      const authStore = useAuthStore();
      try {
        const docRef = await addDoc(collection(db, 'projects'), {
          ...project,
          userId: authStore.user.uid,
          createdAt: new Date(),
        });

        const newProject = { ...project, id: docRef.id };
        this.projects.push(newProject);
        this.sortProjects(filterEnum.byAlphabetical);
      } catch (error) {
        throw error instanceof FirebaseError
          ? new Error(`Erro ao criar projeto: ${error.message}`)
          : new Error('Erro desconhecido ao criar projeto');
      }
    },

    async fetchUserProjects() {
      const authStore = useAuthStore();
      try {
        const q = query(
          collection(db, 'projects'),
          where('userId', '==', authStore.user.uid),
        );
        const querySnapshot = await getDocs(q);
        this.projects = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as IProject[];
      } catch (error) {
        throw error instanceof FirebaseError
          ? new Error(`Erro ao buscar projetos: ${error.message}`)
          : new Error('Erro desconhecido ao buscar projetos');
      }
    },

    async editProject(projectId: string, updatedProject: Partial<IProject>) {
      try {
        const projectRef = doc(db, 'projects', projectId);
        await updateDoc(projectRef, updatedProject);

        const projectIndex = this.projects.findIndex(
          project => project.id === projectId,
        );
        if (projectIndex !== -1) {
          this.projects[projectIndex] = {
            ...this.projects[projectIndex],
            ...updatedProject,
          };
        }
      } catch (error) {
        throw error instanceof FirebaseError
          ? new Error(`Erro ao editar projeto: ${error.message}`)
          : new Error('Erro desconhecido ao editar projeto');
      }
    },

    async deleteProject(projectId: string) {
      try {
        await deleteDoc(doc(db, 'projects', projectId));
        this.projects = this.projects.filter(
          project => project.id !== projectId,
        );
      } catch (error) {
        throw error instanceof FirebaseError
          ? new Error(`Erro ao deletar projeto: ${error.message}`)
          : new Error('Erro desconhecido ao deletar projeto');
      }
    },

    sortProjects(filter: filterEnum) {
      const { filteredProjects } = useFilterList(this.projects, filter);
      this.projects = filteredProjects.value;
    },
    async getProject(id: string) {
      const localProject = this.projects.find(project => project.id === id);
      if (localProject) return localProject;

      try {
        const docRef = doc(db, 'projects', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          return { id: docSnap.id, ...docSnap.data() } as IProject;
        }
        return null;
      } catch (error) {
        throw error instanceof FirebaseError
          ? new Error(`Erro ao buscar projeto: ${error.message}`)
          : new Error('Erro desconhecido ao buscar projeto');
      }
    },
    async setFavoriteProject(id: string) {
      try {
        const project = this.projects.find(project => project.id === id);
        if (project) {
          await updateDoc(doc(db, 'projects', project.id), {
            isFavorite: !project.isFavorite,
          });
          project.isFavorite = !project.isFavorite;
        }
      } catch (error) {
        throw error instanceof FirebaseError
          ? new Error(`Erro ao atualizar favorito: ${error.message}`)
          : new Error('Erro desconhecido ao atualizar favorito');
      }
    },
    setSearchTerm(search: string) {
      this.searchTerm = search;
    },
    setRecentSearch(search: { prependIcon: string; name: string }) {
      if (
        !this.recentSearches.some(
          recent => recent.name.toLowerCase() === search.name.toLowerCase(),
        )
      ) {
        this.recentSearches = [search, ...this.recentSearches.slice(0, 4)];
      }
    },
  },
});
