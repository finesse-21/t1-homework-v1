import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  T,
  TextField,
  SelectField,
  Option,
  Button,
} from '@admiral-ds/react-ui';
import { useTasks } from '../context/TaskContext';
import type { ITask } from '../types/task';

const FormCard = styled.form`
  background-color: #fcfcfd;
  border: 1px solid #d1d4d6;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
`;

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

const CATEGORIES = ['Bug', 'Feature', 'Documentation', 'Refactor', 'Test'];
const STATUSES = ['To Do', 'In Progress', 'Done'];
const PRIORITIES = ['Low', 'Medium', 'High'];

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
    <FormCard onSubmit={handleSubmit}>
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
        <SelectField
          label="Статус"
          value={task.status}
          onChange={(value) => handleChange('status', value.target.value)}
        >
          {STATUSES.map((status) => (
            <Option key={status} value={status}>
              {status}
            </Option>
          ))}
        </SelectField>

        <SelectField
          label="Категория"
          value={task.category}
          onChange={(value) => handleChange('category', value.target.value)}
        >
          {CATEGORIES.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </SelectField>

        <SelectField
          label="Приоритет"
          value={task.priority}
          onChange={(value) => handleChange('priority', value.target.value)}
        >
          {PRIORITIES.map((priority) => (
            <Option key={priority} value={priority}>
              {priority}
            </Option>
          ))}
        </SelectField>
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
    </FormCard>
  );
};