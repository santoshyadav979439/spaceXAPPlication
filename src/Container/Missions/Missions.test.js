import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Missions from './Missions';
import LeftBar from '../../Component/LeftBar/LeftBar'
import Header from '../../Component/Header/Header'
import Loader from '../../Component/Spinner/Spinner'
configure({adapter: new Adapter()})
describe('<Mission />',()=>{
    let component='';
    beforeEach(()=>{
        component= shallow(<Missions />);
    })
    it('should have footer',()=>{
        
        expect(component.find('footer').text()).toEqual('Developed by: Santosh')
    })
    it('should have one footer',()=>{
     
        expect(component.find('footer')).toHaveLength(1)
    })
    it('should have one leftbar',()=>{
      
        expect(component.find(LeftBar)).toHaveLength(1)
    })
    it('should have one header',()=>{
        
        expect(component.find(Header)).toHaveLength(1)
    })

    it('should have one Loader',()=>{
        component.setState({loading:true})
        expect(component.find(Loader)).toHaveLength(1)
    })
    it('should have one Loader',()=>{
        component.setState({loading:false})
        expect(component.find(Loader)).toHaveLength(0)
    })
    it('should have Missions class',()=>{
        expect(component.find('.Missions')).toHaveLength(1);
    })
   
    it('should have <footer>Developed by: Santosh</footer>',()=>{
        expect(component.contains(<footer>Developed by: Santosh</footer>)).toEqual(true);
    })

})
