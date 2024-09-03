import Header from './Components/Header';
import Carousel from './Components/Carousel'
import Product from './Components/Product';
import AboutUs from './Components/About'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Product/>
      <AboutUs/>
      <Footer/>
    </div>
  );
};

export default App;