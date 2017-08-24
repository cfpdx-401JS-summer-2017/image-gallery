import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Bunnies from '../images/bunnies';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('loads a view', () => {
    const wrapper = shallow( <App bunnies = {Bunnies}/> )
    expect(toJSON(wrapper)).toMatchSnapshot();

    const button1 = wrapper.find( 'button' );
    button1.at(0).simulate('click', {target: {value: 'List'}});
    expect(toJSON(wrapper)).toMatchSnapshot();
    
    const button2 = wrapper.find( 'button' );
    button2.at(0).simulate('click', {target: {value: 'Gallery'}});
    expect(toJSON(wrapper)).toMatchSnapshot();
    
    const button3 = wrapper.find( 'button' );
    button3.at(0).simulate('click', {target: {value: 'Thumbnail'}});
    expect(toJSON(wrapper)).toMatchSnapshot();

    
  });

});
