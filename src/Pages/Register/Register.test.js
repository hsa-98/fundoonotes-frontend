import { shallow,mount } from 'enzyme';
import Register from './Register';

describe('Register Tests',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = mount(<Register />)
    })
    test('Check If Header Exists',()=>{
        expect(wrapper.find("h4").text()).toEqual('Please Fill Details to Create an Account');
    })

    test('Check If All Required Text Fields Exist',()=>{
        expect(wrapper.find('#firstName')).toBeDefined();
        expect(wrapper.find('#lastName')).toBeDefined();
        expect(wrapper.find('#emailId')).toBeDefined();
        expect(wrapper.find('#password')).toBeDefined();
        expect(wrapper.find('#confirmPassword')).toBeDefined();
    })

    test('Check If All TextFields are Empty',()=>{
        expect(wrapper.find('Field[id="firstName"]')).toHaveLength(1);
        expect(wrapper.find('Field[id="lastName"]')).toHaveLength(1);
        expect(wrapper.find('Field[id="emailId"]')).toHaveLength(1);
        expect(wrapper.find('Field[id="password"]')).toHaveLength(1);
        expect(wrapper.find('Field[id="confirmPassword"]')).toHaveLength(1);
    })

    test('Check If Register Button Exists',()=>{
        expect(wrapper.find('#register')).toBeDefined();
    })

    test('Check If Values Are Updated',()=>{
        const data = {
            firstName :'Harsh',
            lastName :'Agrawal',
            emailId:'harsh1998@gmail.com',
            password:'Harsh!123',
            confirmPassword:'Harsh!123'
        };
        (wrapper.find('Field[id="firstName"]')).simulate("change",{target : {value:"foo"}})
      
        const firstName = wrapper.find('Field[id="firstName"]');
        console.log(firstName)
        const lastName = wrapper.find('#lastName');
        const email = wrapper.find('#emailId');
        const password = wrapper.find('#password');
        const confirmPassword = wrapper.find('#confirmPassword');
        email.value = data.emailId;

        expect(email.value).toBe('harsh1998@gmail.com');
    })


})