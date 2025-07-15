import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { T, Tag } from '@admiral-ds/react-ui';
import type { ITask } from '@entities/task/model/task';
import { Card } from '@shared/ui/Card';
import { priorityToColor } from '@entities/task/lib/priorityToColor';
import { useAppDispatch } from '@shared/lib/hooks';
import { deleteTask } from '@entities/task/model/taskSlice';
import { format } from 'date-fns';
import { SystemDeleteOutline } from '@admiral-ds/icons';
import styles from '@shared/ui/DeleteIcon/DeleteIcon.module.css';

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
    <Card
      style={{ position: 'relative', cursor: 'pointer', maxWidth: '400px' }}
      onClick={() => navigate(`/task/${task.id}`)}
    >
      <SystemDeleteOutline
        className={styles.deleteIcon}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          dispatch(deleteTask(task.id));
        }}
      />
      <T font="Subtitle/Subtitle 1">{task.title}</T>
      {task.description && <T font="Body/Body 2 Long">{task.description}</T>}
      <TagsWrapper>
        <Tag kind="success">{task.status}</Tag>
        <Tag kind="primary">{task.category}</Tag>
        <Tag kind={priorityToColor(task.priority)}>{task.priority}</Tag>
      </TagsWrapper>
      <T font="Body/Body 2 Long">Дата создания: {format(new Date(task.createdAt), 'dd.MM.yyyy')}</T>
      <T
        font="Caption/Caption 1"
        style={{
          color: 'rgba(0, 0, 0, 0.4)',
          marginTop: 'auto',
          paddingTop: '8px',
        }}
      >
        Нажмите для редактирования
      </T>
    </Card>
  );
};
