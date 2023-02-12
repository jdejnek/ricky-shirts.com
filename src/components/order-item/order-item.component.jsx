import './order-item.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';


const OrderItem = ({ cartItem }) => {
    const { id, name, imageUrl, quantity, price, size } = cartItem;

    return (
        <div>
            <Grid item key={id}>
                <Card>
                    <Grid container direction='row'>
                        <Grid item>
                            <CardMedia><img src={imageUrl}></img></CardMedia>
                        </Grid>
                            <Typography variant="body1" color="initial">{name}</Typography>
                            <Typography variant="body1" color="initial">{quantity}</Typography>
                            <Typography variant="body1" color="initial">{price}</Typography>
                            <Typography variant="body1" color="initial">{size}</Typography>
                        </Grid>
                </Card>
            </Grid>

            {/* <div className='order-item-container' key={id}>
                <img src={imageUrl} />
                <div className='order-item-details'>
                <h4>{name}</h4>
                <span>{quantity} x {price}</span>
                <span>{size}</span>
                </div>
            </div> */}
        </div>
    )
}

export default OrderItem;