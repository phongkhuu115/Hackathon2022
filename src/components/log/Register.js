import React, { useState, useEffect } from 'react';
import '../../styles/Log.css'
import { PostAPINoToken } from '../helpers/CallAPI'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App(props) {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  function handleSignup() {
    let url = "https://eaebe.f4koin.cyou/api/register";
    let body = {
      username: username,
      password: password,
      password_confirmation: confirm,
      full_name: fullname,
      mobile: phone,
      email: email,
    }
    PostAPINoToken(url, body).then(res => {
      if (res.data.message === "User created") {
        alert('Đăng ký thành công')
        navigate('/logon', {
        });
      }
    })
  }

  useEffect(() => {

  }, []);

  return (
    <>
      <div className='background position-relative'>
        <div className='login__form d-flex flex-column p-5'>
          <p className='text-center text-uppercase fw-bold fs-1 mb-1'>Đăng ký</p>
          <label htmlFor="username" className='text-uppercase mb-2'>Tài khoản</label>
          <input type="text" name="" id="username" className='form-control mb-3' onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="password" className='text-uppercase mb-2'>Họ và tên</label>
          <input type="text" name="" id="password" className='form-control mb-3' onChange={(e) => setFullname(e.target.value)} />
          <label htmlFor="password" className='text-uppercase mb-2'>Email</label>
          <input type="text" name="" id="password" className='form-control  mb-3' onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password" className='text-uppercase mb-2'>Số điện thoại</label>
          <input type="text" name="" id="password" className='form-control mb-3' onChange={(e) => setPhone(e.target.value)} />
          <label htmlFor="password" className='text-uppercase mb-2'>Mật khẩu</label>
          <input type="text" name="" id="password" className='form-control  mb-3' onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="password" className='text-uppercase mb-2'>Nhập lại mật khẩu</label>
          <input type="text" name="" id="password" className='form-control  mb-1' onChange={(e) => setConfirm(e.target.value)} />
          <p className='text-center'>Đã có tài khoản ? <Link to='/logon'>Đăng nhập</Link></p>
          <button className='btn btn-secondary mt-2 mx-5' onClick={handleSignup}>Đăng ký</button>
        </div>
      </div>
    </>
  )
}

export default App;