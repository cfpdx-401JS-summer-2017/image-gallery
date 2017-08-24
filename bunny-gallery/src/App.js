import React, { Component } from 'react';
import './App.css';
import images from './services/images';
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
    this.setState({
      images: addImage(oldImages, img)
    })
  }

  //remove image
  removeImage = image => {

  }

  render() {

    return (
      <div className="App">
          <ViewSelector images={images} />
          <AddImage onAdd={this.addImage}/>
      </div>
    );
  }
}

export default App;

