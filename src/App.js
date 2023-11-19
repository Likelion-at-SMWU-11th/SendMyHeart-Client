import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChangeCategory from './pages/ChangeCategory';
import Register from './pages/Register';
import Send from './pages/Send';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='send' element={<Send/>}/>
        <Route path='category' element={<ChangeCategory/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
