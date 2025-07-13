import styled from 'styled-components';
import { useTasks } from '../context/TaskContext';
import { TaskItem } from './TaskItem';

const TaskGrid = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  flex-wrap: wrap;
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