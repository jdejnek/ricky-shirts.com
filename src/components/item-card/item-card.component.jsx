import './item-card.styles.scss'
import { useNavigate } from 'react-router-dom';


const ItemCard = ({ product }) => {
  const { imageUrl, name, id, price, size } = product;

  const navigate = useNavigate();
  const toItemPage = () => {
    let path = `/${id}`;
    navigate(path)
  };

  return (
    <div className='card-container' onClick={toItemPage}>
      <div className="item-card">
        <img src={imageUrl} />
        <div className="item-info">
          <span className='item-name'>{name}</span>
          <span className='item-size'>{size}</span>
          <span className='item-price'>DKK {price}</span>
        </div>
      </div>
    </div>
  )
}

export default ItemCard;