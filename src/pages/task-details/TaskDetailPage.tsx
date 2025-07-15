import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@shared/lib/hooks';
import type { RootState } from '@app/store';
import { useState, useEffect } from 'react';
import { LayoutWrapper } from '@app/ui/LayoutWrapper';
import { TaskDetailsForm } from '@features/edit-task/ui/TaskDetailsForm';
import { updateTask } from '@entities/task/model/taskSlice';
import type { ITask } from '@entities/task/model/task';

export const TaskDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const taskFromStore: ITask | undefined = useAppSelector((state: RootState) =>
    state.tasks.tasks.find((t: ITask) => t.id === id),
  );

  const [task, setTask] = useState<ITask | null>(null);

  useEffect(() => {
    if (taskFromStore) {
      setTask(taskFromStore);
    } else {
      navigate('/');
    }
  }, [taskFromStore, navigate]);

  if (!task) return null;

  const handleSave = () => {
    dispatch(updateTask(task));
    navigate('/');
  };

  return (
    <LayoutWrapper>
      <TaskDetailsForm
        task={task}
        onChange={setTask}
        onSave={handleSave}
        onCancel={() => navigate('/')}
      />
    </LayoutWrapper>
  );
};
