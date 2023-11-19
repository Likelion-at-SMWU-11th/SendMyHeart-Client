import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChangeCategory from './pages/ChangeCategory';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Send from './pages/Send';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="send" element={<Send />} />
        <Route path="category" element={<ChangeCategory />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
