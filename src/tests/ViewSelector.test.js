
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ViewSelector from '../services/ViewSelector'

describe('ViewSelector', () => {

    it('switches to correct view', () => {
        const wrapper = shallow(<ViewSelector images={[]} />);
        expect(toJSON(wrapper)).toMatchSnapshot();

        const component = wrapper.instance();
        
        component.handleChange( 'gallery' );
        wrapper.update();
        expect(toJSON(wrapper)).toMatchSnapshot();

        component.handleChange( 'thumbnail' );
        wrapper.update();
        expect(toJSON(wrapper)).toMatchSnapshot();

        component.handleChange( 'list' );
        wrapper.update();
        expect(toJSON(wrapper)).toMatchSnapshot();

    })
})