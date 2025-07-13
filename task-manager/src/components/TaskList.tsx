import styled from 'styled-components';
import { useTasks } from '../context/TaskContext';
import { TaskItem } from './TaskItem';

const TaskGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
`;

export const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <TaskGrid>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </TaskGrid>
  );
};