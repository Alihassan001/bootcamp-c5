import React, {useState} from 'react';
import './App.css'

function App() {
  const [lit, setLit] = useState(false)
  const [room, setRoom] = useState(0)
  return (
    <div className='App'>
      <h1>React States - class 4 </h1>
      <p>The room is {lit ? 'lit' : 'dark'}</p>
      <button onClick={ () => setLit(!lit) }>
        Turn {lit ? 'OFF' : 'ON'} lit</button>

      <p>The available rooms are: {room}</p>
      <button onClick={ () => setRoom(room + 1) }>Add Room</button>
    </div>
  );
}

export default App;
