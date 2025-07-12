import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { T, TextField, TextArea, Select, Button, Option } from '@admiral-ds/react-ui';
import { useTasks } from '../context/TaskContext';
import type { ITask } from '../types/task';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
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
    return <T font='Main/L'>Загрузка...</T>;
  }

  const handleChange = (field: keyof ITask, value: string) => {
    setTask(prev => prev ? { ...prev, [field]: value } : null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      updateTask(task);
      navigate('/');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        label="Заголовок"
        value={task.title}
        onChange={(e) => handleChange('title', e.target.value)}
        required
      />
      <TextArea
        placeholder="Описание"
        value={task.description}
        onChange={(e) => handleChange('description', e.target.value)}
        style={{ minHeight: '120px' }}
      />
      <Select
        placeholder="Статус"
        value={task.status}
        onChange={(value) => handleChange('status', value.target.value)}
      >
        {STATUSES.map((status) => (
          <Option key={status} value={status}>
            {status}
          </Option>
        ))}
      </Select>

      <Select
        placeholder="Категория"
        value={task.category}
        onChange={(value) => handleChange('category', value.target.value)}
      >
        {CATEGORIES.map((category) => (
          <Option key={category} value={category}>
            {category}
          </Option>
        ))}
      </Select>

      <Select
        placeholder="Приоритет"
        value={task.priority}
        onChange={(value) => handleChange('priority', value.target.value)}
      >
        {PRIORITIES.map((priority) => (
          <Option key={priority} value={priority}>
            {priority}
          </Option>
        ))}
      </Select>
      <ButtonGroup>
        <Button type="submit" appearance="primary">Сохранить</Button>
        <Button type="button" appearance="secondary" onClick={() => navigate('/')}>Отмена</Button>
      </ButtonGroup>
    </Form>
  );
};