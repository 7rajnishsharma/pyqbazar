import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import Cse from './routes/Cse/Cse';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cse/*" element={<Cse/>} />
      </Routes>
    </>
  );
}

export default App;
