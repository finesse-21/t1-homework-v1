/**
 * Категории задачи.
 */
export type TaskCategory = 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test';

/**
 * Статусы задачи.
 */
export type TaskStatus = 'To Do' | 'In Progress' | 'Done';

/**
 * Приоритеты задачи.
 */
export type TaskPriority = 'Low' | 'Medium' | 'High';

/**
 * Интерфейс задачи.
 * @property id - Уникальный идентификатор задачи
 * @property title - Заголовок задачи
 * @property description - Описание задачи (необязательно)
 * @property category - Категория задачи
 * @property status - Статус задачи
 * @property priority - Приоритет задачи
 * @property createdAt - Дата создания задачи (ISO-строка)
 */
export interface ITask {
  id: string;
  title: string;
  description?: string;
  category: TaskCategory;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: string;
}
