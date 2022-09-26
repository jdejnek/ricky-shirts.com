import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import './navbar.styles.scss'

const Navbar = () => {
    return (
        <Fragment>
            <div className='navbar'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        SHIRTS
                    </Link>
                    <Link className='nav-link' to='/auth'>
                        SIGN-IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navbar;