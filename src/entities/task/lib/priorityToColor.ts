import type { TaskPriority } from '../model/task';
import type { TagKind } from '@admiral-ds/react-ui';

/**
 * Преобразует приоритет задачи в цветовую метку для компонента Tag.
 * @param priority - Приоритет задачи ('Low', 'Medium', 'High')
 * @returns Цветовая метка для тега ('neutral', 'warning', 'danger')
 */
export const priorityToColor = (priority: TaskPriority): TagKind => {
  const map: Record<TaskPriority, TagKind> = {
    Low: 'neutral',
    Medium: 'warning',
    High: 'danger',
  };
  return map[priority];
};
