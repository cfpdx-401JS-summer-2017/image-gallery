import React, { Component } from 'react';
import { BrowserRouter as Router,
        Switch,
        Redirect,
        Route,
        Link
} from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import './App.css';
// import { images, addImage, removeImage } from '../images/images';
import imagesAPI from '../../services/imagesAPI';
import ViewSelector from '../images/ViewSelector';
import AddImage from '../images/AddImage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  addImage = (image) => {
    return imagesAPI.add(image)
    .then(saved => {
      console.log('addImage', saved);
    this.setState({
      images: [...this.state.images, saved]
    });
  });
}

  removeImage = (id, index) => {
    return imagesAPI.remove(id)
    .then(() => {
      const { images } = this.state;
      this.setState({
        images: [...images.slice(0, index), ...images.slice(index + 1)]
      });      
    });
  }

  render() {

    return (

      <Router>
      <div className="App">
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route path="/images" render={({ match, location}) => {
            return <div>
              <Link to="/home"> <button>Home</button> </Link>
              <Link to="/about"> <button>About</button> </Link>
              <ViewSelector images={this.state.images} onRemove = {this.removeImage} />
              <AddImage onAdd={this.addImage}/> 
              </div>
          }}/>
          <Redirect to="/"/>
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;

