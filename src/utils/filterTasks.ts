import type { ITask } from '../types/task';

interface Filters {
  status: string;
  category: string;
  priority: string;
}

export const filterTasks = (tasks: ITask[], filters: Filters): ITask[] => {
  return tasks.filter((task) => {
    const statusMatch = filters.status === 'All' || task.status === filters.status;
    const categoryMatch = filters.category === 'All' || task.category === filters.category;
    const priorityMatch = filters.priority === 'All' || task.priority === filters.priority;
    return statusMatch && categoryMatch && priorityMatch;
  });
};
