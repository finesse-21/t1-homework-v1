import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { ITask } from './task';
import { taskApi } from '../api/taskApi';
import { type SearchParams } from '@shared/api/fakeApi';

export const fetchTasks = createAsyncThunk('tasks/fetchAll', async (params: SearchParams = {}) => {
  return await taskApi.getAll(params);
});

export const createTask = createAsyncThunk('tasks/create', async (task: Omit<ITask, 'id'>) => {
  return await taskApi.create(task);
});

export const updateTask = createAsyncThunk('tasks/update', async (task: ITask) => {
  return await taskApi.update(task);
});

export const deleteTask = createAsyncThunk('tasks/delete', async (id: string) => {
  await taskApi.delete(id);
  return id;
});

interface TaskState {
  tasks: ITask[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

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
