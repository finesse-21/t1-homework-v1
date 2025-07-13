import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { T, Tag, Button, type TagKind } from '@admiral-ds/react-ui';
import type { ITask } from '../types/task';

const StyledCard = styled.div`
  border: 1px solid #252627;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  background-color: #C9CACD;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 300px;
  box-sizing: border-box;
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

  const priorityColorMap: Record<string, TagKind> = {
    Low: 'neutral',
    Medium: 'warning',
    High: 'danger',
  };

  return (
    <StyledCard>
      <T font="Subtitle/Subtitle 1">{task.title}</T>
      {task.description && <T font="Body/Body 2 Long">{task.description}</T>}
      <TagsWrapper>
        <Tag kind="primary">{task.category}</Tag>
        <Tag kind="success">{task.status}</Tag>
        <Tag kind={priorityColorMap[task.priority]}>
          {task.priority}
        </Tag>
      </TagsWrapper>
      <Button
        dimension="s"
        appearance="secondary"
        onClick={() => navigate(`/task/${task.id}`)}
        style={{ marginTop: 'auto' }}
      >
        Редактировать
      </Button>
    </StyledCard>
  );
};