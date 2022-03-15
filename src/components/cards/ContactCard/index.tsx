import './ContactCard.css'
import React from 'react';
import MyButton from "../../UI/button/MyButton";
interface Props {
  name: string,
  phone: string | number,
  remove?: () => void
  edit?: () => void
}

const ContactCard: React.FC<Props> = ({name, phone, remove, edit}) => {

  return (
    <div className="card">
       <div className="card__info">
         <div className="card__text">{phone}</div>
         <div className="card__text">{name}</div>
       </div>
      <div className="btn__container">
        <MyButton onClick={remove}>
          Удалить
        </MyButton>
        <div  style={{marginLeft: 5}} />
          <MyButton onClick={edit}>
            Изменить
          </MyButton>
      </div>
    </div>
  );
};

export default ContactCard;
