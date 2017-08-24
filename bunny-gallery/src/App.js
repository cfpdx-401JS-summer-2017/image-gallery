import React, { Component } from 'react';
import './App.css';
import images from './services/images';
import ViewSelector from './services/ViewSelector';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div className="App">
          <ViewSelector images={images} />
          {/* <AddImage /> */}
      </div>
    );
  }
}

export default App;

