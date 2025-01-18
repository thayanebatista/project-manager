export interface INewProjectForm {
  name: string;
  client: string;
  startDate: string;
  endDate: string;
  image?: File | null;
}

export interface IProject {
  name: string;
  client: string;
  startDate: string;
  endDate: string;
  image?: File | null;
}
