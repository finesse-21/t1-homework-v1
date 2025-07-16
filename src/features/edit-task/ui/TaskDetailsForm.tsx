import styled from 'styled-components';
import { TextField, Button } from '@admiral-ds/react-ui';
import { Card } from '@shared/ui/Card';
import { SelectFieldBlock } from '@shared/ui/SelectFieldBlock';
import { CATEGORIES, STATUSES, PRIORITIES } from '@entities/config/taskOptions';
import type { ITask } from '@entities/task/model/task';
import { DateField } from '@admiral-ds/react-ui';
import { format, parseISO } from 'date-fns';

/**
 * Стили для группы кнопок формы.
 */
const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

/**
 * Стили для сетки полей формы.
 */
const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

/**
 * Пропсы для формы деталей задачи.
 */
interface Props {
  task: Partial<ITask>;
  onChange: (task: ITask) => void;
  onSave: () => void;
  onCancel: () => void;
}

/**
 * Форма для просмотра и редактирования деталей задачи.
 */
export const TaskDetailsForm = ({ task, onChange, onSave, onCancel }: Props) => {
  /**
   * Обновляет поле задачи.
   * @param field - поле задачи
   * @param value - новое значение
   */
  const handleChange = (field: keyof ITask, value: string) => {
    onChange({ ...task, [field]: value } as ITask);
  };

  return (
    <Card
      as="form"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSave();
      }}
      padding="40px"
      maxWidth="1000px"
    >
      <TextField
        label="Заголовок"
        value={task.title}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleChange('title', e.target.value)
        }
        required
      />

      <TextField
        label="Описание"
        placeholder="Опишите задачу подробнее..."
        value={task.description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleChange('description', e.target.value)
        }
        style={{ minHeight: '120px' }}
      />

      <FieldsGrid>
        <SelectFieldBlock
          label="Статус"
          value={task.status ?? ''}
          options={STATUSES}
          onChange={(v: string) => handleChange('status', v)}
        />

        <SelectFieldBlock
          label="Категория"
          value={task.category ?? ''}
          options={CATEGORIES}
          onChange={(v: string) => handleChange('category', v)}
        />

        <SelectFieldBlock
          label="Приоритет"
          value={task.priority ?? ''}
          options={PRIORITIES}
          onChange={(v: string) => handleChange('priority', v)}
        />
      </FieldsGrid>
      <DateField
        label="Дата создания"
        value={task.createdAt ? format(parseISO(task.createdAt), 'yyyy-MM-dd') : ''}
        onChange={(date) => {
          if (date) {
            handleChange('createdAt', new Date(date.target.value).toISOString());
          }
        }}
        style={{ maxWidth: '280px' }}
      />

      <ButtonGroup>
        <Button type="submit" appearance="primary" disabled={!task.title?.trim()}>
          Сохранить
        </Button>
        <Button type="button" appearance="secondary" onClick={onCancel}>
          Отмена
        </Button>
      </ButtonGroup>
    </Card>
  );
};
