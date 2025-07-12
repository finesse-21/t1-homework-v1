import styled from 'styled-components';
import { useTasks } from '../context/TaskContext';
import { TaskItem } from './TaskItem';

const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
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