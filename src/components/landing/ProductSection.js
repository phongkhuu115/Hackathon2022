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
      <section id = 'section2' className='section2 d-flex py-5 h-100'>
        <div className="col text-center d-inline-block">
          <img src={Interact} alt=" " className='' />
          <p className='fs-3 mt-3'>Tương tác là điểm mạnh của một website, đặc biệt là website về mạng xã hội. Website này sẽ giúp việc tương tác với nhau sẽ trở nên đơn giản hơn thông qua việc cùng nhau thực hiện những việc làm bảo vệ môi trường.</p>
        </div>
        <div className="col text-center d-inline-block">
          <img src={Water} alt=" " />
        </div>
        <div className="col text-center d-inline-block">
          <img src={Point} alt=" " />
          <p className='fs-3 mt-3'>Hệ thống điểm sẽ kích thích tinh thần của người dùng, giúp mọi người sẽ cố gắng kiếm điểm để đổi những phần quà hấp dẫn đồng thời góp phần bảo vệ môi trường</p>
        </div>
      </section>
    </>
  )
}

export default LandingSection2;