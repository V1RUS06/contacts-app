import './ContactCard.css'
import React from 'react';
import MyButton from "../../UI/button/MyButton";
interface Props {
  name: string,
  phone: string | number,
  onClick?: () => void
}

const ContactCard: React.FC<Props> = ({name, phone, onClick}) => {

  return (
    <div className="card">
       <div className="card__info">
         <div className="card__text">{phone}</div>
         <div className="card__text">{name}</div>
       </div>
      <div className="btn__container">
        <MyButton onClick={onClick}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
};

export default ContactCard;
