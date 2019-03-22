import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from './app'

describe('App should', () => {
  it('exist', () => {
    expect(App).toBeDefined()
  })

  it('render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('have a consistent structure', () => {
    const wrapper = mount(<App />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
