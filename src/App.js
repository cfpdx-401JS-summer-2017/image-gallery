import React, { Component } from 'react';
import './App.css';
import Bunnies from './images/bunnies';
import Viewer from './viewer/Viewer';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
import Editor from './edit/Editor';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addBunny: false,
      view: 'Gallery',
      bunnies: Bunnies,
      current: 0
    }
  }

  handleClick(name, value) {
    this.setState({
      [name]: value
    })
  }

  cycleView = (value) => {
    const thisImgIndex = this.state.current;
    
    if( value === "Previous" ) {
        if( thisImgIndex > 0) {
            this.setState({
                current: thisImgIndex - 1
            })
        } else {
            this.setState({
                current: this.state.bunnies.length - 1
            })
        }
    } else {
        if( thisImgIndex === (this.state.bunnies.length - 1)) {
            this.setState({
                current: 0
            })
        } else {
            this.setState({
                current: thisImgIndex + 1
            })
        }
    }
  }

  onAdd = (bunny) => {
    this.setState((prevState, props) => { 

      const bunniesArray = prevState.bunnies;
      bunniesArray.push(bunny);

      return { bunnies: bunniesArray }; 
    })
  }

  onRemove = () => {
    this.setState((prevState, props) => {
      const index = this.state.current;
      const bunniesArray = prevState.bunnies;
      const newBunnies = [
        ...bunniesArray.slice(0, index),
        ...bunniesArray.slice(index + 1)
      ]
      const newIndex = index === 0 ? 0 : index - 1;

      return { bunnies: newBunnies, current: newIndex };
    })
  }

  toggleAddForm(){
    this.setState({
      addBunny: !this.state.addBunny
    })
  }

  render() {
    const view = this.state.view;

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path = "/" render={({match, location, history, bunnies}) => {
              return <Viewer match={match} location={location} history={history} bunnies={bunnies}/>
            }}/>
          </Switch>
          <button name="addBunny" onClick={(event) => this.handleClick(event.target.name, true)}>
            Add bunny
          </button>
        </div>
      </Router>
    );

  }
}

export default App;
