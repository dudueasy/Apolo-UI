import React from "react";
import Demo from "../../DemoWithCode";
import {ExampleWrapper} from "../../ExampleWrappers";
import ScrollExample from "./scroll.example";

const ScrollExampleWithCode: React.FC = () => {
  return <>
    <h3>Example for Scroll</h3>
    <Demo code={require('!!raw-loader!./scroll.example').default}>
      <ExampleWrapper>
        <ScrollExample/>
      </ExampleWrapper>
    </Demo>
  </>
}

export default ScrollExampleWithCode
