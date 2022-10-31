import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/navbar/navbar.component';
import Authentication from './routes/authentication/authentication.component';
import Prints from './routes/prints/prints.component';
import ItemPage from './routes/item-page/item-page.component';
import CheckoutPage from './routes/checkout/checkout-component';
import Stickers from './routes/stickers/stickers.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Prints />} />
        <Route path='prints' element={<Prints />} />
        <Route path='stickers' element={<Stickers />} />
        <Route path='auth' element={<Authentication />} />
        <Route path=':id' element={<ItemPage />} />
        <Route path='checkout' element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
