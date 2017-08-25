import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Routes } from '../App';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';

describe('App works', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  
  it('renders a snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Routes work', () => {
  it('Defaults to home', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
    );
    const home = wrapper.find('Home');
    expect(home.length).toBe(1);
  });

  it('Goes to about', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/about']}>
        <Routes/>
      </MemoryRouter>
    );
    const home = wrapper.find('About');
    expect(home.length).toBe(1);
  });
});
