import './item-page.styles.scss';
import Button from '../../components/button/button.component';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { CartContext } from '../../contexts/cart.context';
import { useParams } from 'react-router-dom';

const ItemPage = () => {

    // Get the product
    const { prints, stickers } = useContext(CategoriesContext)
    const products = prints.concat(stickers);
    console.log(products);
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
                    <h2 className='product-name'>{product.name}</h2>
                    <span>Size: {product.size}</span>
                    <p className='description'>{product.description}</p>
                    <span>{product.price} DKK</span>
                    <p>Handpainted acrylics on canvas by <a target='_blank' href='https://www.instagram.com/michaelricalitattoos/'>Michael Ricali</a>.</p>
                    <Button onClick={addProductToCart}>Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemPage;