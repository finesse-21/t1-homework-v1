import type { ITask } from '../model/task';

/**
 * Интерфейс фильтров для задач.
 */
interface Filters {
  status: string;
  category: string;
  priority: string;
}

/**
 * Фильтрует массив задач по статусу, категории и приоритету.
 * @param tasks - Массив задач
 * @param filters - Объект фильтров
 * @returns Отфильтрованный массив задач
 */
export const filterTasks = (tasks: ITask[], filters: Filters): ITask[] => {
  return tasks.filter((task) => {
    const statusMatch = filters.status === 'All' || task.status === filters.status;
    const categoryMatch = filters.category === 'All' || task.category === filters.category;
    const priorityMatch = filters.priority === 'All' || task.priority === filters.priority;
    return statusMatch && categoryMatch && priorityMatch;
  });
};
