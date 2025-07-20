import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { T, Button, TextField, DateField } from '@admiral-ds/react-ui';
import { useNavigate } from 'react-router-dom';
import { TaskList } from '@widgets/task-list/TaskList';
import { LayoutWrapper, TitleWrapperContainer, TitleWrapper } from '@app/ui/LayoutWrapper';
import { SelectFieldBlock } from '@shared/ui/SelectFieldBlock';
import { STATUSES, CATEGORIES, PRIORITIES } from '@entities/config/taskOptions';
import { filterTasks } from '@entities/task/lib/filterTasks';
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks';
import { fetchTasks } from '@entities/task/model/taskSlice';
import { parseISO, format } from 'date-fns';

const Title = styled(T)`
  color: #fcfcfd;
`;

const FilterContainer = styled.div`
  background-color: #fcfcfd;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  width: 100%;
  max-width: 1100px;
  box-sizing: border-box;
  border: 1px solid #d1d4d6;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  align-items: flex-end;
  gap: 24px;
`;

const FiltersButtonWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: flex-end;
  margin: 16px 0;
  @media (max-width: 600px) {
    justify-content: center;
  }
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
    title: '',
    date: '',
  });

  useEffect(() => {
    dispatch(fetchTasks({ title: filters.title, date: filters.date }));
  }, [dispatch, filters.title, filters.date]);

  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const resetFilters = () => {
    setFilters({
      status: 'All',
      category: 'All',
      priority: 'All',
      title: '',
      date: '',
    });
  };

  const filteredByDropdowns = useMemo(() => {
    return filterTasks(tasks, filters);
  }, [tasks, filters]);

  return (
    <LayoutWrapper>
      <TitleWrapperContainer>
        <TitleWrapper>
          <Title font="Header/H1">Менеджер задач</Title>
          <Button appearance="primary" dimension="s" onClick={() => navigate('/task/new')}>
            Создать задачу
          </Button>
        </TitleWrapper>
      </TitleWrapperContainer>

      <FiltersButtonWrapper>
        <Button
          appearance="primary"
          dimension="s"
          onClick={() => setIsFilterVisible((v) => !v)}
          style={{ marginBottom: '16px' }}
        >
          {isFilterVisible ? 'Скрыть фильтры' : 'Фильтры'}
        </Button>
      </FiltersButtonWrapper>

      {isFilterVisible && (
        <FilterContainer>
          <TextField
            label="Поиск по названию"
            value={filters.title}
            onChange={(e) => handleFilterChange('title', e.target.value)}
          />
          <DateField
            label="Поиск по дате"
            value={filters.date}
            onChange={(e) => {
              const newDate = e.target.value ? format(parseISO(e.target.value), 'yyyy-MM-dd') : '';
              handleFilterChange('date', newDate);
            }}
          />
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
          <Button appearance="secondary" onClick={resetFilters} dimension="m">
            Сбросить
          </Button>
        </FilterContainer>
      )}

      <TaskList tasks={filteredByDropdowns} />
    </LayoutWrapper>
  );
};
