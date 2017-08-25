import React, { Component } from 'react';
import './App.css';
import { images, addImage, removeImage } from './services/images';
import ViewSelector from './services/ViewSelector';
import AddImage from './services/AddImage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: images
    }
  }

  //addimage
  addImage = (title, description, url) => {
    const img = {title, description, url};
    const oldImages = this.state.images;
    console.log('img', img);
    this.setState({
      images: addImage(oldImages, img)
    })
  }

  //remove image
  removeImage = image => {
    const oldImages = this.state.images;
    this.setState({
      images: removeImage(oldImages, image)
    })

  }

  render() {

    return (
      <div className="App">
          <ViewSelector images={this.state.images} onRemove = {this.removeImage} />
          <AddImage onAdd={this.addImage}/>
      </div>
    );
  }
}

export default App;

