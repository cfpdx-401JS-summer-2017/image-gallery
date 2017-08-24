import React, { Component } from 'react';
import './App.css';
import images from './services/images';
import ViewSelector from './services/ViewSelector';


// class ImageList extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       view: views[0]
//     }
//   }

//   render() {
//     return (
//       <ul>
//         {images.map((image, index) => {
//           return (<li key={index}> <a href={image.url}> {image.title}</a>
//             <p>{image.description}</p>
//           </li>
//           )
//         })}
//       </ul>
//     )
//   }
// }
// class ImageThumbnail extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       view: views[1],
//     }
//   }

//   render() {
//     return (
//       <div>
//         {images.map((image, index) => {
//           return (
//             <div key={index}>
//               <img src={image.url} width="200" />
//               <p>{image.title}</p>
//               <p>{image.description}</p>
//             </div>
//           )
//         })};
//         </div>
//     )
//   }
// }
// class ImageGallery extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       index: 0,
//       view: views[2],
//       current: images[0]
//     }
//   }

//   render() {
//     let currentImg = this.state.current;
//     return (
//       <div>
//         <button disabled={this.state.index === 0} onClick={() => this.setState({index: --this.state.index, current: images[this.state.index]})}>Previous</button>
//         <img key={currentImg.id} src={currentImg.url} width="400" />
//         <p>{currentImg.title}</p>
//         <p>{currentImg.id}</p>
//         <p>{currentImg.description}</p>
//         <button disabled={this.state.index === images.length - 1} onClick={() => this.setState({index: ++this.state.index, current: images[this.state.index]})}>Next</button>

//       </div>
//     )
//   }
// }

// const View = {
//   list: ImageList,
//   thumbnail: ImageThumbnail,
//   gallery: ImageGallery
// }

// const views = Object.keys(View);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // views: view,
    }
  }

  render() {
    // const { views, view, images } = this.state;
    // const ImageView = View[view];


    return (
      <div className="App">
          <ViewSelector images={images} />
          {/* <AddImage /> */}
      </div>
    );
  }
}

export default App;

