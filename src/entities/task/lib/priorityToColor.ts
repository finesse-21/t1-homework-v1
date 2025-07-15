import type { TaskPriority } from '../model/task';
import type { TagKind } from '@admiral-ds/react-ui';

export const priorityToColor = (priority: TaskPriority): TagKind => {
  const map: Record<TaskPriority, TagKind> = {
    Low: 'neutral',
    Medium: 'warning',
    High: 'danger',
  };
  return map[priority];
};
