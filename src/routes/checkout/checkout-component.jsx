import './checkout-styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item-component';
import Button from '../../components/button/button.component';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    const navigate = useNavigate();

    // Placing the order. Shutting down to fix css
    const goToOrder = () => {
        navigate('/order-summary')
    }

    return (
        <div className='checkout-container'>
                        <h2>CHECKOUT</h2>
        <div className='checkout-items'>

            <div className='checkout-grid'>
                {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
            </div>
            <span className='total'>TOTAL: <span className='total-count'>{cartTotal} DKK</span></span>
            <Button>Place your order</Button>
        </div>
        </div>
    )
}

export default CheckoutPage;