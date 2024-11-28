import Header from './Components/Header';
import Carousel from './Components/Carousel'
import Infos from './Components/Infos';
import Product from './Components/Product';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Infos/>
      <Product/>
      <Footer/>
    </div>
  );
};

export default App;