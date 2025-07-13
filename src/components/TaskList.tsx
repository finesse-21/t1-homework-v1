import styled from 'styled-components';
import { TaskItem } from './TaskItem';
import type { ITask } from '../types/task'; 

const TaskGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
`;

interface TaskListProps {
  tasks: ITask[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <TaskGrid>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </TaskGrid>
  );
};