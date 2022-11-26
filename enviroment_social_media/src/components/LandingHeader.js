import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logLogo from '../assets/logLogo.png'
import mainLogo from '../assets/Logo.png'
import '../styles/LandingHeader.css';
import { Outlet, Link } from 'react-router-dom'

function LandingHeader() {
  return (
    <>
      <header className='page__nav d-flex'>
        <img src={ mainLogo} alt="" className='page__logo mx-3' />
        <div className='nav__btns'>
          <Link onClick={() => window.location.replace("/")} className='nav-item text-uppercase px-5 d-inline-block h-100 fw-bold text-center'>Home</Link>
          <Link onClick={() => window.location.replace("/#section1")} className='nav-item text-uppercase px-5 d-inline-block h-100 fw-bold text-center'>About</Link>
          <Link onClick={() => window.location.replace("/#section2")} className='nav-item text-uppercase px-5 d-inline-block h-100 fw-bold text-center'>Product</Link>
          <Link onClick={() => window.location.replace("/#section3")} className='nav-item text-uppercase px-5 d-inline-block h-100 fw-bold text-center'>Contact</Link>
        </div>
        <div className='log_logo ms-auto m-2 d-flex'>
          <img src={ logLogo} alt="" className='log__logo-img my-auto d-block w-50' />
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default LandingHeader;
