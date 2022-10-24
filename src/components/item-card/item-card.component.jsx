import './item-card.styles.scss'
import { useNavigate } from 'react-router-dom';


const ItemCard = ({ product }) => {
  const { imageUrl, name, id } = product;

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
          <span className='item-price'>FROM 899 DKK</span>
        </div>
      </div>
    </div>
  )
}

export default ItemCard;