import React from 'react';
import Demo from '../../DemoWithCode';
import LayoutExample from './example/layout.example';
import LayoutWithSider from './example/layoutWithSider.example';
import LayoutNestedLayout from './example/layoutNestedLayout';

const LayoutExampleWithCode: React.FC = (props) => {
  return <>
    <Demo code={require('!!raw-loader!./example/layout.example.tsx').default}>
      <LayoutExample/>
    </Demo>

    <Demo code={require('!!raw-loader!./example/layoutWithSider.example.tsx').default}>
      <LayoutWithSider/>
    </Demo>

    <Demo code={require('!!raw-loader!./example/layoutWithSider.example.tsx').default}>
      <LayoutNestedLayout/>
    </Demo>
  </>;
};

export default LayoutExampleWithCode;
