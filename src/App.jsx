import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import VideoPage from './pages/VideosPage/VideoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/get-started' element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
