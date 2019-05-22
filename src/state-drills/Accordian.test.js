import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordian from './Accordian'

describe('Testing Accordian', () => {
  const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]
  it('renders without errors [Smoke Test]', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordian/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Accordian />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders tabs but none are active', () => {
    const wrapper = shallow(<Accordian sections={sections} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('opens any clicked li', () => {
    const wrapper = shallow(<Accordian sections={sections} />)
    wrapper.find('li').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('sets last clicked element as active', () => {
    const wrapper = shallow(<Accordian sections={sections} />)
    wrapper.find('li').at(1).simulate('click')
    wrapper.find('li').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
