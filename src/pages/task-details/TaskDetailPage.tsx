import { useParams } from 'react-router-dom';
import { T } from '@admiral-ds/react-ui';
import { TaskDetails } from '../task-details/TaskDetails';
import { LayoutWrapper } from '@app/ui/LayoutWrapper';

export const TaskDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <LayoutWrapper>
        <T font="Header/H1">Задача не найдена</T>
      </LayoutWrapper>
    );
  }

  return (
    <LayoutWrapper>
      <TaskDetails taskId={id} />
    </LayoutWrapper>
  );
};
