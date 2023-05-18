import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import '../../styles/LandingSection1.css';

function App(props) {
  const [state, setState] = useState('');

  const words = [
    'Our modern society is rapidly developing',
    'People\'s life is more and more convienient',
    'But that cames with consequences',
    'The environment is being destroyed insanely fast',
    'Technology advancement is important',
    'But keep the environment clean, safe and unharm is also important',
    'Carl Sagan once said:',
    'Preserve and cherish the pale blue dot, the only home we\'ve ever known',
    'So let\'s take action today, before it\'s too late'
  ]

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <section id='section1' className='position-relative'>
        <div className='image'></div>
        <div className='position-absolute top-50 start-50 translate-middle'>
          <p className='text-white fs-1 text-center'>
            Environment and Everyone
          </p>
          <p className='text-white text-center fs-5'>
            <Typewriter words={words}/>
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
