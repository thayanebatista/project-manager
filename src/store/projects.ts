import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { filterEnum, IProject } from '@/interfaces/project';
import { useFilterList } from '@/composables/filterList';

export const useProjectsStore = defineStore('projects', {
  persist: true,
  state: (): {
    projects: IProject[];
    filteredProjects: IProject[] | null;
    searchTerm: string;
    recentSearches: { prependIcon: string; name: string }[];
  } => ({
    projects: [],
    filteredProjects: null,
    searchTerm: '',
    recentSearches: [],
  }),
  actions: {
    createNewProject(project: IProject) {
      const newProject = { ...project, id: uuidv4() };
      this.projects.push(newProject);

      const { filteredProjects } = useFilterList(
        this.projects,
        filterEnum.byAlphabetical,
      );
      this.projects = filteredProjects.value;
    },
    filterList(filter: filterEnum) {
      if (this.projects.length === 0) {
        return [];
      }
      const { filteredProjects } = useFilterList(this.projects, filter);
      this.projects = filteredProjects.value;
    },
    getProject(id: string) {
      const project = this.projects.find(project => project.id === id);
      return project;
    },
    setFavoriteProject(id: string) {
      this.projects.find(project => {
        if (project.id === id) {
          project.isFavorite = !project.isFavorite;
        }
      });
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
    setFilteredProjects(filteredProjects: IProject[], search?: string) {
      this.$patch({
        filteredProjects,
        searchTerm: search,
      });
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
