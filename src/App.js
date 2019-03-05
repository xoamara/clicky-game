import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ImgCard from './components/ImgCard';
import image from "./image.json";

import './App.css';

class App extends Component {
  // Setting this.state.image to the image json array
  state = {
    count: 0,
    image
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };




  render() {
    return (
      <div className="App">
        <div className="container">
          <NavBar />
          <Header />
          <div className="img-container">
            {this.state.image.map(image => (
              <ImgCard
                id={image.id}
                name={image.name}
                image={image.image}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
