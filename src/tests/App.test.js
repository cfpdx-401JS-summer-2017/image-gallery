import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import App from '../App';
import renderer from 'react-test-renderer';
import toJSON from 'enzyme-to-json';
import Gallery from '../components/views/Gallery';
import List from '../components/views/List';
import Thumb from '../components/views/Thumb';
import hondas from '../data/hondas-for-testing'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a snapshot in gallery view', () => {
  const wrapper = mount(<Gallery hondas={hondas} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('renders a snapshot in list view', () => {
  const wrapper = shallow(<List hondas={hondas} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('renders a snapshot in thumb view', () => {
  const wrapper = render(<Thumb hondas={hondas} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('deletes an image', () => {
  const wrapper = shallow(<App />);

});

it('adds an image', () => {
  const wrapper = shallow(<App />);

});

it('loads default images', () => {
  const wrapper = shallow(<App />);

});

// You also need to snapshot test:
// * your imaging viewing components
// * the wrapper component (in each view state)
// Unit test:
// * Data edit actions
