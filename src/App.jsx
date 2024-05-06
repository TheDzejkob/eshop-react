import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./modules/navbar.jsx";
import Home from './pages/Home';
import Retailers from './pages/Retailers';
import Service from './pages/Service';
import Store from './pages/Store';
import Support from './pages/Support';
import { CartProvider } from './modules/CartContext';
import Cart from './pages/Cart';

import Ascent from './pages/cars/Ascent';
import BRZ from './pages/cars/BRZ';
import Crosstrek from './pages/cars/Crosstrek';
import Forester from './pages/cars/Forester';
import Impreza from './pages/cars/Impreza';
import Legacy from './pages/cars/Legacy';
import Outback from './pages/cars/Outback';
import Solterra from './pages/cars/Solterra';
import WRX from './pages/cars/WRX';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="retailers" element={<Retailers/>} />
          <Route path="service" element={<Service />} />
          <Route path="store" element={<Store />} />
          <Route path="support" element={<Support />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="vehicle/4" element={<Ascent />} />
          <Route path="vehicle/8" element={<BRZ />} />
          <Route path='vehicle/1' element={<Crosstrek/>}/>
          <Route path='vehicle/2' element={<Forester/>}/>
          <Route path='vehicle/6' element={<Impreza/>}/>
          <Route path='vehicle/7' element={<Legacy/>}/>
          <Route path='vehicle/3' element={<Outback/>}/>
          <Route path='vehicle/5' element={<Solterra/>}/>
          <Route path='vehicle/9' element={<WRX/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter> 

    
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
