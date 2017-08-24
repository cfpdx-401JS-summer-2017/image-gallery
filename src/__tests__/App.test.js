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

    const button = wrapper.find( 'button' );
    button.at(0).simulate('click', {target: {value: 'List'}});
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});
