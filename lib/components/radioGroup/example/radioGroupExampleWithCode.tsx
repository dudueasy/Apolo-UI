import React from 'react';
import Demo from "../../../DemoWithCode";
import {RadiosGroupExample} from "./radioGroup.example";
import {ExampleWrapper} from "../../../ExampleWrappers";
import {RadiosGroupControlledExample} from "./radioGroup.controlledExample";

const RadioGroupExampleWithCode: React.FC = () => <>
  <h3>Example for RadioGroup</h3>
  <Demo code={require('!!raw-loader!./radioGroup.example').default}>
    <ExampleWrapper>
      <RadiosGroupExample/>
    </ExampleWrapper>
  </Demo>
  <Demo code={require('!!raw-loader!./radioGroup.controlledExample').default}>
    <ExampleWrapper>
      <RadiosGroupControlledExample/>
    </ExampleWrapper>
  </Demo>
</>;

export default RadioGroupExampleWithCode

