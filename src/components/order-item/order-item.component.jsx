import './order-item.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const OrderItem = ({ cartItem }) => {
    const { id, name, imageUrl, quantity, price, size } = cartItem;

    return (
        <div>
            <div className='order-item-container' key={id}>
                <img src={imageUrl} />
                <div className='order-item-details'>
                <h4>{name}</h4>
                <span>{quantity} x {price}</span>
                <span>{size}</span>
                </div>
            </div>
        </div>
    )
}

export default OrderItem;