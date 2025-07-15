import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { T, Tag, Button } from '@admiral-ds/react-ui';
import type { ITask } from '@entities/task/model/task';
import { Card } from '@shared/ui/Card';
import { priorityToColor } from '@entities/task/lib/priorityToColor';
import { useAppDispatch } from '@shared/lib/hooks';
import { deleteTask } from '@entities/task/model/taskSlice';

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
  const dispatch = useAppDispatch();

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

      <Button
        dimension="s"
        appearance="ghost"
        onClick={() => dispatch(deleteTask(task.id))}
        style={{ marginTop: '8px', color: 'red' }}
      >
        Удалить
      </Button>
    </Card>
  );
};
