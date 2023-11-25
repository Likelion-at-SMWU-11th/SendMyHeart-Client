import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChangeCategory from './pages/ChangeCategory';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Send from './pages/Send';
import Copy from './pages/Copy';
import Login from './pages/Login';
import FindAccount from './pages/FindAccount';
import Schedule from './pages/Schedule';
import MyPage from './pages/MyPage';
import FriendsList from './pages/FriendsList';
import CreateFriend from './pages/CreateFriend';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="send" element={<Send />} />
        <Route path="category" element={<ChangeCategory />} />
        <Route path="copy" element={<Copy />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="find" element={<FindAccount />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="send" element={<Send />} />
        <Route path="category" element={<ChangeCategory />} />
        <Route path="copy" element={<Copy />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="mypage/friendslist" element={<FriendsList />} />
        <Route path="mypage/createfriend" element={<CreateFriend />} />
      </Routes>
    </div>
  );
}

export default App;
