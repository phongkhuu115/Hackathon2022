import React, { useState, useEffect } from 'react';
import '../../styles/Modal.css'
import exclamation from '../../assets/Question.png'
import minimize from '../../assets/Minimize.png'
import { useLocation } from 'react-router-dom';
import { GetAPIToken } from '../helpers/CallAPI';

function App(props) {
  var location = useLocation();

  function RenderDetail() {
    const [detail, setDetail] = useState({});
    let url = "https://eaebe.f4koin.cyou/api/getSpecifyMission?id=" + location.state.id;
    useEffect(() => {
      GetAPIToken(url).then(res => {
        console.log(res.data.mission[0])
        setDetail(res.data.mission[0])
      })
    }, [])
    return (
      <>
        {/* <div className='position-absolute end-0 mini' onClick={Minimize}>
          <img src={minimize} alt="" />
        </div>
        <p className='text-center text-white mt-3'> <img src={exclamation} alt="" /> {detail.mission_name}</p>
        <div className='p-3'>
          <div>
            <p className='text-white fs-3'>Mô tả nhiệm vụ</p>
            <p className='text-white m-5 bg-secondary p-3 rounded'>{detail.mission_description}</p>
          </div>
          <div>
            <p className='text-white fs-3'>Phần thưởng</p>
            <p className='text-white m-5 bg-secondary p-3 rounded d-inline-block'>{detail.score_mission} Points</p>
          </div>
          <div className='d-flex justify-content-end'>
            <div className='text-end me-5 py-3 px-4 bg-secondary rounded text-white'>Nhận</div>
          </div>
        </div> */}
      </>
    )
  }

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
      {/* <div className='quest darken hide'>
      </div>
      <div className='quest centered hide rounded-3'>
        <div className='position-absolute end-0 mini' onClick={Minimize}>
          <img src={minimize} alt="" />
        </div>
        <p className='text-center text-white mt-3'> <img src={exclamation} alt="" /> {detail.mission_name}</p>
        <div className='p-3'>
          <div>
            <p className='text-white fs-3'>Mô tả nhiệm vụ</p>
            <p className='text-white m-5 bg-secondary p-3 rounded'>{detail.mission_description}</p>
          </div>
          <div>
            <p className='text-white fs-3'>Phần thưởng</p>
            <p className='text-white m-5 bg-secondary p-3 rounded d-inline-block'>{detail.score_mission} Points</p>
          </div>
          <div className='d-flex justify-content-end'>
            <div className='text-end me-5 py-3 px-4 bg-secondary rounded text-white'>Nhận</div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default App;