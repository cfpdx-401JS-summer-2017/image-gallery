import React from 'react';

import { shallow } from 'enzyme';

import toJSON from 'enzyme-to-json';
import Bunnies from '../images/bunnies';
import Gallery from '../gallery/Gallery';

describe( 'Gallery', () => {

    it( 'displays bunnies in a gallery', () => {
        const wrapper = shallow(<Gallery bunnies={Bunnies} current={0}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

});