import React, {useState} from 'react';
import Dialog from './dialog';


export default function () {

  const [visible, toggleVisible] = useState<boolean>(false);
  const [Xvisible, toggleXVisible] = useState<boolean>(false);

  return (
    <div>
      <div>
        <h2>Example1</h2>
        <button onClick={() => {toggleVisible((visible) => (!visible));}}>
          toggleDialog
        </button>
        <Dialog
          visible={visible}
          onClose={() => { toggleVisible(false)}}
          buttons={[
            <button onClick={()=>{toggleVisible(false)}}>
              cancel
            </button>,
            <button onClick={()=>{toggleVisible(false)}}>
              ok
            </button>
          ]}
        >11111</Dialog>
      </div>

      <div>
        <h2>Example2</h2>
        <button onClick={() => {toggleXVisible((visible) => (!visible));}}>
          toggleDialog
        </button>
        <Dialog
          visible={Xvisible}
          onClose={()=>{ toggleXVisible(false)}}
          buttons={[
            <button onClick={()=>{toggleXVisible(false)}}>
              cancel
            </button>,
            <button onClick={()=>{toggleXVisible(false)}}>
              ok
            </button>
          ]}
        >11111</Dialog>
      </div>
      <div>
        <h2>Example for Dialog.alert</h2>
        <button onClick={()=>{
          Dialog.alert({
            title:'alert demo',
            content:'111',
          })
        }
        }>alert</button>
      </div>

      <div>
        <h2>Example for Dialog.confirm</h2>
        <button onClick={()=>{
          Dialog.confirm({
            title:'confirm demo',
            content: '111',
            onOk:()=>{console.log('yes')},
            onCancel:()=>{console.log('no')},
          })
        }}>
          confirm
        </button>
      </div>

      <div>
        <h2>Example for Dialog.modal</h2>
        <button onClick={()=>{
          const onClose = Dialog.modal( {
            content: (
              <>
                <h1>Hello</h1>
                <button onClick={()=>{onClose()}}>close Modal</button>
              </>
            ),
            title: <h2>Modal Example</h2>
          })
        }}
        >
          modal
        </button>
      </div>
    </div>

  );
}
