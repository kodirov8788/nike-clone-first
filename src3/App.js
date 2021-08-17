import './App.css';
import Home from './pages/homepage/Home';
import Cart from './pages/cartpage/Cart';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Product from './components/products/Product';

function App() {
  const handleHeaderSearch = (e) => {
    const mainHeader = document.querySelector('.main__header');
    const mainContainer = document.querySelector('.main__container');
    mainContainer.classList.add('mainContainerNotActive')
    mainHeader.classList.add('mainHeaderSearchActive');
  }

  const handleHeaderSearchHide = (e) => {
      const mainHeader = document.querySelector('.main__header');
      mainHeader.classList.remove('mainHeaderSearchActive');
      const mainContainer = document.querySelector('.main__container');
      mainContainer.classList.remove('mainContainerNotActive')
  }
  return (
    <Router>
      <div className="app">
      <Header callback={handleHeaderSearch} removeCallback={handleHeaderSearchHide}/>
        <Switch>
          <Route exact path="/" component={() => <Home/>}/>
          <Route exact path="/cart" component={() => <Cart/>}/>
          <Route exact path="/product" component={() => <Product/>}/> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
