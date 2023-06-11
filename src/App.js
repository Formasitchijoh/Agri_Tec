import './App.css';
import LandingPage from './Components/landingPage';
import Menu from './Components/Menu';
import ProductPage from './Pages/FarmerProductPage';
import UploadProductPage from './Pages/UploadProduct';
import BuyerPage from './Pages/BuyerProductPage';
import { Routes,Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import ProductItem from './Pages/ProductItem';
import ImageSlider from './Components/imageSlider';
import Carousel from './Components/Carousel';

function App() {
  return (
   
    <div className='App'>

      {/* <Carousel /> */}
      <Routes>
      <Route path="/" element={<LoginPage />}  />
      <Route path="/BuyerPage" element={<BuyerPage />}  />
      <Route path='LoginPage' element={<LoginPage/>} />
      <Route path='SignUpPage' element={<SignUpPage/>} />
        <Route path='UploadProductPage' element={<UploadProductPage />} />
        <Route path='ProductItem' element ={<ProductItem/>}/>
        <Route path='Carousel' element={<Carousel/>} />
      </Routes>

    </div>
  );
}

export default App;
