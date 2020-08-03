import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SpaceX from './SpaceX';
import Missions from '../Missions/Missions'
configure({adapter:new Adapter()});
describe('<SpaceX />',()=>{
    let component='';
    beforeEach(()=>{
        component=shallow(<SpaceX/>);
    })
it('should render missions component',()=>{
        expect(component.find(Missions)).toHaveLength(1);
})
})