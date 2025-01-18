export interface INewProjectForm {
  name: string;
  client: string;
  startDate: Date;
  endDate: Date;
  image?: File | null;
}

export interface IProject {
  name: string;
  client: string;
  startDate: Date;
  endDate: Date;
  image?: File | null;
}

export interface IFilter {
  id: filterEnum;
  name: string;
}

export enum filterEnum {
  byAlphabetical = 'byAlphabetical',
  byEndDate = 'byEndDate',
  bystartDate = 'bystartDate',
}
