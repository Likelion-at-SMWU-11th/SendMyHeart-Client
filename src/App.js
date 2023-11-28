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
import OnBoarding from './pages/OnBoarding';
import Splash from './pages/Splash';
import { createContext, useState } from 'react';
import MyPage from './pages/MyPage';
import FriendsList from './pages/FriendsList';
import CreateFriend from './pages/CreateFriend';

export const UserContext=createContext();

function App() {
  const [user, setUser] = useState({ userId: '', userName: '', profile:'' });
  const [receiver, setReceiver]=useState('')
  return (
      <UserContext.Provider value={{user, setUser, receiver, setReceiver}}>
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
          <Route path="onboarding" element={<OnBoarding />} />
          <Route path="/" element={<Splash/>} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="mypage/friendslist" element={<FriendsList />} />
        <Route path="mypage/createfriend" element={<CreateFriend />} />
        </Routes>
      </div>
      </UserContext.Provider>
  );
}

export default App;
