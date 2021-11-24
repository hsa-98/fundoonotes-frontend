import { shallow,mount } from 'enzyme';
import Login from './Login';
describe('Login Tests', ()=>{
  let wrapper;
  beforeEach(()=>{
     wrapper = shallow(<Login />).dive();
  })
  test('check Sign In Text',()=>{
    expect(wrapper.find("h2").text()).toEqual("Sign In")
  })

  test('Check If Email Text Field Exists',()=>{
    expect(wrapper.find('#emailId')).toBeDefined();
  })

  
  test('Check If Password Text Field Exists',()=>{
    expect(wrapper.find('#password')).toBeDefined();
  })

  test('Check if the fields are empty',()=>{
    expect(wrapper.find('Field[id="emailId"]')).toHaveLength(1);
    expect(wrapper.find('Field[id="password"]')).toHaveLength(1);
  })

  test('Check If The Sign In button Exists',()=>{
    expect(wrapper.find('#signIn')).toBeDefined();
  })

  // test('Check if Fields are updated',()=>{
  //   const wrapper = mount(<Login />);
  //   const data = {
  //     emailId : 'harshsanjayagrawal89@gmail.com',
  //     password:'Letssee!123'
  //   }
  //   const email = wrapper.find('#emailId');
  //   const password = wrapper.find('#password');
  //   console.log(email);
  //   // email.value = data.emailId;
  //   // password.value = data.password;
  //   // wrapper.find('#emailId').
  //   // expect(wrapper.find('Field[id="emailId"]').value).toEqual('harshsanjayagrawal89@gmail.com')
  // })
})
