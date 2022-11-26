import React, { useState, useEffect } from 'react';
import '../../styles/Log.css'
import Logo from '../../assets/Logo.png'
import { PostAPINoToken } from '../helpers/CallAPI'
import { useNavigate } from 'react-router-dom';



function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSignin() {
    let url = "https://eaebe.f4koin.cyou/api/login";
    let body = {
      username: username,
      password: password,
    }
    PostAPINoToken(url, body).then(res => {
      if (res.data.message === "Login success") {
        console.log("Success")
        alert('Đăng nhập thành công')
        // navigate('/home', {
        // });
      }
    })
  }

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
          <input type="text" name="" id="username" className='form-control mb-3' onChange={(e) => { setUsername(e.target.value) }} />
          <label htmlFor="password" className='text-uppercase mb-2'>Mật khẩu</label>
          <input type="text" name="" id="password" className='form-control' onChange={(e) => { setPassword(e.target.value) }} />
          <button className='btn btn-secondary mt-4 mx-5' onClick={handleSignin}>Đăng nhập</button>
          <div className='text-center mt-auto'>
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;