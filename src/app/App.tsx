import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/home/HomePage';
import { TaskDetailPage } from '../pages/task-details/TaskDetailPage';
import { TaskProvider } from '../entities/task/model/TaskContext';

function App() {
  return (
    <TaskProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task/:id" element={<TaskDetailPage />} />
      </Routes>
    </TaskProvider>
  );
}

export default App;
