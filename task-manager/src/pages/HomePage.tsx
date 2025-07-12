import styled from 'styled-components';
import { T } from '@admiral-ds/react-ui';
import { TaskList } from '../components/TaskList';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: var(--color-bg-secondary);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled(T)`
  margin-bottom: 32px;
  text-align: center;
  color: var(--color-text-primary);
`;

export const HomePage = () => {
  return (
    <PageWrapper>
      <Title font="Header/H1">Менеджер задач</Title>
      <TaskList />
    </PageWrapper>
  );
};