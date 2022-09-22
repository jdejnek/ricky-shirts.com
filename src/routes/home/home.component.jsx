import ItemGrid from '../../components/item-grid/item-grid.component'

const Home = () => {

    const items = [
      {
        id: 1,
        name: 'Starry Night',
        imageUrl: 'https://i.pinimg.com/originals/07/59/c9/0759c9b979c04fc9b6952c5cfa85ec5f.jpg',
      },
      {
        id: 2,
        name: 'Tropical Earthquake',
        imageUrl: 'https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/94742001_3072209039533297_6679460326158630912_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=RKUwKbeR3J0AX9aNbQ7&tn=jbH1wlVNexQGPs1-&_nc_ht=scontent-cph2-1.xx&oh=00_AT9-n9outF-r__LRXITa55qaD48-xsBr_hLnkFWiqgdOwg&oe=6351115E',
      },
      {
        id: 3,
        name: 'Ethereal Dragon',
        imageUrl: 'https://pbs.twimg.com/media/DEdoaGlUIAAxThh?format=jpg&name=4096x4096',
      }
    ];
  
  
    return (
      <ItemGrid items={items} />
    );
  }
  
  export default Home;
  