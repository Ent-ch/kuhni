import React from "react";
export default () => (<>
<header className="header-page" id="top">
  <div className="header-page__scroll" uk-sticky="top: 100vh; animation: uk-animation-slide-top">
    <div className="uk-container">
      <div className="header-page__box">
        <div className="header-page__logo logo">
          <a className="logo__link" href="/">
            <div className="logo__icon"><img className="logo__img" src="assets/images/logo_icon.png" alt="IDEAL" /></div>
            <div className="logo__text"><span className="logo__company">IDEAL</span><span className="logo__slogan"><span>Производство</span> мебели под заказ</span>
            </div>
          </a>
        </div>
        <div className="header-page__nav nav">
          <ul className="uk-navbar-nav" uk-scrollspy-nav="closest: li; scroll: true; offset: 50">
            <li><a href="#catalog">Каталог</a></li>
            <li><a href="#materials">Материалы</a></li>
            <li><a href="#about">О компании</a></li>
            <li><a href="#projects">Примеры работ</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </div>
        <div className="header-page__info info"><a className="info__adress adress" href="#">г. Тюмень, ул.Закалужская 83, стр.4, эт.4</a><a className="info__phone phone" href="tel:+79292694888">+7 (929) 269-48-88</a><a className="info__callback callback" href="#callback" data-uk-toggle /></div>
      </div>
    </div>
  </div>
</header>
<div className="header-call-wrapper">
<div className="header-call">
    <div className="hero__img--2" />
    <div>
      <div className="hero__content">
        <h1 className="hero__title">Фабричные кухни<br />под заказ от 15 т.р.<br /><span>с бесплатной установкой</span></h1>
        <div className="hero__form hero-form">
          <div className="hero-form__title">Оставьте свой номер телефона и получите<br /> <b>дизайн-проект кухни бесплатно</b></div>
          <form id="hero-form" action><input type="hidden" name="formname" defaultValue="Дизайн-проект кухни бесплатно" />
            <div className="hero-form__control"><input className="uk-input" type="text" name="phone" placeholder="+7(___) __-__-__" required /><button className="uk-button" type="submit">Получить проект</button></div>
            <div className="hero-form__politic politic"><span>Нажимая кнопку, вы соглашаетесь с <a href="#privacy-policy" data-uk-toggle>условиями политики конфиденциальности</a></span></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</>
);
