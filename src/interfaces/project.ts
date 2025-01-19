export interface INewProjectForm {
  name: string;
  client: string;
  startDate: Date;
  endDate: Date;
  image?: string;
}

export interface IProject {
  id?: string;
  name: string;
  client: string;
  startDate: Date;
  endDate: Date;
  image?: string;
  isFavorite?: boolean;
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
