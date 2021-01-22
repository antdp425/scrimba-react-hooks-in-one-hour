import "./App.css";
import React, { useState } from 'react'

function App() {
  // here we are destructuring useState, which is just a function
  // that returns an array: [ourVariable, ourFunction that sets ourVariable]
  let [count, setCount] = useState(0);

  // useState allows us to pass in the starting value, here it is 0

  return (
    <div className="App">
      {count}
      <br/>

    {/* here we're using setCount from above to increase the value */}
    {/* while we could've just said setCount(count++) */}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase Counter</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease Counter</button>

    </div>
  );
}

export default App;
