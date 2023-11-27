import { Route, Routes } from 'react-router-dom';
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
import { createContext, useCallback, useState } from 'react';

export const UserContext=createContext();

function App() {
  const [user, setUser] = useState({ userId: '', userName: '' });
  
  return (
      <UserContext.Provider value={{user, setUser}}>
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
        </Routes>
      </div>
      </UserContext.Provider>
    
  );
}

export default App;
