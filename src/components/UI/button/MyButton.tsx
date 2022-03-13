import React from 'react';
import  "./MyButton.css";
interface Props {
  onClick?: (e: any) => void
}

const MyButton: React.FC<Props> = ({children, onClick, ...props}) => {
  return (
      <button {...props} className="myBtn" onClick={onClick}>
        {children}
      </button>
  );
};

export default MyButton;
