import React, { useState, useEffect } from 'react';
import '../../styles/Log.css'
import Logo from '../../assets/Logo.png'

function Login(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {

    }
  }, []);

  return (
    <>
      <div className='background position-relative'>
        <div className='login__form d-flex flex-column p-5'>
          <p className='text-center text-uppercase fw-bold fs-1 mb-4'>Đăng nhập</p>
          <label htmlFor="username" className='text-uppercase mb-2'>Tài khoản</label>
          <input type="text" name="" id="username" className='form-control mb-3' />
          <label htmlFor="password" className='text-uppercase mb-2'>Mật khẩu</label>
          <input type="text" name="" id="password" className='form-control' />
          <button className='btn btn-secondary mt-4 mx-5'>Đăng nhập</button>
          <div className='text-center mt-auto'>
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;