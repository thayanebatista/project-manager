import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { filterEnum, IProject } from '@/interfaces/project';
import { useFilterList } from '@/composables/filterList';

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
    createNewProject(project: IProject) {
      const newProject = { ...project, id: uuidv4() };
      this.projects.push(newProject);
      this.sortProjects(filterEnum.byAlphabetical);
    },
    sortProjects(filter: filterEnum) {
      const { filteredProjects } = useFilterList(this.projects, filter);
      this.projects = filteredProjects.value;
    },
    getProject(id: string) {
      return this.projects.find(project => project.id === id);
    },
    setFavoriteProject(id: string) {
      const project = this.projects.find(project => project.id === id);
      if (project) {
        project.isFavorite = !project.isFavorite;
      }
    },
    editProject(projectId: string, updatedProject: Partial<IProject>) {
      const projectIndex = this.projects.findIndex(
        project => project.id === projectId,
      );
      if (projectIndex !== -1) {
        this.projects[projectIndex] = {
          ...this.projects[projectIndex],
          ...updatedProject,
        };
      }
    },
    deleteProject(projectId: string) {
      this.projects = this.projects.filter(project => project.id !== projectId);
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
