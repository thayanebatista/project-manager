import { defineStore } from 'pinia';
import { IProjects } from '@/interfaces/project';

export const useProjectsStore = defineStore('projects', {
  persist: true,
  state: (): {
    projects: IProjects[];
    project: IProjects;
  } => ({
    projects: [],
    project: null,
  }),
  actions: {
    createNewProject(project: IProjects) {
      this.projects.push(project);
    },
  },
});
