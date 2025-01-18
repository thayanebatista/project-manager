import { defineStore } from 'pinia';
import { filterEnum, IProject } from '@/interfaces/project';

export const useProjectsStore = defineStore('projects', {
  persist: true,
  state: (): {
    projects: IProject[];
    project: IProject | null;
  } => ({
    projects: [],
    project: null,
  }),
  actions: {
    createNewProject(project: IProject) {
      this.projects.push(project);
    },
    filterList(filter: filterEnum) {
      if (this.projects.length === 0) {
        return [];
      }
      switch (filter) {
        case filterEnum.byAlphabetical:
          this.projects.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case filterEnum.bystartDate:
          this.projects.sort(
            (a, b) =>
              new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
          );
          break;
        case filterEnum.byEndDate:
          this.projects.sort(
            (a, b) =>
              new Date(a.endDate).getTime() - new Date(b.endDate).getTime(),
          );
          break;
        default:
          this.projects.sort((a, b) => a.name.localeCompare(b.name));
          break;
      }
    },
  },
});
