import React, { Component } from 'react';
import './App.css';
// import { bootstrap } from './image';
// import ImageList from './ImageList';
// import ImageThumbnail from './ImageThumbnail';
// import ImageGallery from './ImageGallery';

let id = 0;
const images = [
  { id: ++id, title: 'cute bunny', description: 'very cute bunny', url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg' },
  { id: ++id, title: 'another cute bunny', description: 'very, very cute bunny', url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg' },
  { id: ++id, title: 'fairly cute bunny', description: 'pretty much a cute bunny', url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg' },
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
      view: views[1],
    }
  }

  render() {
    return (
      <div>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img src={image.url} width="200" />
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
      index: 0,
      view: views[2],
      current: images[0]
    }
  }

  render() {
    let currentImg = this.state.current;
    return (
      <div>
        <button disabled={this.state.index === 0} onClick={() => this.setState({index: --this.state.index, current: images[this.state.index]})}>Previous</button>
        <img key={currentImg.id} src={currentImg.url} width="400" />
        <p>{currentImg.title}</p>
        <p>{currentImg.id}</p>
        <p>{currentImg.description}</p>
        <button disabled={this.state.index === images.length - 1} onClick={() => this.setState({index: ++this.state.index, current: images[this.state.index]})}>Next</button>

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
      view: views[1],
      views: views,
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
          <ImageView />
        </div>
      </div>
    );
  }
}

export default App;

