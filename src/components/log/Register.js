import React, { useState, useEffect } from 'react';
import '../../styles/Log.css'
import Logo from '../../assets/Logo.png'

function App(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {

    }
  }, []);

  return (
    <>
      <div className='background position-relative'>
        <div className='login__form d-flex flex-column p-5'>
          <p className='text-center text-uppercase fw-bold fs-1 mb-1'>Đăng ký</p>
          <label htmlFor="username" className='text-uppercase mb-2'>Tài khoản</label>
          <input type="text" name="" id="username" className='form-control mb-3' />
          <label htmlFor="password" className='text-uppercase mb-2'>Họ và tên</label>
          <input type="text" name="" id="password" className='form-control mb-3' />
          <label htmlFor="password" className='text-uppercase mb-2'>Email</label>
          <input type="text" name="" id="password" className='form-control  mb-3' />
          <label htmlFor="password" className='text-uppercase mb-2'>Số điện thoại</label>
          <input type="text" name="" id="password" className='form-control mb-3' />
          <label htmlFor="password" className='text-uppercase mb-2'>Mật khẩu</label>
          <input type="text" name="" id="password" className='form-control  mb-3' />
          <label htmlFor="password" className='text-uppercase mb-2'>Nhập lại mật khẩu</label>
          <input type="text" name="" id="password" className='form-control  mb-3' />
          <button className='btn btn-secondary mt-2 mx-5'>Đăng ký</button>
        </div>
      </div>
    </>
  )
}

export default App;