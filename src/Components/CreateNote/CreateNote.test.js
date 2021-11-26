import { shallow,mount } from 'enzyme';
import CreateNote from './CreateNote'

describe('CreateNote',()=>{
    it('Accordion Should Exist',()=>{
        const wrapper = shallow(<CreateNote />);
        expect(wrapper.find('#accordion')).toBeDefined();
    })
    it('Title Field Should Exist',()=>{
        const wrapper = mount(<CreateNote />);
        expect(wrapper.find('#title')).toBeDefined();
    })

    it('Description Field Should Exist',()=>{
        const wrapper = mount(<CreateNote />);
        expect(wrapper.find('#description')).toBeDefined();
    })

    it('Title Field Must Be Empty',()=>{
        const wrapper = mount(<CreateNote />);
        expect(wrapper.find("InputBase[id='title']")).toHaveLength(0);
    })

    it('Description Fields Must Be Empty',()=>{
        const wrapper = mount(<CreateNote />);
        expect(wrapper.find("InputBase[id='description']")).toHaveLength(0);
    })
})