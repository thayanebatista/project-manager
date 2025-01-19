import { ref } from 'vue';
import { filterEnum, IProject } from '@/interfaces/project';

export const useFilterList = (list: IProject[], filter: filterEnum) => {
  const filteredProjects = ref(list);

  switch (filter) {
    case filterEnum.byAlphabetical:
      filteredProjects.value.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case filterEnum.bystartDate:
      filteredProjects.value.sort(
        (a, b) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
      );
      break;
    case filterEnum.byEndDate:
      filteredProjects.value.sort(
        (a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime(),
      );
      break;
    default:
      filteredProjects.value.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  return { filteredProjects };
};
