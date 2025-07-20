import { v4 as uuidv4 } from 'uuid';
import type { ITask } from '@entities/task/model/task';

const STORAGE_KEY = 'tasks';

const read = (): ITask[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
};

const write = (tasks: ITask[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export const fakeApi = {
  getAll: async (): Promise<ITask[]> => {
    return read();
  },
  getById: async (id: string): Promise<ITask | undefined> => {
    return read().find((task) => task.id === id);
  },
  create: async (task: Omit<ITask, 'id'>): Promise<ITask> => {
    const newTask = { ...task, id: uuidv4() };
    const updated = [...read(), newTask];
    write(updated);
    return newTask;
  },
  update: async (task: ITask): Promise<ITask> => {
    const updated = read().map((t) => (t.id === task.id ? task : t));
    write(updated);
    return task;
  },
  delete: async (id: string): Promise<void> => {
    const filtered = read().filter((task) => task.id !== id);
    write(filtered);
  },
};
