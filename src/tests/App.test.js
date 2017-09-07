import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import App from '../App';
import renderer from 'react-test-renderer';
import toJSON from 'enzyme-to-json';
import Gallery from '../components/views/Gallery';
import List from '../components/views/List';
import Thumb from '../components/views/Thumb';
import images from '../data/hondas-for-testing'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a snapshot in gallery view', () => {
  const wrapper = shallow(<Gallery deleteImage={image => {images[0]}} images={images}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('renders a snapshot in list view', () => {
  const wrapper = shallow(<List images={images} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('renders a snapshot in thumb view', () => {
  const wrapper = render(<Thumb deleteImage={image => {images[0]}} images={images} />);
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
