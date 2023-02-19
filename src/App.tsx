import { useState } from 'react';
import HomeTemplate from './components/templates/HomeTemplate';

function App() {
  const [count, setCount] = useState(0);

  return <HomeTemplate></HomeTemplate>;
}

export default App;
