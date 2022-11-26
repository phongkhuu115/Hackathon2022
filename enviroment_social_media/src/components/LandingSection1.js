import React, { useState, useEffect } from 'react';
import '../styles/LandingSection1.css'

function App(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {

    }
  }, []);

  return (
    <>
      <section id='section1' className='section1'>

      </section>
      <div className='position-absolute top-50 start-50 translate-middle'>
        <p className='text-white fs-1 text-center'>Lorem ipsum dolor sit amet</p>
        <p className='text-white text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique itaque in modi adipisci sint nobis cum vel doloribus pariatur quasi amet quisquam nisi mollitia, accusantium atque hic delectus corporis obcaecati.</p>
      </div>
    </>
  )
}

export default App;