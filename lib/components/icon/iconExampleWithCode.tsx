import React from 'react';
import IconExample from './icon.example';
import Demo from '../../DemoWithCode';
import {ExampleWrapper} from '../../ExampleWrappers';


interface Props {
  code: string
}

const IconDemo: React.FC<Props> = (props) => {
  return <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
    <ExampleWrapper>
      <IconExample/>
    </ExampleWrapper>
  </Demo>;
};

export default IconDemo;
