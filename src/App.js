import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navbar from './routes/navbar/navbar.component';
import Authentication from './routes/authentication/authentication.component';
import Prints from './routes/prints/prints.component';
import ItemPage from './routes/item-page/item-page.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Prints />} />
        <Route path='prints' element={<Prints />} />
        <Route path='auth' element={<Authentication />} />
        <Route path=':id' element={<ItemPage />} />
      </Route>
    </Routes>
  );
}

export default App;
