import { api } from '@shared/api/client';
import type { ITask } from '../model/task';

export const taskApi = {
  getAll: () => api.get<ITask[]>('/tasks'),
  getById: (id: string) => api.get<ITask>(`/tasks/${id}`),
  create: (task: Omit<ITask, 'id'>) => api.post<ITask>('/tasks', task),
  update: (task: ITask) => api.put<ITask>(`/tasks/${task.id}`, task),
  delete: (id: string) => api.delete(`/tasks/${id}`),
};
