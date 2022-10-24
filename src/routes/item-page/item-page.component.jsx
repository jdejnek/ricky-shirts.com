import './item-page.styles.scss';
import Button from '../../components/button/button.component';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/products.context';
import { CartContext } from '../../contexts/cart.context';
import { useParams } from 'react-router-dom';

const ItemPage = () => {

    // Get the product
    const { products } = useContext(ProductContext)
    const { id } = useParams();
    const product = products.find((product) => {
        if (product.id == id) return product
    });

    // Add to cart
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    return (
        <div className='item-page-container'>
            <div className='item-page-grid'>
                <div className='left-column'>
                    <div className='carousel'>
                        <img src={product.imageUrl} />
                    </div>
                </div>
                <div className='right-column'>
                    <h2>{product.name}</h2>
                    <span>899 DKK</span>
                    <p>Description</p>
                    <Button onClick={addProductToCart}>Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemPage;