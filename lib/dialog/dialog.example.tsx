import React, {useState, useEffect} from 'react'
import Dialog from './dialog';


export default function(){

  const [visible, toggleVisible] = useState<boolean>(false)

  return (
    <div>
      <button onClick={()=>{  toggleVisible((visible)=>(!visible))}}>
        toggleDialog
      </button>
      <Dialog
        visible={visible}
        buttons={[
          <button onClick={()=>{toggleVisible(false)}}>
            cancel
          </button> ,
          <button onClick={()=>{toggleVisible(false)}}>
            ok
          </button>
        ]}
      >11111</Dialog>
    </div>
  );
}









