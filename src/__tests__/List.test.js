import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { bunnies } from '../services/bunnies';
import { List, ListItem } from '../Components/List';

describe('ListItem tests', () => {
   
    it('displays correct properties', () => {
        const wrapper = shallow(<ListItem title="Test Title" description="Test description" url="http://google.com/" />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

});

describe('List tests', () => {

    it('can render 3 bunnies', () => {

        const wrapper = shallow(
            
            <List listArray={[
                {
                    title: 'Cute Bunny 1',
                    description: 'Who\'s a cute bunny??',
                    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
                },  
                {
                    title: 'Cute Bunny 2',
                    description: 'Diabolically cute!!',
                    url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg'
                },  
                {
                    title: 'Cute Bunny 3',
                    description: 'There are no bounds to the cuteness!',
                    url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg'
                }
            ]} />

        )

        let listArray = wrapper.unrendered.props.listArray;
        expect(listArray.length).toEqual(3);

    });

});