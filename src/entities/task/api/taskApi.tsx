import { fakeApi, type SearchParams } from '@shared/api/fakeApi';
import type { ITask } from '../model/task';

export const taskApi = {
  getAll: (params: SearchParams = {}) => fakeApi.getAll(params),
  getById: (id: string) => fakeApi.getById(id),
  create: (task: Omit<ITask, 'id'>) => fakeApi.create(task),
  update: (task: ITask) => fakeApi.update(task),
  delete: (id: string) => fakeApi.delete(id),
};
