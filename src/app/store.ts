import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from '@entities/task/model/taskSlice';
import logger from 'redux-logger';

/**
 * Redux store приложения.
 * Содержит:
 * - tasks: редьюсер задач
 * - middleware: redux-logger для логирования экшенов и состояния
 * - devTools: включены только в режиме разработки
 */
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: import.meta.env.DEV,
});

/**
 * Тип состояния Redux store.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Тип dispatch для Redux store.
 */
export type AppDispatch = typeof store.dispatch;
