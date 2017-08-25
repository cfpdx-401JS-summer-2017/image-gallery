import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import toJSON from 'enzyme-to-json';

import { Images } from '../routes/Images';

describe('Images tests', () => {
    it('shows view that matches user selection', () => {
        const wrapper = shallow(<Images />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

// TODO: do we need a handleChange function so we can simulate clicking on the other views, in order to test this?
})