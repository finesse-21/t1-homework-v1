import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { T, Tag, Button} from '@admiral-ds/react-ui';
import type { ITask } from '../types/task';
import { Card } from './ui/Card';
import { priorityToColor } from '../utils/priorityToColor';

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
    <Card maxWidth="350px">
      <T font="Subtitle/Subtitle 1">{task.title}</T>
      {task.description && <T font="Body/Body 2 Long">{task.description}</T>}
      <TagsWrapper>
        <Tag kind="success">{task.status}</Tag>
        <Tag kind="primary">{task.category}</Tag>
        <Tag kind={priorityToColor(task.priority)}>{task.priority}</Tag>
      </TagsWrapper>
      <Button
        dimension="s"
        appearance="secondary"
        onClick={() => navigate(`/task/${task.id}`)}
        style={{ marginTop: 'auto' }}
      >
        Редактировать
      </Button>
    </Card>
  );
};