import styled from 'styled-components';
import { T } from '@admiral-ds/react-ui';
import { TaskList } from '../components/TaskList';

const PageWrapper = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(T)`
  margin-bottom: 24px;
`;

export const HomePage = () => {
  return (
    <PageWrapper>
      <Title font="Header/H1">Менеджер задач</Title>
      <TaskList />
    </PageWrapper>
  );
};