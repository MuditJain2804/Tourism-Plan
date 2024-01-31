import { useState } from 'react';
import Tours from './components/Tours';
import data from './data'; 
import Button from '@mui/material/Button';

const App = () => {
  const [tours, setTours] = useState(data);
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  if(tours.length === 0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <Button variant='contained' color='inherit' onClick={() => setTours(data)}>Refresh</Button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
