import { useContext } from 'react';
import ItemCard from '../../components/item-card/item-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import '../../components/item-grid/item-grid.styles.css'

const Stickers = () => {
    const { stickers } = useContext(CategoriesContext);
    console.log(stickers);
    return (
        <div className='main-container'>
            <div className='item-grid'>
                {stickers.map((product) => (
                    <ItemCard key={product.id} product={product} />
                ))}
            </div></div>)
}

export default Stickers;