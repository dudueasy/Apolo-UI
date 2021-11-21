import React from 'react';
import Demo from '../../DemoWithCode';
import {ExampleWrapper} from '../../ExampleWrappers';
import DialogExample from './dialog.example';
import DialogFnExample from './dialogFn.example';


interface Props {
  code: string
}

const DialogDemo: React.FC<Props> = (props) => {
  return <>
    <h4>Example for Dialog</h4>
    <Demo code={require('!!raw-loader!./dialog.example.tsx').default}>
      <ExampleWrapper>
        <DialogExample/>
      </ExampleWrapper>
    </Demo>
    <h4>Example for DialogFn</h4>
    <Demo code={require('!!raw-loader!./dialogFn.example.tsx').default}>
      <ExampleWrapper>
        <DialogFnExample/>
      </ExampleWrapper>
    </Demo>
  </>;
};

export default DialogDemo;
