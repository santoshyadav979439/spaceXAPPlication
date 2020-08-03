import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableColumn from './TableColumn'
configure({adapter:new Adapter()})
describe('<TableColumn />',()=>{
    let component='';
    beforeEach(()=>{
        component=shallow(<TableColumn />);
    })
    it('should have one td element',()=>{
        expect(component.find('td')).toHaveLength(1);
    })
})