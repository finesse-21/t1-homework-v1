import { Routes, Route } from 'react-router-dom';
import { HomePage } from '@pages/home/HomePage';
import { TaskDetailPage } from '@pages/task-details/TaskDetailPage';
import { TaskCreatePage } from '@pages/task-create/TaskCreatePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/task/:id" element={<TaskDetailPage />} />
      <Route path="/task/new" element={<TaskCreatePage />} />
    </Routes>
  );
}

export default App;
