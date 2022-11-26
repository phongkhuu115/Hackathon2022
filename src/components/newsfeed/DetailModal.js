import React, { useState, useEffect } from 'react';
import '../../styles/Modal.css'
import exclamation from '../../assets/Question.png'
import minimize from '../../assets/Minimize.png'

function App(props) {
  const [active, setActive] = useState(false);

  function Minimize() { 
    const dark = document.querySelector('.darken')
    const modal = document.querySelector('.centered')

    dark.classList.add('hide')
    modal.classList.add('hide')
  }
  useEffect(() => {

  }, []);

  return (
    <>
      <div className='darken hide'>
      </div>
      <div className='centered hide rounded-3'>
        <div className='position-absolute end-0 mini' onClick={Minimize}>
          <img src={ minimize} alt="" />
        </div>
        <p className='text-center text-white mt-3'> <img src={exclamation} alt="" /> Trồng một cây chuối</p>
        <div className='p-3'>
          <div>
            <p className='text-white fs-3'>Mô tả nhiệm vụ</p>
            <p className='text-white m-5 bg-secondary p-3 rounded'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus blanditiis reprehenderit libero dolorum. Consectetur quo, accusantium eaque provident rem quae nesciunt. Voluptas, exercitationem cupiditate fugiat ex iusto ad vitae eveniet.</p>
          </div>
          <div>
            <p className='text-white fs-3'>Phần thưởng</p>
            <p className='text-white m-5 bg-secondary p-3 rounded d-inline-block'>5 Points</p>
          </div>
          <div className='d-flex justify-content-end'>
            <div className='text-end me-5 py-3 px-4 bg-secondary rounded text-white'>Nhận</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;