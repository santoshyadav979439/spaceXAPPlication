import React from 'react';
import {configure,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Mission from './Mission';
configure({adapter: new Adapter()})
describe('<Mission />',()=>{
    it('should have 2 divs',()=>{
        const component= mount(<Mission />);
        expect(component).toMatchSnapshot();
    })
})