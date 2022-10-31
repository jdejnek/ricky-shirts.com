import './checkout-styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item-component';

const CheckoutPage = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='checkout-container'>
                        <h2>CHECKOUT</h2>
        <div className='checkout-items'>

            <div className='checkout-grid'>
                {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
            </div>
            <span className='total'>Total: 0</span>
        </div>
        </div>
    )
}

export default CheckoutPage;