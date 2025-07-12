import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { T, Tag, Button } from '@admiral-ds/react-ui';
import type { ITask } from '../types/task';

const StyledCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

interface TaskItemProps {
  task: ITask;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const navigate = useNavigate();

  return (
    <StyledCard>
      <T font="Subtitle/Subtitle 1">{task.title}</T>
      {task.description && <T font="Body/Body 2 Long">{task.description}</T>}
      <TagsWrapper>
        <Tag kind="primary">{task.category}</Tag>
        <Tag kind="success">{task.status}</Tag>
      </TagsWrapper>
      <Button
        dimension="s"
        appearance="secondary"
        onClick={() => navigate(`/task/${task.id}`)}
        style={{ marginTop: 'auto' }}
      >
        View Task
      </Button>
    </StyledCard>
  );
};