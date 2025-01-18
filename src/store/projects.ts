import { defineStore } from 'pinia';
import { INewProjectForm } from '@/interfaces/project';

export const useProjectsStore = defineStore('projects', {
  persist: true,
  state: (): {
    projects: INewProjectForm[];
    project: INewProjectForm;
  } => ({
    projects: [],
    project: null,
  }),
  actions: {
    createNewProject(project: INewProjectForm) {
      this.projects.push(project);
    },
  },
});
