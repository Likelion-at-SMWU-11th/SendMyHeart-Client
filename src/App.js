import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChangeCategory from './pages/ChangeCategory';
import Send from './pages/Send';
import Copy from './pages/Copy';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='send' element={<Send/>}/>
        <Route path='category' element={<ChangeCategory/>}/>
        <Route path='copy' element={<Copy/>}/>
      </Routes>
    </div>
  );
}

export default App;
