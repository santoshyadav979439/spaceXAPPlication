import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Missions from './Missions';
configure({adapter: new Adapter()})
describe('<Mission />',()=>{
    it('should have 2 divs',()=>{
        const component= shallow(<Missions />);
        expect(component).toMatchSnapshot();
    })
})