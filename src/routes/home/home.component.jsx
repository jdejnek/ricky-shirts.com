import ItemGrid from '../../components/item-grid/item-grid.component'
import dragon from '../../assets/skull-dragon-1.jpg'

const Home = () => {

    const items = [
      {
        id: 1,
        name: "#001 OCTOBER '22",
        imageUrl: dragon,
      },
      {
        id: 2,
        name: "#002 FEBRUARY '22",
        imageUrl: 'https://i.ibb.co/c8pg4KF/blue-dragon-1.png',
      },
      {
        id: 3,
        name: "#003 JANUARY '22",
        imageUrl: 'https://i.ibb.co/Lk6M636/rose.jpg',
      }
    ];
  
  
    return (
      <ItemGrid items={items} />
    );
  }
  
  export default Home;
  