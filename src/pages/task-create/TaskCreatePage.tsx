import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { ITask } from '@entities/task/model/task';
import { createTask } from '@entities/task/model/taskSlice';
import { useAppDispatch } from '@shared/lib/hooks';
import { LayoutWrapper } from '@app/ui/LayoutWrapper';
import { TaskDetailsForm } from '@features/edit-task/ui/TaskDetailsForm';

export const TaskCreatePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [task, setTask] = useState<ITask>({
    id: uuidv4(),
    title: '',
    description: '',
    status: 'To Do',
    category: 'Feature',
    priority: 'Medium',
  });

  const handleSave = () => {
    dispatch(createTask(task));
    navigate('/');
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
