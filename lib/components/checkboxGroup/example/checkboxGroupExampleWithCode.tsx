import React from 'react';
import Demo from "../../../DemoWithCode";
import {ExampleWrapper} from "../../../ExampleWrappers";
import { CheckboxGroupExample } from './checkboxGroup.example';

const CheckboxGroupExampleWithCode: React.FC = () => <>
  <h3>Example for RadioGroup</h3>
  <Demo code={require('!!raw-loader!./checkboxGroup.example').default}>
    <ExampleWrapper>
      <CheckboxGroupExample/>
    </ExampleWrapper>
  </Demo>
</>;

export default CheckboxGroupExampleWithCode

