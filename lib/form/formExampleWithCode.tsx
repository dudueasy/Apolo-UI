import React from 'react';
import {ExampleWrapper} from '../ExampleWrappers';
import Demo from '../DemoWithCode';
import Button from '../button/button';
import FormExample from './form.example';

interface Props {
  code: string
}

const FormExampleWithCode: React.FC<Props> = (props) => {
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
