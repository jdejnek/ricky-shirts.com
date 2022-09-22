import './item-card.styles.css'

const ItemCard = ({ item }) => {

  const { imageUrl, name } = item;

  return (
    <div className="item-card">
      <img src={imageUrl} />
      <div className="item-info">
        <h2>{name}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default ItemCard;