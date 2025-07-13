import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { T, Tag, Button, type TagKind } from '@admiral-ds/react-ui';
import type { ITask } from '../types/task';

const StyledCard = styled.div`
  background-color: #fcfcfd;
  border: 1px solid #d1d4d6;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  width: 350px;
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
        <Tag kind="success">{task.status}</Tag>
        <Tag kind="primary">{task.category}</Tag>
        <Tag kind={priorityColorMap[task.priority]}>{task.priority}</Tag>
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