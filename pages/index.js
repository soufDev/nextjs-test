import React, { useState } from 'react';
import Home from '../components/Home';

export default function App() {
  const [value, setValue] = useState(1);
  return (
    <>
      <button onClick={() => setValue(value + 1)}>{value}</button>
      <Home message="hello world" />
    </>
  );
}
