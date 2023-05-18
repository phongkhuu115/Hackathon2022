import React, { useState, useEffect } from 'react';
import '../../styles/LandingSection3.css'
import contact1 from '../../assets/Phong.png'
import contact2 from '../../assets/Tai.png'
import contact3 from '../../assets/NA.png'
import contact4 from '../../assets/DA.png'


function LandingSection3(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {

    }
  }, []);

  return (
    <>
      <section id='section3' className='section3 d-flex text-center py-5'>
        <a href='https://github.com/phongkhuu115' className="col d-inline-block text-center text-decoration-none">
          <img src='https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/322579728_1564395974027916_7011904383842176814_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AsSojBCVZdsAX-lI3q2&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBN0pZFkaOY_4TuNghluUUAEuahnuQXTGjU6QpNFHvitQ&oe=646BE62B' alt="" className='contact__img' />
          <p className='fs-1 fw-bold text-success mt-3'>Minh Phong</p>
          <p className='fs-3'>University of Infomation and Technology - VNUHCM
           <br /> MMTT2020</p>
        </a>
        <a href='https://www.facebook.com/Tai.9029' className="col d-inline-block text-center text-decoration-none">
          <img src='https://avatars.githubusercontent.com/u/62371366?s=400&u=19098bea4eb6269a1119923b4bc10541645df4e7&v=4' alt="" className='contact__img' />
          <p className='fs-1 fw-bold text-success mt-3'>Anh Tài</p>
          <p className='fs-3'>University of Infomation and Technology - VNUHCM
          <br />   MMTT2020</p>
        </a>
        <a href='https://www.facebook.com/NDNAnh' className="col d-inline-block text-center text-decoration-none">
          <img src='https://media.licdn.com/dms/image/C4D03AQED0LnFrbtzZw/profile-displayphoto-shrink_200_200/0/1650285663458?e=1689811200&v=beta&t=4TdSoskplJV6P0k9t7qRYC2P7Ta5AN6EXq_obdEfy4A' alt="" className='contact__img' />
          <p className='fs-1 fw-bold text-success mt-3'>Nhật Anh</p>
          <p className='fs-3'>University of Infomation and Technology - VNUHCM
           <br /> MMTT2020</p>
        </a>
        <a href='#' className="col d-inline-block text-center text-decoration-none">
          <img src='https://www.facebook.com/messenger_media?attachment_id=767472778248425&message_id=mid.%24gABRJMmICEi2OYHXDI2ILzAHBDSLh&thread_id=5709980275708461' alt="" className='contact__img' />
          <p className='fs-1 fw-bold text-success mt-3'>Võ Quốc Đăng</p>
          <p className='fs-3'>University of Infomation and Technology - VNUHCM
            <br /> MMTT2020</p>
        </a>
      </section>
    </>
  )
}

export default LandingSection3;