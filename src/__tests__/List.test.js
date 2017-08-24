import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { bunnies } from '../services/bunnies';
import { List, ListItem } from '../Components/List';

describe('List tests', () => {
   
    it('displays correct properties', () => {
        const wrapper = shallow(<ListItem title="Test Title" description="Test description" url="http://google.com/" />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

});