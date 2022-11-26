import React, { useState, useEffect } from 'react';
import '../../styles/LandingSection2.css'
import Interact from '../../assets/Interaction.png'
import Point from '../../assets/Point.png'
import Water from '../../assets/Water.png'

function LandingSection2(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {

    }
  }, []);

  return (
    <>
      <section id = 'section2' className='section2 d-flex py-5'>
        <div className="col text-center d-inline-block">
          <img src={Interact} alt=" " className='' />
          <p className='fs-3 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi natus ipsa quos alias cum temporibus repudiandae porro expedita ratione? Nesciunt dicta quibusdam consequuntur sed alias blanditiis, quidem quia delectus exercitationem.</p>
        </div>
        <div className="col text-center d-inline-block">
          <img src={Water} alt=" " />
        </div>
        <div className="col text-center d-inline-block">
          <img src={Point} alt=" " />
          <p className='fs-3 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi natus ipsa quos alias cum temporibus repudiandae porro expedita ratione? Nesciunt dicta quibusdam consequuntur sed alias blanditiis, quidem quia delectus exercitationem.</p>
        </div>
      </section>
    </>
  )
}

export default LandingSection2;