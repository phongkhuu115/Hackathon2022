import React, { useState, useEffect } from 'react';
import '../../styles/Modal.css'
import exclamation from '../../assets/Question.png'
import minimize from '../../assets/Minimize.png'
import contact3 from '../../assets/NA.png'
import { PostAPIToken } from '../helpers/CallAPI';

function App(props) {
  const [active, setActive] = useState(false);

  function Minimize() {
    const posting = document.querySelectorAll('.posting')

    for (let i = 0; i < posting.length; i++) {
      posting[i].classList.add('hide')
    }
  }
  useEffect(() => {

  }, []);

  function Posting(e, content) {
    if (e.keyCode === 13) {
      let url = "https://eaebe.f4koin.cyou/api/postPost"
      let body = {
        caption: content
      }
      PostAPIToken(url, body).then(res => {
        if (res.status === 200) {
          alert('Đăng bài thành công')
        }
      })
    }
  }

  return (
    <>
      <div className='posting darken hide'>
      </div>
      <div className='posting centered hide rounded-3'>
        <div className='position-absolute end-0 mini' onClick={Minimize}>
          <img src={minimize} alt="" />
        </div>
        <p className='text-center text-white mt-3'>Tạo bài đăng</p>
        <div className='d-flex align-items-center mx-3 mt-3 mb-2 rounded'>
          <img src={contact3} alt="" className='user__avt' />
          <p className='text-white'>Nguyễn Đàm Nhật Anh</p>
        </div>
        <div className=' mx-3'>
          <textarea name="" id="" cols="30" rows="10" className='form-control d-inline-block bg-secondary text-white' placeholder='Bạn muốn đăng gì nè ?' onKeyDown={(e) => Posting(e, e.target.value)}></textarea>
        </div>
        <div className='mx-3 text-end'>
          <p className='text-white py-3 px-4 btn btn-secondary d-inline-block me-2'>Đăng</p>
          <p className='text-white py-3 px-4 btn btn-secondary d-inline-block'>Thêm ảnh</p>
        </div>
      </div>
    </>
  )
}

export default App;