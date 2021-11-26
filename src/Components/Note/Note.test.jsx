import { shallow,mount } from 'enzyme';
import Note from './Note';

describe('Note',()=>{
    it('Card Content Exists',()=>{
        const wrapper = shallow(<Note />);
        expect(wrapper.find('#Note')).toBeDefined();
    })


})