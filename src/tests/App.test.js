import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import BunnyApp from '../BunnyApp';
import { BunnyView } from '../BunnyApp';
import { TopBar } from'../routing';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
it('renders a snapshot', () => {
    const tree = renderer.create(<BunnyApp/>).toJSON();
    expect(tree).toMatchSnapshot();
});
describe('Routes', () => {
    it('Defaults to home', () => {
        const wrapper = mount( 
            <MemoryRouter>
                <TopBar/>
            </MemoryRouter>
        );
        const home = wrapper.find('Home');
        expect(home.length).toBe(1);
    });
    it('/about', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/about']} >
                <TopBar/>
            </MemoryRouter>
        );
        const about = wrapper.find('About');
        expect(about.length).toBe(1);
    });
});

it('renders without crashing', () => {
  
    const div = document.createElement('div');
    ReactDOM.render(<BunnyApp />, div);
});

describe('BunnyApp', () => {
    function testView(view) {
        it(`shows ${view}`, () => {
            const wrapper = shallow(<BunnyApp view={view} bunnies={[]} />);
            expect(toJSON(wrapper)).toMatchSnapshot();
        });
    }
    testView('gallery');
    testView('detail');
    testView('thumbnail');
});


