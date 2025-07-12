import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { T } from '@admiral-ds/react-ui';
import { TaskDetails } from '../components/TaskDetails';

const PageWrapper = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(T)`
  margin-bottom: 24px;
`;

export const TaskDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <PageWrapper><T font="Header/H1">Задача не найдена</T></PageWrapper>;
  }

  return (
    <PageWrapper>
      <Title font="Header/H1">Редактирование задачи</Title>
      <TaskDetails taskId={id} />
    </PageWrapper>
  );
};