import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {

    const { name, quantity, imageUrl } = cartItem;

    return (

        <div className='cart-item-container'>
            <img src={imageUrl} />
            <div className='item-details'>
            <h2 className='name'>{name}</h2>
            <span className='qty'>Qty: {quantity}</span>
        </div>
        </div>

    )
}

export default CartItem;