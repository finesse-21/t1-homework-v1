import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { ITask } from './task';
import { taskApi } from '../api/taskApi';
import { type SearchParams } from '@shared/api/fakeApi';

/**
 * Асинхронный экшен для получения всех задач.
 * @param params - Параметры поиска (заголовок и/или дата).
 * @returns Промис с массивом задач.
 */
export const fetchTasks = createAsyncThunk('tasks/fetchAll', async (params: SearchParams = {}) => {
  return await taskApi.getAll(params);
});

/**
 * Асинхронный экшен для создания новой задачи.
 * @param task - Объект задачи без идентификатора.
 * @returns Промис с созданной задачей.
 */
export const createTask = createAsyncThunk('tasks/create', async (task: Omit<ITask, 'id'>) => {
  return await taskApi.create(task);
});

/**
 * Асинхронный экшен для обновления существующей задачи.
 * @param task - Объект задачи с идентификатором.
 * @returns Промис с обновлённой задачей.
 */
export const updateTask = createAsyncThunk('tasks/update', async (task: ITask) => {
  return await taskApi.update(task);
});

/**
 * Асинхронный экшен для удаления задачи.
 * @param id - Идентификатор задачи.
 * @returns Промис с идентификатором удалённой задачи.
 */
export const deleteTask = createAsyncThunk('tasks/delete', async (id: string) => {
  await taskApi.delete(id);
  return id;
});

/**
 * Интерфейс состояния задач.
 * @property tasks - Массив задач.
 * @property loading - Флаг загрузки данных.
 * @property error - Сообщение об ошибке, если она произошла.
 */
interface TaskState {
  tasks: ITask[];
  loading: boolean;
  error: string | null;
}

/** Начальное состояние задач. */
const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

/**
 * Слайс задач с обработкой асинхронных экшенов.
 */
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<ITask[]>) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
        state.error = 'Ошибка при загрузке задач';
      })
      .addCase(createTask.fulfilled, (state, action: PayloadAction<ITask>) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<ITask>) => {
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task,
        );
      })
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<string>) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export const taskReducer = taskSlice.reducer;
