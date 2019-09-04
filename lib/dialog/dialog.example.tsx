import React, {useState, useEffect} from 'react';
import Dialog,{alert} from './dialog';


export default function () {

  const [visible, toggleVisible] = useState<boolean>(false);

  const handleOpen = () => { toggleVisible(true); };
  const handleClose = () => { toggleVisible(false);};

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
          onClose={handleClose}
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
        <h2>Example 3</h2>
        <button onClick={()=>{ alert('111')}}> alert </button>
      </div>
    </div>

  );
}









