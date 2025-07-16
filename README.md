# 📋 Task Manager

Task Manager — одностраничное приложение (SPA) для управления задачами, разработанное с использованием современных технологий. Позволяет создавать, редактировать, удалять и фильтровать задачи по различным параметрам. Реализовано долговременное хранение данных через REST API с помощью `json-server`.

---

## Реализованный функционал

- ✅ Просмотр списка задач в виде адаптивной сетки карточек
- ✅ Фильтрация задач по статусу, категории и приоритету
- ✅ Создание новой задачи через форму `/task/new`
- ✅ Редактирование существующей задачи `/task/:id`
- ✅ Удаление задачи с подтверждением
- ✅ Отображение даты создания задачи
- ✅ Понятный UI и удобный UX, соответствующий гайдлайнам Admiral DS
- ✅ Сохранение данных на mock backend (`json-server`)

---

## Применённая архитектура

Проект построен по принципам Feature-Sliced Design (FSD). Основные уровни:

```
src/
├── app/       # Инициализация приложения (App, роутинг, store)
├── entities/  # Базовые сущности (Task: model, UI, API, types)
├── features/  # Функциональные модули (edit-task, filter-task)
├── shared/    # Переиспользуемые компоненты, утилиты, хелперы
├── pages/     # Страницы (HomePage, TaskCreatePage, TaskDetailPage)
├── widgets/   # Композитные блоки (TaskList и др.)
```

- Состояние задач управляется через `Redux Toolkit` (`createAsyncThunk`, `createSlice`)
- API-интеграция реализована с помощью `axios` и `json-server`
- Все стили изолированы: используются `styled-components` и CSS-модули

---

## Используемые технологии

| Категория            | Технологии                              |
| -------------------- | --------------------------------------- |
| **Язык и сборка**    | TypeScript, Vite                        |
| **UI и стилизация**  | @admiral-ds/react-ui, styled-components |
| **State Management** | Redux Toolkit, React Redux              |
| **Роутинг**          | React Router DOM                        |
| **Mock Backend**     | json-server                             |
| **Архитектура**      | Feature-Sliced Design                   |
| **Прочее**           | axios, uuid, date-fns                   |

---

## ⚙️ Установка и запуск

1. **Клонируй репозиторий**

   ```bash
   git clone https://github.com/finesse-21/t1-homework-v1.git
   cd t1-homework-v1
   ```

2. **Установи зависимости**

   ```bash
   npm install
   ```

3. **Запусти проект (frontend + backend)**

   ```bash
   npm run start
   ```

   - Это одновременно запустит:
     - Vite на `http://localhost:3000`
     - json-server на `http://localhost:3001/tasks`

---

## 📁 Пример начального `db.json`

```json
{
  "tasks": [
    {
      "id": "1",
      "title": "Сделать 1 домашнее задание",
      "description": "Создать менеджер задач",
      "category": "Bug",
      "status": "To Do",
      "priority": "High",
      "createdAt": "2025-07-10T09:00:00.000Z"
    }
  ]
}
```

---

Также можно ознакомиться с приложением по ссылке:  
[https://stackblitz.com/~/github.com/finesse-21/t1-homework-v1](https://stackblitz.com/~/github.com/finesse-21/t1-homework-v1)
