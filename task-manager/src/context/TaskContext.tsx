import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import type { ITask } from '../types/task';

const initialTasks: ITask[] = [
  { id: '1', title: 'Исправить баг в авторизации', description: 'Кнопка "Войти" неактивна при верном пароле', category: 'Bug', status: 'To Do', priority: 'High' },
  { id: '2', title: 'Разработать страницу профиля', description: 'Добавить аватар, имя и почту', category: 'Feature', status: 'In Progress', priority: 'Medium' },
  { id: '3', title: 'Написать документацию для API', category: 'Documentation', status: 'Done', priority: 'Low' },
];

interface ITaskContext {
  tasks: ITask[];
  updateTask: (updatedTask: ITask) => void;
  getTaskById: (id: string) => ITask | undefined;
}

const TaskContext = createContext<ITaskContext | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>(initialTasks);

  const updateTask = (updatedTask: ITask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const getTaskById = (id: string) => {
    return tasks.find(task => task.id === id);
  };

  return (
    <TaskContext.Provider value={{ tasks, updateTask, getTaskById }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};