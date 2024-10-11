
import './App.css';
import { Color } from './Color';
import { useState } from 'react';

function App() {
  let rgb = '';
  function hex2rgb(c) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
  const [color,setColor]=useState('')
  function colorChange (e) {
    const {name,value} = e.target;
    setTimeout(()=>{
      setColor((form)=>(hex2rgb(value)));
    },2000)
  }
  return (
    <Color color={color} funk={colorChange}/>
  );
}

export default App;
