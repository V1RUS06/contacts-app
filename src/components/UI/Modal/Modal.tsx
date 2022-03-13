import './Modal.css'
import React from 'react';

interface Props {
  visible: boolean,
  setVisible: (arg: boolean) => void
}

const Modal:React.FC<Props> = ({children, visible, setVisible}) => {

  const rootClasses = ["modal"]
  if (visible) {
    rootClasses.push("active")
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className="modalContent" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>

  );
};

export default Modal;
