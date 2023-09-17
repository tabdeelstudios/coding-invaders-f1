import './App.css';
import AddCounter from './AddCounter';
import SubtractCounter from './SubtractCounter';
import { useSelector } from 'react-redux';
import TempData from './TempData';
import StoreLikes from './StoreLikes';

function App() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <h1>{count}</h1>
      <AddCounter/>
      <SubtractCounter/>
      <TempData/>
      <StoreLikes/>
    </div>
  );
}

export default App;
