import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import type { ITask } from './task';

const initialTasks: ITask[] = [
  {
    id: '1',
    title: 'Сделать 1 домашнее задание в ИТ-Лагере',
    description: 'Создать данный менеджер задач',
    category: 'Bug',
    status: 'To Do',
    priority: 'High',
  },
  {
    id: '2',
    title: 'Поучавствовать в 1 воркшопе',
    description: 'Перед этим сделать 1 дз',
    category: 'Feature',
    status: 'In Progress',
    priority: 'Medium',
  },
  {
    id: '3',
    title: 'Пройти весь курс в лагере',
    description: '',
    category: 'Documentation',
    status: 'Done',
    priority: 'Low',
  },
  {
    id: '4',
    title: 'Написать 1 тест по frontend',
    category: 'Test',
    status: 'To Do',
    priority: 'Medium',
  },
  {
    id: '5',
    title: 'Пройти на стажировку в Т1',
    category: 'Refactor',
    status: 'In Progress',
    priority: 'High',
  },
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
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const getTaskById = (id: string) => {
    return tasks.find((task) => task.id === id);
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
