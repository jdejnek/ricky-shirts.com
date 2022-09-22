import ItemCard from '../item-card/item-card.component'
import './item-grid.styles.css'

const ItemGrid = ({items}) => {
    return (
        <div className='main-container'>
            <div className='item-grid'>
                {items.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ItemGrid;