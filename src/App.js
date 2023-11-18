import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChangeCategory from './pages/ChangeCategory';
import Send from './pages/Send';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='send' element={<Send/>}/>
        <Route path='category' element={<ChangeCategory/>}/>
      </Routes>
    </div>
  );
}

export default App;
