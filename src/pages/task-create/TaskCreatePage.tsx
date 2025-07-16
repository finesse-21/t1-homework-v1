import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { ITask } from '@entities/task/model/task';
import { createTask } from '@entities/task/model/taskSlice';
import { useAppDispatch } from '@shared/lib/hooks';
import { LayoutWrapper } from '@app/ui/LayoutWrapper';
import { TaskDetailsForm } from '@features/edit-task/ui/TaskDetailsForm';

/**
 * Страница создания новой задачи.
 */
export const TaskCreatePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Состояние новой задачи без id
  const [task, setTask] = useState<Omit<ITask, 'id'>>({
    title: '',
    description: '',
    status: 'To Do',
    category: 'Feature',
    priority: 'Medium',
    createdAt: new Date().toISOString(),
  });

  /**
   * Сохраняет новую задачу и возвращает на главную страницу.
   */
  const handleSave = () => {
    dispatch(createTask(task))
      .unwrap()
      .then(() => navigate('/'));
  };

  return (
    <LayoutWrapper>
      <TaskDetailsForm
        task={task}
        onChange={setTask}
        onCancel={() => navigate('/')}
        onSave={handleSave}
      />
    </LayoutWrapper>
  );
};
