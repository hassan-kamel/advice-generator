import { useEffect, useState } from 'react';
import Dice from './components/Dice';
import PatternDividerDesk from './components/PatternDividerDesk';
import PatternDividerMob from './components/PatternDividerMob';

function App() {
  const [advice, setAdvice] = useState({});

  const getAvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((adv) => {
        setAdvice(adv.slip);
      });
  };
  useEffect(() => {
    getAvice();
  }, []);
  return (
    <div className='app'>
      <span>advice #{advice.id}</span>
      <p>
        <sup>❝ </sup>
        {advice.advice}
        <sup> ❞</sup>
      </p>
      <div className='divider'>
        {window.innerWidth < 680 ? (
          <PatternDividerMob />
        ) : (
          <PatternDividerDesk />
        )}
      </div>
      <button className='dice' onClick={getAvice}>
        <Dice />
      </button>
    </div>
  );
}

export default App;
