import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
configure({adapter: new Adapter()})
describe('<Mission />',()=>{
    it('should render correctly with no props',()=>{
       const component= shallow(<Header />);
       expect(component).toMatchSnapshot();
    })
})