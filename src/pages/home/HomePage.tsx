import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { T, Button } from '@admiral-ds/react-ui';
import { useNavigate } from 'react-router-dom';
import { TaskList } from '@widgets/task-list/TaskList';
import { LayoutWrapper } from '@app/ui/LayoutWrapper';
import { SelectFieldBlock } from '@shared/ui/SelectFieldBlock';
import { STATUSES, CATEGORIES, PRIORITIES } from '@entities/config/taskOptions';
import { filterTasks } from '@entities/task/lib/filterTasks';
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks';
import { fetchTasks } from '@entities/task/model/taskSlice';

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

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [filters, setFilters] = useState({
    status: 'All',
    category: 'All',
    priority: 'All',
  });

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const resetFilters = () => {
    setFilters({ status: 'All', category: 'All', priority: 'All' });
  };

  const filteredTasks = useMemo(() => filterTasks(tasks, filters), [tasks, filters]);

  return (
    <LayoutWrapper>
      <TitleWrapper>
        <Title font="Header/H1">Менеджер задач</Title>
        <Button appearance="primary" dimension="s" onClick={() => navigate('/task/new')}>
          Создать задачу
        </Button>
      </TitleWrapper>

      <Button
        appearance="secondary"
        dimension="s"
        onClick={() => setIsFilterVisible((v) => !v)}
        style={{ marginBottom: '16px' }}
      >
        {isFilterVisible ? 'Скрыть фильтры' : 'Фильтры'}
      </Button>

      {isFilterVisible && (
        <FilterContainer>
          <SelectFieldBlock
            label="Статус"
            value={filters.status}
            options={STATUSES}
            onChange={(v: string) => handleFilterChange('status', v)}
            allowAll
          />
          <SelectFieldBlock
            label="Категория"
            value={filters.category}
            options={CATEGORIES}
            onChange={(v: string) => handleFilterChange('category', v)}
            allowAll
          />
          <SelectFieldBlock
            label="Приоритет"
            value={filters.priority}
            options={PRIORITIES}
            onChange={(v: string) => handleFilterChange('priority', v)}
            allowAll
          />
          <Button appearance="secondary" onClick={resetFilters}>
            Сбросить
          </Button>
        </FilterContainer>
      )}

      <TaskList tasks={filteredTasks} />
    </LayoutWrapper>
  );
};
