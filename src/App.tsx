import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TaskDetailPage } from './pages/TaskDetailPage';
import { TaskProvider } from './context/TaskContext';

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