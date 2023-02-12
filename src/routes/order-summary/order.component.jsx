import './order.component.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import OrderItem from '../../components/order-item/order-item.component'
import { Grid, Card, CardContent, CardMedia } from '@mui/material'


const OrderSummary = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div>
            <Grid container>
                {cartItems.map((item) => (
                    <OrderItem key={item.id} cartItem={item}></OrderItem>
                ))}
            </Grid>
        </div>


        // <div className='order-container'>
        //     {cartItems.map((item) => (
        //         <OrderItem key={item.id} cartItem={item}></OrderItem>
        //     ))}
        // </div>
    )
}

export default OrderSummary;