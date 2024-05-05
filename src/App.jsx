import './App.css';
import Navbar from "./modules/navbar.jsx";
import Home from './pages/Home';
import Retailers from './pages/Retailers';
import Service from './pages/Service';
import Store from './pages/Store';
import Support from './pages/Support';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="retailer" element={<Retailers/>} />
          <Route path="service" element={<Service />} />
          <Route path="store" element={<Store />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
