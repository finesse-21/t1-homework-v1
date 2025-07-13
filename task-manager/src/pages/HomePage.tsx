import styled from 'styled-components';
import { T } from '@admiral-ds/react-ui';
import { TaskList } from '../components/TaskList';
import { LayoutWrapper } from '../components/LayoutWrapper';

const Title = styled(T)`
  margin-bottom: 32px;
  text-align: center;
  color: #fcfcfd;
`;

export const HomePage = () => {
  return (
    <LayoutWrapper>
      <Title font="Header/H1">Менеджер задач</Title>
      <TaskList />
    </LayoutWrapper>
  );
};