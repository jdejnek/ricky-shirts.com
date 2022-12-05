import './order.component.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import OrderItem from '../../components/order-item/order-item.component'


const OrderSummary = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className='order-container'>
            {cartItems.map((item) => (
                <OrderItem key={item.id} cartItem={item}></OrderItem>
            ))}
        </div>
    )
}

export default OrderSummary;