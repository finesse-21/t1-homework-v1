import { v4 as uuidv4 } from 'uuid';
import type { ITask } from '@entities/task/model/task';
import { parse, format } from 'date-fns';

const STORAGE_KEY = 'tasks';

/**
 * Параметры поиска задач.
 * @property title - Заголовок задачи для поиска.
 * @property date - Дата задачи для поиска в формате 'dd.MM.yyyy'.
 */
export interface SearchParams {
  title?: string;
  date?: string;
}

/**
 * Читает задачи из localStorage.
 * @returns Массив задач.
 */
const read = (): ITask[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
};

/**
 * Записывает задачи в localStorage.
 * @param tasks - Массив задач для сохранения.
 */
const write = (tasks: ITask[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

/**
 * Fake API для управления задачами.
 */
export const fakeApi = {
  /**
   * Получает все задачи с возможностью фильтрации.
   * @param params - Параметры поиска (заголовок и/или дата).
   * @returns Промис с массивом задач.
   */
  getAll: async (params: SearchParams = {}): Promise<ITask[]> => {
    let tasks = read();
    const { title, date } = params;

    if (title) {
      tasks = tasks.filter((task) => task.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (date) {
      const parsedFilterDate = parse(date, 'dd.MM.yyyy', new Date());
      const filterDateStr = format(parsedFilterDate, 'yyyy-MM-dd');

      tasks = tasks.filter((task) => {
        const taskDate = format(new Date(task.createdAt), 'yyyy-MM-dd');
        return taskDate === filterDateStr;
      });
    }

    return tasks;
  },

  /**
   * Получает задачу по её идентификатору.
   * @param id - Идентификатор задачи.
   * @returns Промис с задачей или undefined, если задача не найдена.
   */
  getById: async (id: string): Promise<ITask | undefined> => {
    return read().find((task) => task.id === id);
  },

  /**
   * Создаёт новую задачу.
   * @param task - Объект задачи без идентификатора.
   * @returns Промис с созданной задачей.
   */
  create: async (task: Omit<ITask, 'id'>): Promise<ITask> => {
    const newTask = { ...task, id: uuidv4() };
    const updated = [...read(), newTask];
    write(updated);
    return newTask;
  },

  /**
   * Обновляет существующую задачу.
   * @param task - Объект задачи с идентификатором.
   * @returns Промис с обновлённой задачей.
   */
  update: async (task: ITask): Promise<ITask> => {
    const updated = read().map((t) => (t.id === task.id ? task : t));
    write(updated);
    return task;
  },

  /**
   * Удаляет задачу по её идентификатору.
   * @param id - Идентификатор задачи.
   * @returns Промис без возвращаемого значения.
   */
  delete: async (id: string): Promise<void> => {
    const filtered = read().filter((task) => task.id !== id);
    write(filtered);
  },
};
