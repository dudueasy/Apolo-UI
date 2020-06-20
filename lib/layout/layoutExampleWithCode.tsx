import React from 'react';
import Demo from '../DemoWithCode';
import LayoutExample from './layout.example';
import LayoutWithSider from './layoutWithSider.example';
import LayoutNestedLayout from './layoutNestedLayout';

const LayoutExampleWithCode: React.FC = (props) => {
  return <>
    <Demo code={require('!!raw-loader!./layout.example.tsx').default}>
      <LayoutExample/>
    </Demo>

    <Demo code={require('!!raw-loader!./layoutWithSider.example.tsx').default}>
      <LayoutWithSider/>
    </Demo>

    <Demo code={require('!!raw-loader!./layoutWithSider.example.tsx').default}>
      <LayoutNestedLayout/>
    </Demo>
  </>;
};

export default LayoutExampleWithCode;