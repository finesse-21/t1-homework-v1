import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { ITask } from './task';
import axios from 'axios';

const API_URL = 'http://localhost:3001/tasks';

/**
 * Асинхронный экшен для получения всех задач.
 */
export const fetchTasks = createAsyncThunk('tasks/fetchAll', async () => {
  const response = await axios.get<ITask[]>(API_URL);
  return response.data;
});

/**
 * Асинхронный экшен для создания новой задачи.
 */
export const createTask = createAsyncThunk('tasks/create', async (task: Omit<ITask, 'id'>) => {
  const response = await axios.post<ITask>(API_URL, task);
  return response.data;
});

/**
 * Асинхронный экшен для обновления задачи.
 */
export const updateTask = createAsyncThunk('tasks/update', async (task: ITask) => {
  const response = await axios.put<ITask>(`${API_URL}/${task.id}`, task);
  return response.data;
});

/**
 * Асинхронный экшен для удаления задачи.
 */
export const deleteTask = createAsyncThunk('tasks/delete', async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

/**
 * Интерфейс состояния задач.
 */
interface TaskState {
  tasks: ITask[];
  loading: boolean;
  error: string | null;
}

/** Начальное состояние задач */
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
