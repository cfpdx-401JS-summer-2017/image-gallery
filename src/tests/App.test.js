import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../App';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a snapshot in gallery view', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a snapshot in list view', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a snapshot in thumb view', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('deletes an image', () => {
  const wrapper = shallow(<App />);
  // expect(wrapper.state().playerRoom.key === 'westHall')
  // expect(wrapper.state().princRoom.key === 'office')
})

it('adds an image', () => {
  const wrapper = shallow(<App />);
  // expect(wrapper.state().playerRoom.key === 'westHall')
  // expect(wrapper.state().princRoom.key === 'office')
})

it('loads default images', () => {
  const wrapper = shallow(<App />);
  // expect(wrapper.state().playerRoom.key === 'westHall')
  // expect(wrapper.state().princRoom.key === 'office')
})



// You also need to snapshot test:
// * your imaging viewing components
// * the wrapper component (in each view state)
// Unit test:
// * Data edit actions