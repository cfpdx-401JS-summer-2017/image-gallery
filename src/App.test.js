import React from 'react';
import App from './App.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <App page="http://www.facebook.com">Facebook</App>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});