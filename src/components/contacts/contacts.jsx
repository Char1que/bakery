import React from "react";
import item from "./contacts.module.css";

const Contacts = () => {
  return (
    <div className={item.contacts}>
      <h2>Контакты</h2>
      <div className={item.contactsInfo}>
        <ul className={item.contactsInfoText}>
          <li>Фамилия</li>
          <li>Имя</li>
          <li>Отчество</li>
          <li>Номер телефона</li>
        </ul>
        <ul className={item.contactsInfoText}>
          <li>Фамилия</li>
          <li>Имя</li>
          <li>Отчество</li>
          <li>Номер телефона</li>
        </ul>
        <ul className={item.contactsInfoText}>
          <li>Фамилия</li>
          <li>Имя</li>
          <li>Отчество</li>
          <li>Номер телефона</li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
