import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ImgCard from './components/ImgCard';
import Footer from './components/Footer';
import image from "./image.json";
import './App.css';

class App extends Component {
  // Setting this.state.image to the image json array
  state = {
    score: 0,
    topScore: 0,
    image,
    imageArray: [],
    message: ''
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = event => {
    //Makes the event handler array equal to state array and pushes the name value from click event
    const imageArray = this.state.imageArray;
    const imageCheck = event.target.alt;

    if (imageArray.includes(imageCheck)) {
      this.setState({
        score: 0,
        imageArray: [],
        message: "You guessed incorrectly!"
      })

    } else {
      imageArray.push(imageCheck);
      this.setState({
        score: this.state.score + 1,
        message: "You guessed correctly!",
        image: this.state.image.sort((a, b) => {
          return 0.5 - Math.random();
        }),
        // topScore: this.state.score +1
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <NavBar
            score={this.state.score}
            topScore={this.state.topScore}
            message={this.state.message}
          />
          <Header />
          <div className="img-container">
            {this.state.image.map(image => (
              <ImgCard
                key={image.id}
                name={image.name}
                image={image.image}
                handleIncrement={this.handleIncrement}
              />
            ))}
            
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}



export default App;
