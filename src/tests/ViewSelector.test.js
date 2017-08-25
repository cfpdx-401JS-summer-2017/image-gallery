
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ViewSelector from '../services/ViewSelector'

describe('ViewSelector', () => {

    it('switches to correct view', () => {
        const wrapper = shallow(<ViewSelector images={[]} />);
        expect(toJSON(wrapper)).toMatchSnapshot();

    })
})