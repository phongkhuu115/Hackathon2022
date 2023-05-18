import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logLogo from '../../assets/logLogo.png'
import mainLogo from '../../assets/Logo.png'
import '../../styles/LandingHeader.css';
import { Outlet, Link } from 'react-router-dom'

function openMenu() {
  var menu = document.querySelector('ul.dropdown-menu');
  if (!menu.classList.contains('show')) {
    menu.classList.add('show');
  }
  else {
    menu.classList.remove('show');
  }
}

function LandingHeader() {

  return (
    <>
      <header className='header page__nav d-flex p-2'>
        <Link onClick={() => window.location.replace("/#home")}>
          <img src={mainLogo} alt="" className='page__logo h-100 mx-3' />
        </Link>
        <div className='nav__btns'>
          <Link onClick={() => window.location.replace("/#home")} className='nav-item text-uppercase px-5 d-inline-block h-100 fw-bold text-center'>Home</Link>
          <Link onClick={() => window.location.replace("/#section1")} className='nav-item text-uppercase px-5 d-inline-block h-100 fw-bold text-center'>About</Link>
          <Link onClick={() => window.location.replace("/#section2")} className='nav-item text-uppercase px-5 d-inline-block h-100 fw-bold text-center'>Product</Link>
          <Link onClick={() => window.location.replace("/#section3")} className='nav-item text-uppercase px-5 d-inline-block h-100 fw-bold text-center'>Contact</Link>
        </div>
        <div className='log_logo ms-auto m-2 d-flex'>
          <img src={logLogo} alt="" className='log__logo-img my-auto d-block w-50' onClick={openMenu} />
          <ul class="log-menu action-menu dropdown-menu dropdown-menu-primary mt-3 rounded-3 p-2">
            <li><Link class="dropdown-item" to='/logon'>Log In</Link></li>
            <li><Link class="dropdown-item" to='/signup'>Sign Up</Link></li>
          </ul>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default LandingHeader;
