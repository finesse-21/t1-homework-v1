import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  T,
  TextField,
  Button,
} from '@admiral-ds/react-ui';
import { useTasks } from '../context/TaskContext';
import type { ITask } from '../types/task';
import { CATEGORIES, STATUSES, PRIORITIES } from '../constants/taskOptions';
import { SelectFieldBlock } from './SelectFieldBlock';
import { Card } from './ui/Card';

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

interface TaskDetailsProps {
  taskId: string;
}

export const TaskDetails = ({ taskId }: TaskDetailsProps) => {
  const { getTaskById, updateTask } = useTasks();
  const navigate = useNavigate();
  const [task, setTask] = useState<ITask | null>(null);

  useEffect(() => {
    const currentTask = getTaskById(taskId);
    if (currentTask) {
      setTask(currentTask);
    } else {
      navigate('/');
    }
  }, [taskId, getTaskById, navigate]);

  if (!task) {
    return <T font="Main/L">Загрузка...</T>;
  }

  const handleChange = (field: keyof ITask, value: string) => {
    setTask((prev) => (prev ? { ...prev, [field]: value } : null));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      updateTask(task);
      navigate('/');
    }
  };

  return (
    <Card
      as="form"
      onSubmit={handleSubmit}
      padding="40px"
      maxWidth="1000px"
    >
      <TextField
        label="Заголовок"
        value={task.title}
        onChange={(e) => handleChange('title', e.target.value)}
        required
      />

      <TextField
        label="Описание"
        placeholder="Опишите задачу подробнее..."
        value={task.description}
        onChange={(e) => handleChange('description', e.target.value)}
        style={{ minHeight: '120px' }}
      />

      <FieldsGrid>
        <SelectFieldBlock
          label="Статус"
          value={task.status}
          options={STATUSES}
          onChange={(v) => handleChange('status', v)}
        />

        <SelectFieldBlock
          label="Категория"
          value={task.category}
          options={CATEGORIES}
          onChange={(v) => handleChange('category', v)}
        />

        <SelectFieldBlock
          label="Приоритет"
          value={task.priority}
          options={PRIORITIES}
          onChange={(v) => handleChange('priority', v)}
        />
      </FieldsGrid>

      <ButtonGroup>
        <Button
          type="submit"
          appearance="primary"
          disabled={!task.title.trim()}
        >
          Сохранить
        </Button>
        <Button
          type="button"
          appearance="secondary"
          onClick={() => navigate('/')}
        >
          Отмена
        </Button>
      </ButtonGroup>
    </Card>
  );
};
