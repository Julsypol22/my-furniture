import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Offers from './components/Offers';
import Products from './components/Products';
import Rooms from './components/Rooms';
import Tips from './components/TipsTricks';



class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />
        <Offers />
        <Products />
        <Rooms />
        <Tips />
        <Gallery />
        <Footer />
      </div>
    )
  }
}
export default App;
