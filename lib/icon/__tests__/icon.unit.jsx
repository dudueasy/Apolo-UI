import * as renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../icon';
import {shallow} from 'enzyme';


describe('Icon Component', () => {
  it('should render properly', () => {
    const IconProps = {name: 'qq'};
    const IconSnapshot = renderer.create(<Icon {...IconProps}/>).toJSON();
    expect(IconSnapshot).toMatchSnapshot();
  });

  it('call onClick when clicked', () => {
    const onClick = jest.fn(() => {
      console.log('Icon is clicked');
    });
    const IconProps = {name: 'qq', onClick};

    const wrapper = shallow(<Icon {...IconProps}/>);

    wrapper.simulate('click');
    wrapper.simulate('click');

    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
