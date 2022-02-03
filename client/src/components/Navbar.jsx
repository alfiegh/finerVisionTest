import logo from '../images/fv_circle.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav bg-gray d-flex justify-content-between'>
      <a className='navbar-brand' href='https://alfonsoeg.com'>
        <img
          src={logo}
          alt='Fv Logo'
          width={30}
          height={30}
          className='d-inline-block align-text-top mx-3'
        />
        FV Test || By Alfonso
      </a>

      <div className='d-flex'>
        <Link className='nav-link' to='/'>
          Home
        </Link>

        <Link className='nav-link' to='/register'>
          Register
        </Link>
        <Link className='nav-link' to='/people'>
          People
        </Link>
      </div>
    </div>
  );
};

export default Nav;
