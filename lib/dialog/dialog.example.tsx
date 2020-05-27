import React, {useState} from 'react';
import Dialog from './dialog';

interface Props {}

const DialogExample: React.FC<Props> = (props) => {
  const [visible, toggleVisible] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => {toggleVisible((visible) => (!visible));}}>
        toggleDialog
      </button>
      <Dialog
        visible={visible}
        onClose={() => { toggleVisible(false);}}
        buttons={[
          <button onClick={() => {toggleVisible(false);}}>
            cancel
          </button>,
          <button onClick={() => {toggleVisible(false);}}>
            ok
          </button>
        ]}
      >11111</Dialog>
    </div>
  );
};
export default DialogExample;
