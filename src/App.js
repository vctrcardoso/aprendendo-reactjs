import logo from './logo.svg';
import './App.css';

import Header from './components/Header/';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import PaginaIncial from './components/PaginaIncial';
function App() {
  return (
    <div className="App">
      <Header />
     <PaginaIncial />
      <Footer />
    </div>
  );
}

export default App;
