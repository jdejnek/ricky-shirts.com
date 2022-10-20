import './item-card.styles.scss'

const ItemCard = ({ product }) => {

  const { imageUrl, name } = product;

  return (
    <div className='card-container'>
    <div className="item-card">
      <img src={imageUrl} />
      <div className="item-info">
        <span className='item-name'>{name}</span>
        <span className='item-price'>FROM 899 DKK</span>
      </div>
    </div>
    </div>
  )
}

export default ItemCard;