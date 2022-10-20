import { useContext } from 'react';
import ItemCard from '../../components/item-card/item-card.component';
import { ProductContext } from '../../contexts/products.context';
import '../../components/item-grid/item-grid.styles.css'

const Prints = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className='main-container'>
            <div className='item-grid'>
                {products.map((product) => (
                    <ItemCard key={product.id} product={product} />
                ))}
            </div></div>)
}

export default Prints;