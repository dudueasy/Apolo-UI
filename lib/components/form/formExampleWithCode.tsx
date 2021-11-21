import React from 'react';
import {ExampleWrapper} from '../../ExampleWrappers';
import Demo from '../../DemoWithCode';
import Button from '../button/button';
import FormExample from './form.example';


const FormExampleWithCode: React.FC = (props) => {
  return <>
    <h3>Example for Form</h3>
    <Demo code={require('!!raw-loader!./form.example.tsx').default}>
      <ExampleWrapper>
        <FormExample/>
      </ExampleWrapper>
    </Demo>
  </>;
};

Button.defaultProps = {
  level: 'normal'
};

export default FormExampleWithCode;
