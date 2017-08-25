import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BunnyApp from '../BunnyApp';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  
    const div = document.createElement('div');
    ReactDOM.render(<BunnyApp />, div);
});

it('renders a snapshot', () => {
    const tree = renderer.create(<BunnyApp/>).toJSON();
    expect(tree).toMatchSnapshot();
});
