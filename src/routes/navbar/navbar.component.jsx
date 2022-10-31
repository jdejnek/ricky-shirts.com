import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon-component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown-component';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navbar.styles.scss'

const Navbar = () => {
    // Get current user value from context. Navbar will re-render when user context is updated.
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <div className='navbar'>
                <Link className='logo-container' to='/'>
                    {/* <Logo className='logo' /> */}
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='prints'>
                        PRINTS
                    </Link>
                    <Link className='nav-link' to='stickers'>
                        STICKERS
                    </Link>
                    <Link className='nav-link' to='apparel'>
                        APPAREL
                    </Link>
                    <Link className='nav-link' to='artist'>
                        THE ARTIST
                    </Link>
                    <Link className='nav-link' to='checkout'>
                        CHECKOUT
                    </Link>
                    {/* Render sign-in or sign-out depending on user context. */}
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>
                                SIGN OUT
                            </span>
                        ) : (
                            <Link className='nav-link' to='/auth'>
                                SIGN-IN
                            </Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navbar;