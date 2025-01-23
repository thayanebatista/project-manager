export interface INewProjectForm {
  name: string;
  client: string;
  startDate: Date;
  endDate: Date;
  image?: string;
}

export interface IProject extends INewProjectForm {
  id: string;
  isFavorite?: boolean;
  userId: string;
  createdAt: Date;
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
