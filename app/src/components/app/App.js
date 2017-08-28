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
import { images, addImage, removeImage } from '../images/images';
import ViewSelector from '../images/ViewSelector';
import AddImage from '../images/AddImage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: images
    }
  }

  addImage = (title, description, url) => {
    const img = {title, description, url};
    const oldImages = this.state.images;
    console.log('img', img);
    this.setState({
      images: addImage(oldImages, img)
    })
  }

  removeImage = image => {
    const oldImages = this.state.images;
    this.setState({
      images: removeImage(oldImages, image)
    })

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

