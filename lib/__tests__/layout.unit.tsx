import React from 'react'
import renderer from 'react-test-renderer'

import Layout from '../layout/layout';
import {shallow} from 'enzyme';


describe('Layout component', ()=>{
  test('should render properly', function () {
    const component = shallow(<Layout className={'hello'}/>)

    const layoutWrapper = component.find('[className="apoloUI-layout hello"]')

    expect(layoutWrapper.exists()).toBeTruthy()
    console.log(layoutWrapper.debug())
  });

  test('should match snapshot', function () {
      const tree = renderer.create(<Layout className={'hello'}/>).toJSON()
      expect(tree).toMatchSnapshot()
  });
})



