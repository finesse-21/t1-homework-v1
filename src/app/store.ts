import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from '@entities/task/model/taskSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
