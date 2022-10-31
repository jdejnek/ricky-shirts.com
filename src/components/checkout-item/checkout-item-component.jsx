import './checkout-item-styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CheckoutItem = ({ cartItem }) => {
    const { id, name, imageUrl, quantity, price, size } = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
    const itemTotal = quantity * price
    const pointerStyle = {
        cursor: 'pointer',
        color: '#FFD700',
        padding: '0.3rem',
    }
    return (
        <div className='checkout-item-container' key={id}>
            <img src={imageUrl} />
            <div className='checkout-item-details'>
                <h4 className='name'>{name} ({size})</h4>
                <span style={pointerStyle} onClick={() => removeItemFromCart(cartItem)}>&#x276E;</span>
                <span className='qty'>{quantity}</span>
                <span style={pointerStyle} onClick={() => addItemToCart(cartItem)}>&#x276F;</span>
                <span className='item-total'>{itemTotal} DKK</span>
                <span style={pointerStyle} onClick={() => clearItemFromCart(cartItem)}>&#x2715;</span>
            </div>
        </div>

    )
}


export default CheckoutItem;