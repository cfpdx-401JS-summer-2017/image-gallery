import React from 'react';

import { shallow } from 'enzyme';

import toJSON from 'enzyme-to-json';
import Bunnies from '../images/bunnies';
import Thumbnail from '../thumbnail/Thumbnail';

describe( 'Thumbnail', () => {

    it( 'lists bunnies as thumbnail photos', () => {
        const wrapper = shallow(<Thumbnail bunnies={Bunnies}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

});