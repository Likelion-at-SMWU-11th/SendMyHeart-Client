import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChangeCategory from './pages/ChangeCategory';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Send from './pages/Send';
import Login from './pages/Login';
import FindAccount from './pages/FindAccount';
import Schedule from './pages/Schedule';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="send" element={<Send />} />
        <Route path="category" element={<ChangeCategory />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="find" element={<FindAccount />} />
        <Route path="schedule" element={<Schedule />} />
      </Routes>
    </div>
  );
}

export default App;
