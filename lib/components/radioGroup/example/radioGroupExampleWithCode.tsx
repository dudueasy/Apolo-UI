import React from 'react';
import Demo from "../../../DemoWithCode";
import {RadiosGroupExample} from "./radioGroup.example";
import {ExampleWrapper} from "../../../ExampleWrappers";

const RadioGroupExampleWithCode: React.FC = () => <>
  <h3>Example for RadioGroup</h3>
  <Demo code={require('!!raw-loader!./radioGroup.example').default}>
    <ExampleWrapper>
      <RadiosGroupExample/>
    </ExampleWrapper>
  </Demo>
</>;

export default RadioGroupExampleWithCode

