import React from "react";
import item from "./catalog.module.css";

const Catalog = () => {
  return (
    <div className={item.content}>
      <h2>Каталог товаров</h2>
      <div className={item.card}>
        <div className={item.cardProducts}>
          <div className={item.cardLogo}>
            <ul className={item.cardСompound}>
              <li>Состав:</li>
              <li>Лук</li>
              <li>Лук</li>
              <li>Лук</li>
            </ul>
          </div>
          <div className={item.cardName}>Наименование товара</div>
        </div>
        <div className={item.cardProducts}>
          <div className={item.cardLogo}>
            <ul className={item.cardСompound}>
              <li>Состав:</li>
              <li>Лук</li>
              <li>Лук</li>
              <li>Лук</li>
            </ul>
          </div>
          <div className={item.cardName}>Наименование товара</div>
        </div>
        <div className={item.cardProducts}>
          <div className={item.cardLogo}>
            <ul className={item.cardСompound}>
              <li>Состав:</li>
              <li>Лук</li>
              <li>Лук</li>
              <li>Лук</li>
            </ul>
          </div>
          <div className={item.cardName}>Наименование товара</div>
        </div>
        <div className={item.cardProducts}>
          <div className={item.cardLogo}>
            <ul className={item.cardСompound}>
              <li>Состав:</li>
              <li>Лук</li>
              <li>Лук</li>
              <li>Лук</li>
            </ul>
          </div>
          <div className={item.cardName}>Наименование товара</div>
        </div>
        <div className={item.cardProducts}>
          <div className={item.cardLogo}>
            <ul className={item.cardСompound}>
              <li>Состав:</li>
              <li>Лук</li>
              <li>Лук</li>
              <li>Лук</li>
            </ul>
          </div>
          <div className={item.cardName}>Наименование товара</div>
        </div>
      </div>
    </div>
  );
};
export default Catalog;
