import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { T, TextField, TextArea, Select, Button } from '@admiral-ds/react-ui';
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
      // Если задача не найдена, можно перенаправить на главную
      navigate('/');
    }
  }, [taskId, getTaskById, navigate]);

  if (!task) {
    return <T as="p" font={'Header/H1'}>Загрузка...</T>;
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
        value={task.description}
        onChange={(e) => handleChange('description', e.target.value)}
        style={{ minHeight: '120px' }}
      />
      {/* <Select
        value={task.category}
        onChange={(e) => handleChange('category', e.target.value)}
        options={CATEGORIES}
      />
      <Select
        label="Статус"
        value={task.status}
        onChange={(e) => handleChange('status', e.target.value)}
        options={STATUSES}
      />
      <Select
        label="Приоритет"
        value={task.priority}
        onChange={(e) => handleChange('priority', e.target.value)}
        options={PRIORITIES}
      /> */}
      <ButtonGroup>
        <Button type="submit" appearance="primary">Сохранить</Button>
        <Button type="button" appearance="secondary" onClick={() => navigate('/')}>Отмена</Button>
      </ButtonGroup>
    </Form>
  );
};