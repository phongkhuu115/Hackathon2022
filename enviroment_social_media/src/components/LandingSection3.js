import React, { useState, useEffect } from 'react';
import '../styles/LandingSection3.css'
import contact1 from '../assets/Phong.png'
import contact2 from '../assets/Tai.png'
import contact3 from '../assets/NA.png'
import contact4 from '../assets/DA.png'

function LandingSection3(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {

    }
  }, []);

  return (
    <>
      <section id='section3' className='section3 d-flex text-center py-5'>
        <div className="col d-inline-block text-center">
          <img src={contact1} alt="" className='contact__img'/>
          <p className='fs-1 fw-bold text-success mt-3'>Minh Phong</p>
          <p className='fs-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos ullam iusto alias, sapiente dolorum. Saepe laudantium quidem, tempora id, sequi perferendis nam totam neque pariatur corrupti dignissimos vero! Officia.</p>
        </div>
        <div className="col d-inline-block text-center">
          <img src={contact2} alt="" className='contact__img'/>
          <p className='fs-1 fw-bold text-success mt-3'>Anh Tài</p>
          <p className='fs-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos ullam iusto alias, sapiente dolorum. Saepe laudantium quidem, tempora id, sequi perferendis nam totam neque pariatur corrupti dignissimos vero! Officia.</p>
        </div>
        <div className="col d-inline-block text-center">
          <img src={contact3} alt="" className='contact__img'/>
          <p className='fs-1 fw-bold text-success mt-3'>Nhật Anh</p>
          <p className='fs-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos ullam iusto alias, sapiente dolorum. Saepe laudantium quidem, tempora id, sequi perferendis nam totam neque pariatur corrupti dignissimos vero! Officia.</p>
        </div>
        <div className="col d-inline-block text-center">
          <img src={contact4} alt="" className='contact__img'/>
          <p className='fs-1 fw-bold text-success mt-3'>Đức Anh</p>
          <p className='fs-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos ullam iusto alias, sapiente dolorum. Saepe laudantium quidem, tempora id, sequi perferendis nam totam neque pariatur corrupti dignissimos vero! Officia.</p>
        </div>
      </section>
    </>
  )
}

export default LandingSection3;