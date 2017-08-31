import React from 'react';

import { shallow } from 'enzyme';

import toJSON from 'enzyme-to-json';
import Bunnies from '../images/bunnies';
import List from '../list/List';

describe( 'List', () => {

    it( 'lists bunnies', () => {
        const wrapper = shallow(<List bunnies={Bunnies}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

});