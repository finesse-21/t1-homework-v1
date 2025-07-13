import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { T, Button, SelectField, Option } from '@admiral-ds/react-ui';
import { useTasks } from '../context/TaskContext';
import { TaskList } from '../components/TaskList';
import { LayoutWrapper } from '../components/LayoutWrapper';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1100px;
  margin-bottom: 32px;

  @media (max-width: 600px) {
    flex-direction: column; 
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
  }
`;

const Title = styled(T)`
  color: #fcfcfd;
`;

const FilterContainer = styled.div`
  background-color: #fcfcfd;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  box-sizing: border-box;
  border: 1px solid #d1d4d6;
`;

const CATEGORIES = ['Bug', 'Feature', 'Documentation', 'Refactor', 'Test'];
const STATUSES = ['To Do', 'In Progress', 'Done'];
const PRIORITIES = ['Low', 'Medium', 'High'];

export const HomePage = () => {
  const { tasks } = useTasks();
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [filters, setFilters] = useState({
    status: 'All',
    category: 'All',
    priority: 'All',
  });

  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const resetFilters = () => {
    setFilters({ status: 'All', category: 'All', priority: 'All' });
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const statusMatch = filters.status === 'All' || task.status === filters.status;
      const categoryMatch = filters.category === 'All' || task.category === filters.category;
      const priorityMatch = filters.priority === 'All' || task.priority === filters.priority;
      return statusMatch && categoryMatch && priorityMatch;
    });
  }, [tasks, filters]);

  return (
    <LayoutWrapper>
      <TitleWrapper>
        <Title font="Header/H1">Менеджер задач</Title>
        <Button
          appearance="primary"
          dimension="s"
          onClick={() => setIsFilterVisible((v) => !v)}
        >
          {isFilterVisible ? 'Скрыть фильтры' : 'Фильтры'}
        </Button>
      </TitleWrapper>

      {isFilterVisible && (
        <FilterContainer>
          <SelectField
            label="Статус"
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            <Option value="All">Все</Option>
            {STATUSES.map((status) => (
              <Option key={status} value={status}>{status}</Option>
            ))}
          </SelectField>

          <SelectField
            label="Категория"
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
          >
            <Option value="All">Все</Option>
            {CATEGORIES.map((category) => (
              <Option key={category} value={category}>{category}</Option>
            ))}
          </SelectField>

          <SelectField
            label="Приоритет"
            value={filters.priority}
            onChange={(e) => handleFilterChange('priority', e.target.value)}
          >
            <Option value="All">Все</Option>
            {PRIORITIES.map((priority) => (
              <Option key={priority} value={priority}>{priority}</Option>
            ))}
          </SelectField>

          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <Button appearance="secondary" onClick={resetFilters}>
              Сбросить
            </Button>
          </div>
        </FilterContainer>
      )}

      <TaskList tasks={filteredTasks} />
    </LayoutWrapper>
  );
};