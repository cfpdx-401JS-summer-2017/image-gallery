import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bootstrap } from './image';

const images = [
  { title: 'cute bunny', description: 'very cute bunny', url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg' },
  { title: 'another cute bunny', description: 'very, very cute bunny', url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg' },
  { title: 'fairly cute bunny', description: 'pretty much a cute bunny', url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg' },
];

class ImageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: views[0]
    }
  }

  render() {
    return (
      <ul>
        {images.map((image, index) => {
          return (<li key={index}> <a href={image.url}> {image.title}</a>
            <p>{image.description}</p>
          </li>
          )
        })}
      </ul>
    )
  }
}
class ImageThumbnail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: views[1]
    }
  }

  render() {
    return (
      <div>
        {images.map((image, index) => {
          return (
            <div>
              <img key={index} src={image.url} width ="200"/>
              <p>{image.title}</p>
              <p>{image.description}</p>
            </div>
          )
        })};
        </div>
    )
  }
}
class ImageGallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: views[2]
    }
  }

  render() {
    return (
      <div>
        {images.map((image, index) => {
          return (
            <div>
              <button>Previous</button>
              <img key={index} src={image.url} width ="200"/>
              <p>{image.title}</p>
              <p>{image.description}</p>
              <button>Next</button>
            </div>
          )
        })};
      </div>
    )
  }
}


const View = {
  list: ImageList,
  thumbnail: ImageThumbnail,
  gallery: ImageGallery
}

const views = Object.keys(View);

class App extends Component {

  constructor() {
    super();
    this.state = {
      // search: 'bunny',
      view: views[1],
      views: views,
      images: bootstrap()
    }
  }

  render() {
    const { views, view, images } = this.state;
    const ImageView = View[view];


    return (
      <div className="App">
        <div>
          {views.map(v => (
            <button key={v} onClick={() => this.setState({ view: v })}>
              {v}</button>))}
          {/* <div><p>{this.state.images}</p></div> */}
          <ImageView />
        </div>
      </div>
    );
  }
}

export default App;

