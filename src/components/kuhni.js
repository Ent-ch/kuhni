import React from "react"

export default () =>   <div>
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
    <div className="header-page__hero hero">
      <div className="hero__img--2" />
      <div className="uk-container">
        <div className="uk-grid uk-child-width-1-2@m" data-uk-grid>
          <div />
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
    </div>
  </header>
  <section className="advantages" id="advantages">
    <div className="uk-container uk-section">
      <div className="uk-grid uk-child-width-1-6@l uk-child-width-1-3@s uk-child-width-1-2" data-uk-grid>
        <div>
          <div className="advantages__item"><img className="advantages__icon" src="/assets/images/icons/advantages-1.png" alt="Бесплатный замер по Тюмени" /><span className="advantages__text">Бесплатный замер по Тюмени</span></div>
        </div>
        <div>
          <div className="advantages__item"><img className="advantages__icon" src="/assets/images/icons/advantages-2.png" alt="От 3 рабочих дней на изготовление" /><span className="advantages__text">От 7 рабочих дней на изготовление</span></div>
        </div>
        <div>
          <div className="advantages__item"><img className="advantages__icon" src="/assets/images/icons/advantages-3.png" alt="1 день - бесплатная доставка и сборка" /><span className="advantages__text">1 день - бесплатная доставка и сборка</span></div>
        </div>
        <div>
          <div className="advantages__item"><img className="advantages__icon" src="/assets/images/icons/advantages-4.png" alt="Официальная гарантия 10 лет" /><span className="advantages__text">Официальная гарантия 2 года</span></div>
        </div>
        <div>
          <div className="advantages__item"><img className="advantages__icon" src="/assets/images/icons/advantages-5.png" alt="Свое производство с опытом 15 лет" /><span className="advantages__text">Свое производство с опытом 10 лет</span></div>
        </div>
        <div>
          <div className="advantages__item"><img className="advantages__icon" src="/assets/images/icons/advantages-6.png" alt="рассрочка" /><span className="advantages__text">Гибкая ценовая политика</span></div>
        </div>
      </div>
    </div>
  </section>
  <section className="catalog" id="catalog">
    <div className="uk-container uk-section">
      <h3 className="section-title">Кухни на любой вкус:<span>1 245 моделей в каталоге</span></h3>
      <div className="filter" uk-filter="target: .js-filter">
        <div className="filter__box">
          <div className="uk-grid uk-grid-small uk-child-width-1-4@l uk-child-width-1-4@s uk-child-width-1-2" data-uk-grid>
            <div>
              <h4>Вид</h4>
              <ul className="uk-nav">
                <li uk-filter-control="filter: [data-filter-1='Линейная']; group: data-filter-1"><a href="#">Линейная</a></li>
                <li uk-filter-control="filter: [data-filter-1='Угловая']; group: data-filter-1"><a href="#">Угловая</a></li>
                <li uk-filter-control="filter: [data-filter-1='Островная']; group: data-filter-1"><a href="#">Островная</a></li>
                <li uk-filter-control="filter: [data-filter-1='П-образная']; group: data-filter-1"><a href="#">П-образная</a></li>
                <li uk-filter-control="filter: [data-filter-1='Т-образная']; group: data-filter-1"><a href="#">Т-образная</a></li>
                <li uk-filter-control="filter: [data-filter-1='Радиусная']; group: data-filter-1"><a href="#">Радиусная</a></li>
              </ul>
            </div>
            <div>
              <h4>Материал фасада</h4>
              <ul className="uk-nav">
                <li uk-filter-control="filter: [data-filter-2='МДФ']; group: data-filter-2"><a href="#">МДФ</a></li>
                <li uk-filter-control="filter: [data-filter-2='Пластик']; group: data-filter-2"><a href="#">Пластик</a></li>
                <li uk-filter-control="filter: [data-filter-2='Массив']; group: data-filter-2"><a href="#">Массив</a></li>
                <li uk-filter-control="filter: [data-filter-2='ДСП']; group: data-filter-2"><a href="#">ДСП</a></li>
                <li uk-filter-control="filter: [data-filter-2='Акрил']; group: data-filter-2"><a href="#">Акрил</a></li>
                <li uk-filter-control="filter: [data-filter-2='Стекло']; group: data-filter-2"><a href="#">Стекло</a></li>
              </ul>
            </div>
            <div>
              <h4>Стиль</h4>
              <ul className="uk-nav">
                <li uk-filter-control="filter: [data-filter-3='Классика']; group: data-filter-3"><a href="#">Классика</a></li>
                <li uk-filter-control="filter: [data-filter-3='Современный']; group: data-filter-3"><a href="#">Современный</a></li>
                <li uk-filter-control="filter: [data-filter-3='Прованс']; group: data-filter-3"><a href="#">Прованс</a></li>
                <li uk-filter-control="filter: [data-filter-3='Кантри']; group: data-filter-3"><a href="#">Кантри</a></li>
                <li uk-filter-control="filter: [data-filter-3='Модерн']; group: data-filter-3"><a href="#">Модерн</a></li>
                <li uk-filter-control="filter: [data-filter-3='Лофт']; group: data-filter-3"><a href="#">Лофт</a></li>
              </ul>
            </div>
            <div>
              <h4>Цена</h4>
              <ul className="uk-nav">
                <li uk-filter-control="filter: [data-filter-4='Бюджетные']; group: data-filter-4"><a href="#">Бюджетные</a></li>
                <li uk-filter-control="filter: [data-filter-4='Комфорт']; group: data-filter-4"><a href="#">Комфорт</a></li>
                <li uk-filter-control="filter: [data-filter-4='Премиум']; group: data-filter-4"><a href="#">Премиум</a></li>
              </ul>
            </div>
            <div className="filter__clear">
              <ul className="uk-nav">
                <li uk-filter-control><a href="#"><span data-uk-icon="icon: close" /> Сбросить фильтр</a></li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="js-filter filter__content uk-grid-small uk-child-width-1-4@l uk-child-width-1-3@s uk-child-width-1-2" data-uk-grid>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/001.jpg" alt="Модель 001" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 001</h3>
                <p>от 22 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/008.jpg" alt="Модель 008" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 008</h3>
                <p>от 20 200 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/012.jpg" alt="Модель 012" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 012</h3>
                <p>от 30 700 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/020.jpg" alt="Модель 020" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 020</h3>
                <p>от 18 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/024.jpg" alt="Модель 024" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 024</h3>
                <p>от 21 700 руб.</p>
              </div>
            </div>
          </li><li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Классика" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/026.jpg" alt="Модель 026" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 026</h3>
                <p>от 17 100 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Классика" data-filter-4="Комфорт">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/029.jpg" alt="Модель 029" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 029</h3>
                <p>от 40 400 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="ДСП" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/031.jpg" alt="Модель 031" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 031</h3>
                <p>от 28 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Комфорт">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/033.jpg" alt="Модель 033" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 033</h3>
                <p>от 37 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Прованс" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/034.jpg" alt="Модель 034" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 034</h3>
                <p>от 21 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Классика" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/038.jpg" alt="Модель 038" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 038</h3>
                <p>от 21 800 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Классика" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/040.jpg" alt="Модель 040" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 040</h3>
                <p>от 21 100 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/041.jpg" alt="Модель 041" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 041</h3>
                <p>от 17 400 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Классика" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/042.jpg" alt="Модель 042" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 042</h3>
                <p>от 21 100 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/043.jpg" alt="Модель 043" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 043</h3>
                <p>от 18 200 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/044.jpg" alt="Модель 044" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 044</h3>
                <p>от 15 300 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Комфорт">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/045.jpg" alt="Модель 045" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 045</h3>
                <p>от 45 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/046.jpg" alt="Модель 046" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 046</h3>
                <p>от 16 200 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="ДСП" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/047.jpg" alt="Модель 047" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 047</h3>
                <p>от 16 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/048.jpg" alt="Модель 048" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 048</h3>
                <p>от 21 800 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Классика" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/049.jpg" alt="Модель 049" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 049</h3>
                <p>от 28 900 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/050.jpg" alt="Модель 050" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 050</h3>
                <p>от 21 400 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="Пластик" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/051.jpg" alt="Модель 051" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 051</h3>
                <p>от 20 500 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="ДСП" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/052.jpg" alt="Модель 052" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 052</h3>
                <p>от 15 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/053.jpg" alt="Модель 053" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 053</h3>
                <p>от 23 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/054.jpg" alt="Модель 054" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 054</h3>
                <p>от 34 100 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="ДСП" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/055.jpg" alt="Модель 055" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 055</h3>
                <p>от 16 200 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="ДСП" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/056.jpg" alt="Модель 056" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 056</h3>
                <p>от 17 100 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/057.jpg" alt="Модель 057" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 057</h3>
                <p>от 21 800 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Комфорт">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/058.jpg" alt="Модель 058" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 058</h3>
                <p>от 35 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/059.jpg" alt="Модель 059" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 059</h3>
                <p>от 23 300 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/060.jpg" alt="Модель 060" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 060</h3>
                <p>от 16 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/061.jpg" alt="Модель 061" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 061</h3>
                <p>от 28 900 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/062.jpg" alt="Модель 062" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 062</h3>
                <p>от 17 600 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/063.jpg" alt="Модель 063" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 063</h3>
                <p>от 21 700 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="ДСП" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/064.jpg" alt="Модель 064" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 064</h3>
                <p>от 16 600 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/065.jpg" alt="Модель 065" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 065</h3>
                <p>от 20 500 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/066.jpg" alt="Модель 066" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 066</h3>
                <p>от 17 100 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Классика" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/067.jpg" alt="Модель 067" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 067</h3>
                <p>от 21 800 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/068.jpg" alt="Модель 068" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 068</h3>
                <p>от 16 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Классика" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/069.jpg" alt="Модель 069" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 069</h3>
                <p>от 19 700 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/070.jpg" alt="Модель 070" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 070</h3>
                <p>от 18 200 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Прованс" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/071.jpg" alt="Модель 071" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 071</h3>
                <p>от 15 700 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/072.jpg" alt="Модель 072" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 072</h3>
                <p>от 19 800 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/073.jpg" alt="Модель 073" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 073</h3>
                <p>от 17 400 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/074.jpg" alt="Модель 074" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 074</h3>
                <p>от 17 700 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/075.jpg" alt="Модель 075" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 075</h3>
                <p>от 20 500 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="ДСП" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/076.jpg" alt="Модель 076" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 076</h3>
                <p>от 18 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="ДСП" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/077.jpg" alt="Модель 077" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 077</h3>
                <p>от 30 900 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/078.jpg" alt="Модель 078" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 078</h3>
                <p>от 20 500 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Классика" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/079.jpg" alt="Модель 079" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 079</h3>
                <p>от 17 100 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="ДСП" data-filter-3="Классика" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/080.jpg" alt="Модель 080" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 080</h3>
                <p>от 16 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Классика" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/081.jpg" alt="Модель 081" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 081</h3>
                <p>от 17 800 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="ДСП" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/082.jpg" alt="Модель 082" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 082</h3>
                <p>от 17 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Модерн" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/083.jpg" alt="Модель 083" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 083</h3>
                <p>от 16 800 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Модерн" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/084.jpg" alt="Модель 084" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 084</h3>
                <p>от 18 700 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="ДСП" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/085.jpg" alt="Модель 085" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 085</h3>
                <p>от 18 700 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Комфорт">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/086.jpg" alt="Модель 086" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 086</h3>
                <p>от 35 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/087.jpg" alt="Модель 087" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 087</h3>
                <p>от 20 500 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="ДСП" data-filter-3="Модерн" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/088.jpg" alt="Модель 088" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 088</h3>
                <p>от 15 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Комфорт">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/089.jpg" alt="Модель 089" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 089</h3>
                <p>от 41 600 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/090.jpg" alt="Модель 090" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 090</h3>
                <p>от 17 400 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Модерн" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/091.jpg" alt="Модель 091" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 091</h3>
                <p>от 28 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="МДФ" data-filter-3="Кантри" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/092.jpg" alt="Модель 092" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 092</h3>
                <p>от 34 200 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="МДФ" data-filter-3="Кантри" data-filter-4="Премиум">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/093.jpg" alt="Модель 093" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 093</h3>
                <p>от 65 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="П-образная" data-filter-2="МДФ" data-filter-3="Прованс" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/094.jpg" alt="Модель 094" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 094</h3>
                <p>от 23 200 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Островная" data-filter-2="МДФ" data-filter-3="Современный" data-filter-4="Премиум">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/095.jpg" alt="Модель 095" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 095</h3>
                <p>от 100 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="Акрил" data-filter-3="Современный" data-filter-4="Комфорт">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/096.jpg" alt="Модель 096" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 096</h3>
                <p>от 38 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="Акрил" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/097.jpg" alt="Модель 097" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 097</h3>
                <p>от 29 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="Пластик" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/098.jpg" alt="Модель 098" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 098</h3>
                <p>от 20 700 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Угловая" data-filter-2="Пластик" data-filter-3="Современный" data-filter-4="Комфорт">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/099.jpg" alt="Модель 099" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 099</h3>
                <p>от 35 000 руб.</p>
              </div>
            </div>
          </li>
          <li data-filter-1="Линейная" data-filter-2="Пластик" data-filter-3="Современный" data-filter-4="Бюджетные">
            <div className="filter-item uk-card uk-card-default uk-transition-toggle uk-visible-toggle" tabIndex={0}>
              <div className="uk-card-media-top uk-cover-container"><img src="/assets/images/products/100.jpg" alt="Модель 100" uk-cover /><canvas width={580} height={420} />
                <div className="uk-overlay-primary uk-position-cover uk-hidden-hover" />
                <div className="uk-position-center uk-hidden-hover"><a className="uk-button uk-transition-slide-bottom-medium" href="#total-price" data-uk-scroll>Рассчитать</a></div>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Модель 100</h3>
                <p>от 28 000 руб.</p>
              </div>
            </div>
          </li>
        </ul>
        <div className="more-products uk-heading-line uk-text-center"><span>Показать еще <i data-uk-icon="icon: grid" /></span></div>
      </div>
    </div>
  </section>
  <section className="poll" id="poll">
    <div className="uk-container uk-section">
      <h3 className="section-title">Получить бесплатный проект</h3>
      <div className="poll__box">
        <div className="poll__wizard">
          <form id="smartwizard-form2" action><input type="hidden" name="formname" defaultValue="Получить бесплатный проект" />
            <div className="smartwizard" id="smartwizard2">
              <ul className="nav nav-tabs">
                <li className="nav-item active"><a className="nav-link" href="#step-1"><span>01</span></a></li>
                <li className="nav-item"><a className="nav-link" href="#step-2"><span>02</span></a></li>
                <li className="nav-item"><a className="nav-link" href="#step-3"><span>03</span></a></li>
                <li className="nav-item"><a className="nav-link" href="#step-4"><span>04</span></a></li>
                <li className="nav-item"><a className="nav-link" href="#step-5"><span>05</span></a></li>
                <li className="nav-item"><a className="nav-link" href="#step-6"><span>06</span></a></li>
                <li className="nav-item"><a className="nav-link" href="#step-7"><span>07</span></a></li>
                <li className="nav-item"><a className="nav-link" href="#step-8"><span>08</span></a></li>
                <li className="nav-item"><a className="nav-link" href="#step-9"><span>Заказ</span></a></li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane step-content" id="step-1">
                  <div className="poll__content poll-content">
                    <div className="poll-content__title"><span><b>1</b>/9</span> В каком стиле Вы планируете свою будущую кухню?</div>
                    <div className="poll-content__element uk-grid uk-grid-small uk-child-width-1-3@m uk-child-width-1-2@s  uk-child-width-1-2" data-uk-grid>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step1-2" defaultValue="Классика" /><img src="/assets/images/poll2/step1-1.jpg" alt />Классика</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step1-2" defaultValue="Прованс" /><img src="/assets/images/poll2/step1-2.jpg" alt />Современный</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step1-2" defaultValue="Модерн" /><img src="/assets/images/poll2/step1-3.jpg" alt />Прованс</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step1-2" defaultValue="Неоклассика" /><img src="/assets/images/poll2/step1-4.jpg" alt />Кантри</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step1-2" defaultValue="Кантри" /><img src="/assets/images/poll2/step1-5.jpg" alt />Модерн</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step1-2" defaultValue="Хайтек" /><img src="/assets/images/poll2/step1-6.jpg" alt />Лофт</label></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane step-content" id="step-2">
                  <div className="poll__content poll-content">
                    <div className="poll-content__title"><span><b>2</b>/9</span> Выберите тип кухни</div>
                    <div className="poll-content__element uk-grid uk-grid-small uk-child-width-1-3@m uk-child-width-1-2@s  uk-child-width-1-2" data-uk-grid>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step2-2" defaultValue="Линейная" /><img src="/assets/images/poll2/step2-1.jpg" alt />Линейная</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step2-2" defaultValue="Г-образная" /><img src="/assets/images/poll2/step2-2.jpg" alt />Г-образная</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step2-2" defaultValue="П-образная" /><img src="/assets/images/poll2/step2-3.jpg" alt />П-образная</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step2-2" defaultValue="Параллельно" /><img src="/assets/images/poll2/step2-4.jpg" alt />Параллельно</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step2-2" defaultValue="G-образная" /><img src="/assets/images/poll2/step2-5.jpg" alt />G-образная</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step2-2" defaultValue="С островом" /><img src="/assets/images/poll2/step2-6.jpg" alt />С островом</label></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane step-content" id="step-3">
                  <div className="poll__content poll-content">
                    <div className="poll-content__title"><span><b>3</b>/9</span> Выберите тип фасадов</div>
                    <div className="poll-content__element uk-grid uk-grid-small uk-child-width-1-3@m uk-child-width-1-2@s  uk-child-width-1-2" data-uk-grid>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step3-2" defaultValue="Пленка" /><img src="/assets/images/poll2/step3-1.jpg" alt />Пленка</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step3-2" defaultValue="Пластик" /><img src="/assets/images/poll2/step3-2.jpg" alt />Пластик</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step3-2" defaultValue="Эмаль" /><img src="/assets/images/poll2/step3-3.jpg" alt />Эмаль</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step3-2" defaultValue="Акрил" /><img src="/assets/images/poll2/step3-4.jpg" alt />Акрил</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step3-2" defaultValue="Шпон" /><img src="/assets/images/poll2/step3-5.jpg" alt />Шпон</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step3-2" defaultValue="Массив" /><img src="/assets/images/poll2/step3-6.jpg" alt />Массив</label></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane step-content" id="step-4">
                  <div className="poll__content poll-content">
                    <div className="poll-content__title"><span><b>4</b>/9</span> Выберите материал столешницы</div>
                    <div className="poll-content__element uk-grid uk-grid-small uk-child-width-1-4@m uk-child-width-1-2@s uk-child-width-1-2" data-uk-grid>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step4-2" defaultValue="Массив дерева" /><img src="/assets/images/poll2/step4-1.jpg" alt />Массив дерева</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step4-2" defaultValue="ЛДСП" /><img src="/assets/images/poll2/step4-2.jpg" alt />ЛДСП</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step4-2" defaultValue="Нержавеющая сталь" /><img src="/assets/images/poll2/step4-3.jpg" alt />Нержавеющая сталь</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step4-2" defaultValue="Натуральный/искуственный камень" /><img src="/assets/images/poll2/step4-4.jpg" alt />Натуральный/искуственный камень</label></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane step-content" id="step-5">
                  <div className="poll__content poll-content">
                    <div className="poll-content__title"><span><b>5</b>/9</span> Выберите материал мойки</div>
                    <div className="poll-content__element uk-grid uk-grid-small uk-child-width-1-3@m uk-child-width-1-2@s uk-child-width-1-2@s" data-uk-grid>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step5-2" defaultValue="Нержавеющая сталь" /><img src="/assets/images/poll2/step5-1.jpg" alt />Нержавеющая сталь</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step5-2" defaultValue="Камень" /><img src="/assets/images/poll2/step5-2.jpg" alt />Камень</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step5-2" defaultValue="Композит (искусственный камень)" /><img src="/assets/images/poll2/step5-3.jpg" alt />Композит (искусственный камень)</label></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane step-content" id="step-6">
                  <div className="poll__content poll-content">
                    <div className="poll-content__title"><span><b>6</b>/9</span> Выберите материал фартука</div>
                    <div className="poll-content__element uk-grid uk-grid-small uk-child-width-1-4@m uk-child-width-1-2@s uk-child-width-1-2" data-uk-grid>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step6-2" defaultValue="Искусственный камень" /><img src="/assets/images/poll2/step6-1.jpg" alt />Искусственный камень</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step6-2" defaultValue="МДФ" /><img src="/assets/images/poll2/step6-2.jpg" alt />МДФ</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step6-2" defaultValue="Керамическая плитка" /><img src="/assets/images/poll2/step6-3.jpg" alt />Керамическая плитка</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step6-2" defaultValue="Без фартука" /><img src="/assets/images/poll2/step6-4.jpg" alt />Без фартука</label></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane step-content" id="step-7">
                  <div className="poll__content poll-content">
                    <div className="poll-content__title"><span><b>7</b>/9</span> Когда Вы планируете установку кухни?</div>
                    <div className="poll-content__element uk-container-small uk-margin-auto uk-grid uk-grid-small uk-child-width-1-2@m uk-child-width-1-2@s uk-child-width-1-1" data-uk-grid>
                      <div><label><input className="uk-radio" type="radio" name="step7-2" defaultValue="В течение 1 месяца" />В течение 1 месяца</label></div>
                      <div><label><input className="uk-radio" type="radio" name="step7-2" defaultValue="Через 1-2 месяца" />Через 1-2 месяца</label></div>
                      <div><label><input className="uk-radio" type="radio" name="step7-2" defaultValue="Через 3-5 месяцев" />Через 3-5 месяцев</label></div>
                      <div><label><input className="uk-radio" type="radio" name="step7-2" defaultValue="Более, чем через 6 месяцев" />Более, чем через 6 месяцев</label></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane step-content" id="step-8">
                  <div className="poll__content poll-content">
                    <div className="poll-content__title"><span><b>8</b>/9</span> Какой ваш планируемый бюджет?</div>
                    <div className="poll-content__element uk-container-small uk-margin-auto uk-grid uk-grid-small uk-child-width-1-2@s" data-uk-grid>
                      <div><label><input className="uk-radio" type="radio" name="step8-2" defaultValue="до 100 000 руб." />до 100 000 руб.</label></div>
                      <div><label><input className="uk-radio" type="radio" name="step8-2" defaultValue="100 000 - 150 000 руб." />100 000 - 150 000 руб.</label></div>
                      <div><label><input className="uk-radio" type="radio" name="step8-2" defaultValue="150 000 - 200 000 руб." />150 000 - 200 000 руб.</label></div>
                      <div><label><input className="uk-radio" type="radio" name="step8-2" defaultValue="от 200 000 руб." />от 200 000 руб.</label></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane step-content" id="step-9">
                  <div className="poll__content poll-content poll-finish">
                    <div className="js-step-1">
                      <div className="poll-content__title"><span><b>9</b>/9</span> Укажите номер телефона, на который Вам выслать расчет проекта кухни</div>
                      <div className="poll-content__element uk-container-small uk-margin-auto uk-grid uk-grid-small uk-child-width-1-2@s" data-uk-grid>
                        <div><label><input className="uk-input" type="text" name="name" placeholder="Ваше имя" required /></label></div>
                        <div><label><input className="uk-input" type="text" name="phone" placeholder="+7 (___) __-__-__" required /></label></div>
                        <div><button className="uk-button uk-width-1-1" type="submit">Отправить заявку</button></div>
                        <div>
                          <div className="politic uk-margin-top"><span>Нажимая кнопку, вы соглашаетесь с <br /><a href="#privacy-policy" data-uk-toggle>условиями политики конфиденциальности</a></span></div>
                        </div>
                      </div>
                    </div>
                    <div className="js-step-2">
                      <div className="section-title">
                        <h3>Благодарим<br /> за Вашу заявку</h3>
                        <p>Мы свяжемся с Вами в ближайшее время</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section className="materials" id="materials">
    <div className="uk-container uk-section-large">
      <h3 className="section-title">Только качественные материалы<small>популярных европейских производителей</small></h3>
      <div data-uk-slider>
        <div className="uk-position-relative">
          <div className="uk-slider-container uk-light">
            <ul className="uk-slider-items uk-child-width-1-1 uk-text-center uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l">
              <li><img src="/assets/images/materials-1.jpg" alt /></li>
              <li><img src="/assets/images/materials-2.jpg" alt /></li>
              <li><img src="/assets/images/materials-3.jpg" alt /></li>
              <li><img src="/assets/images/materials-4.jpg" alt /></li>
              <li><img src="/assets/images/materials-5.jpg" alt /></li>
              <li><img src="/assets/images/materials-6.jpg" alt /></li>
              <li><img src="/assets/images/materials-7.jpg" alt /></li>
            </ul>
          </div>
          <div className="uk-visible@l"><a className="uk-position-center-left-out uk-position-small" href="#" uk-slidenav-previous uk-slider-item="previous" /><a className="uk-position-center-right-out uk-position-small" href="#" uk-slidenav-next uk-slider-item="next" /></div>
        </div>
        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin uk-hidden@l" />
      </div>
    </div>
  </section>
  <section className="other-service" id="other-service">
    <div hidden className="uk-container uk-section">
      <h3 className="section-title">Еще у нас можете заказать мебель</h3>
      <ul className="uk-switcher-nav uk-flex-center uk-subnav uk-subnav-pill uk-margin-medium-bottom" data-uk-switcher="animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium; swiping:false">
        <li><a href="#">В детскую</a></li>
        <li><a href="#">В гостиную</a></li>
        <li><a href="#">В прихожую</a></li>
        <li><a href="#">В спальню</a></li>
      </ul>
      <ul className="uk-switcher">
        <li>
          <div data-uk-slider>
            <div className="uk-position-relative">
              <div className="uk-slider-container">
                <ul className="uk-slider-items uk-child-width-1-1">
                  <li>
                    <div className="uk-card uk-card-default uk-grid-collapse uk-margin uk-child-width-1-2@s" uk-grid>
                      <div className="uk-card-media-left uk-cover-container"><img src="/assets/images/other-services-1.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
                      <div>
                        <div className="uk-card-body">
                          <h4 className="uk-card-title">Наши дизайнеры с нуля разработают дизайн-проект:</h4>
                          <ul>
                            <li>Учтут особенности и интерьер Вашего помещения</li>
                            <li>Помогут с выбором функционального наполнения</li>
                          </ul><a className="uk-button" href="#top" data-uk-scroll>Получить дизайн-проект</a></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="uk-card uk-card-default uk-grid-collapse uk-margin uk-child-width-1-2@s" uk-grid>
                      <div className="uk-card-media-left uk-cover-container"><img src="/assets/images/other-services-1.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
                      <div>
                        <div className="uk-card-body">
                          <h4 className="uk-card-title">Наши дизайнеры с нуля разработают дизайн-проект:</h4>
                          <ul>
                            <li>Учтут особенности и интерьер Вашего помещения</li>
                            <li>Помогут с выбором функционального наполнения</li>
                          </ul><a className="uk-button" href="#top" data-uk-scroll>Получить дизайн-проект</a></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="uk-card uk-card-default uk-grid-collapse uk-margin uk-child-width-1-2@s" uk-grid>
                      <div className="uk-card-media-left uk-cover-container"><img src="/assets/images/other-services-1.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
                      <div>
                        <div className="uk-card-body">
                          <h4 className="uk-card-title">Наши дизайнеры с нуля разработают дизайн-проект:</h4>
                          <ul>
                            <li>Учтут особенности и интерьер Вашего помещения</li>
                            <li>Помогут с выбором функционального наполнения </li>
                          </ul><a className="uk-button" href="#top" data-uk-scroll>Получить дизайн-проект</a></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="uk-visible@m"><a className="uk-position-center-left-out" href="#" uk-slidenav-previous uk-slider-item="previous" /><a className="uk-position-center-right-out" href="#" uk-slidenav-next uk-slider-item="next" /></div>
            </div>
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin uk-hidden@m" />
          </div>
        </li>
        <li>
          <div data-uk-slider>
            <div className="uk-position-relative">
              <div className="uk-slider-container">
                <ul className="uk-slider-items uk-child-width-1-1">
                  <li>
                    <div className="uk-card uk-card-default uk-grid-collapse uk-margin uk-child-width-1-2@s" uk-grid>
                      <div className="uk-card-media-left uk-cover-container"><img src="/assets/images/other-services-2.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
                      <div>
                        <div className="uk-card-body">
                          <h4 className="uk-card-title">Наши дизайнеры с нуля разработают дизайн-проект:</h4>
                          <ul>
                            <li>Учтут особенности и интерьер Вашего помещения</li>
                            <li>Помогут с выбором функционального наполнения </li>
                          </ul><a className="uk-button" href="#top" data-uk-scroll>Получить дизайн-проект</a></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="uk-card uk-card-default uk-grid-collapse uk-margin uk-child-width-1-2@s" uk-grid>
                      <div className="uk-card-media-left uk-cover-container"><img src="/assets/images/other-services-2.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
                      <div>
                        <div className="uk-card-body">
                          <h4 className="uk-card-title">Наши дизайнеры с нуля разработают дизайн-проект:</h4>
                          <ul>
                            <li>Учтут особенности и интерьер Вашего помещения</li>
                            <li>Помогут с выбором функционального наполнения </li>
                          </ul><a className="uk-button" href="#top" data-uk-scroll>Получить дизайн-проект</a></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="uk-card uk-card-default uk-grid-collapse uk-margin uk-child-width-1-2@s" uk-grid>
                      <div className="uk-card-media-left uk-cover-container"><img src="/assets/images/other-services-2.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
                      <div>
                        <div className="uk-card-body">
                          <h4 className="uk-card-title">Наши дизайнеры с нуля разработают дизайн-проект:</h4>
                          <ul>
                            <li>Учтут особенности и интерьер Вашего помещения</li>
                            <li>Помогут с выбором функционального наполнения </li>
                          </ul><a className="uk-button" href="#top" data-uk-scroll>Получить дизайн-проект</a></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="uk-visible@s"><a className="uk-position-center-left-out" href="#" uk-slidenav-previous uk-slider-item="previous" /><a className="uk-position-center-right-out" href="#" uk-slidenav-next uk-slider-item="next" /></div>
            </div>
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin uk-hidden@s" />
          </div>
        </li>
        <li>
          <div data-uk-slider>
            <div className="uk-position-relative">
              <div className="uk-slider-container">
                <ul className="uk-slider-items uk-child-width-1-1">
                  <li>
                    <div className="uk-card uk-card-default uk-grid-collapse uk-margin uk-child-width-1-2@s" uk-grid>
                      <div className="uk-card-media-left uk-cover-container"><img src="/assets/images/other-services-3.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
                      <div>
                        <div className="uk-card-body">
                          <h4 className="uk-card-title">Наши дизайнеры с нуля разработают дизайн-проект:</h4>
                          <ul>
                            <li>Учтут особенности и интерьер Вашего помещения</li>
                            <li>Помогут с выбором функционального наполнения </li>
                          </ul><a className="uk-button" href="#top" data-uk-scroll>Получить дизайн-проект</a></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="uk-card uk-card-default uk-grid-collapse uk-margin uk-child-width-1-2@s" uk-grid>
                      <div className="uk-card-media-left uk-cover-container"><img src="/assets/images/other-services-3.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
                      <div>
                        <div className="uk-card-body">
                          <h4 className="uk-card-title">Наши дизайнеры с нуля разработают дизайн-проект:</h4>
                          <ul>
                            <li>Учтут особенности и интерьер Вашего помещения</li>
                            <li>Помогут с выбором функционального наполнения</li>
                          </ul><a className="uk-button" href="#top" data-uk-scroll>Получить дизайн-проект</a></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="uk-card uk-card-default uk-grid-collapse uk-margin uk-child-width-1-2@s" uk-grid>
                      <div className="uk-card-media-left uk-cover-container"><img src="/assets/images/other-services-3.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
                      <div>
                        <div className="uk-card-body">
                          <h4 className="uk-card-title">Наши дизайнеры с нуля разработают дизайн-проект:</h4>
                          <ul>
                            <li>Учтут особенности и интерьер Вашего помещения</li>
                            <li>Помогут с выбором функционального наполнения</li>
                          </ul><a className="uk-button" href="#top" data-uk-scroll>Получить дизайн-проект</a></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="uk-visible@s"><a className="uk-position-center-left-out" href="#" uk-slidenav-previous uk-slider-item="previous" /><a className="uk-position-center-right-out" href="#" uk-slidenav-next uk-slider-item="next" /></div>
            </div>
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin uk-hidden@s" />
          </div>
        </li>
        <li>
          <div data-uk-slider>
            <div className="uk-position-relative">
              <div className="uk-slider-container">
                <ul className="uk-slider-items uk-child-width-1-1">
                  <li>
                    <div className="uk-card uk-card-default uk-grid-collapse uk-margin uk-child-width-1-2@s" uk-grid>
                      <div className="uk-card-media-left uk-cover-container"><img src="/assets/images/other-services-4.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
                      <div>
                        <div className="uk-card-body">
                          <h4 className="uk-card-title">Наши дизайнеры с нуля разработают дизайн-проект:</h4>
                          <ul>
                            <li>Учтут особенности и интерьер Вашего помещения</li>
                            <li>Помогут с выбором функционального наполнения</li>
                          </ul><a className="uk-button" href="#top" data-uk-scroll>Получить дизайн-проект</a></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="uk-card uk-card-default uk-grid-collapse uk-margin uk-child-width-1-2@s" uk-grid>
                      <div className="uk-card-media-left uk-cover-container"><img src="/assets/images/other-services-4.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
                      <div>
                        <div className="uk-card-body">
                          <h4 className="uk-card-title">Наши дизайнеры с нуля разработают дизайн-проект:</h4>
                          <ul>
                            <li>Учтут особенности и интерьер Вашего помещения</li>
                            <li>Помогут с выбором функционального наполнения </li>
                          </ul><a className="uk-button" href="#top" data-uk-scroll>Получить дизайн-проект</a></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="uk-card uk-card-default uk-grid-collapse uk-margin uk-child-width-1-2@s" uk-grid>
                      <div className="uk-card-media-left uk-cover-container"><img src="/assets/images/other-services-4.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
                      <div>
                        <div className="uk-card-body">
                          <h4 className="uk-card-title">Наши дизайнеры с нуля разработают дизайн-проект:</h4>
                          <ul>
                            <li>Учтут особенности и интерьер Вашего помещения</li>
                            <li>Помогут с выбором функционального наполнения</li>
                          </ul><a className="uk-button" href="#top" data-uk-scroll>Получить дизайн-проект</a></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="uk-visible@s"><a className="uk-position-center-left-out" href="#" uk-slidenav-previous uk-slider-item="previous" /><a className="uk-position-center-right-out" href="#" uk-slidenav-next uk-slider-item="next" /></div>
            </div>
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin uk-hidden@s" />
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section className="about" id="about">
    <div className="uk-container uk-section">
      <h3 className="section-title">Мебель без риска и головной<br /> боли от производителя</h3>
      <div className="about__box uk-margin uk-child-width-1-2@s uk-flex-middle" uk-grid>
        <div className="uk-flex-last@s"><img src="/assets/images/director.jpg" alt="Директор" /></div>
        <div>
          <h3>Почему без риска? Рассказывает<br /> директор ООО «IDEAL»:</h3>
          <p>Вашу кухню соберут опытные мастера<br /> на итальянском оборудовании.</p>
          <p>75 из 100 компаний по продаже кухонь —<br /> посредники со своими наценками.</p>
          <p>Мы являемся фабрикой-изготовителем кухонь, <br /> поэтому у нас цены в среднем ниже рынка на 12%.<br /> Кухни изготавливаем от 7 дней, так как<br /> используем самое современное оборудование.</p>
        </div>
      </div>
      <div className="about__box uk-margin uk-child-width-1-2@s uk-flex-middle" uk-grid>
        <div><img src="/assets/images/production.jpg" alt /></div>
        <div>
          <h3>Гарантия качества</h3>
          <p>Чтобы Вы не сомневались в подлинности и качестве<br /> моих кухонь, я лично принимаю объекты. Я лично<br /> отвечаю за качество и даю Вам гарантию 2 года<br /> на всю нашу продукцию!</p>
          <div className="director-info">
            <div className="director-info__left">
              <p>Сергей Семёнов<small>директор компании «IDEAL»</small></p>{/*<a href="mailto:centrdiz@list.ru">centrdiz@list.ru</a></div>*/}
              <div className="director-info__right"><img src="/assets/images/derector-signature.png" alt="Подпись директора" /></div>
            </div>
          </div>
        </div>
      </div>
    </div></section>
  <section className="designer-gager" id="designer-gager">
    <div className="uk-section uk-container">
      <div className="uk-grid uk-child-width-1-2@m" data-uk-grid>
        <div>
          <div className="designer-gager__text">
            <h3 className="designer-gager__title"><span>Почему</span><br /> стоит пригласить<br /> дизайнера-замерщика?</h3>
            <ul>
              <li>Правильно снимает размеры</li>
              <li>Посоветует дизайн со вкусом под стиль всей квартиры</li>
              <li>Составит дизайн-проект</li>
              <li>Расскажет, как выгодно использовать пространство</li>
              <li>Посоветует, какой материал подойдет под Ваши запросы</li>
              <li>Покажет образцы фасадов, чтобы Вы их увидели вживую</li>
              <li>Оформит договор в случае заказа</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="designer-gager__callback callback" />
          <div className="designer-gager__form">
            <h3 className="designer-gager__title">Нужна консультация <br /> дизайнера-замерщика?</h3>
            <form id="designer-gager-form" action><input type="hidden" name="formname" defaultValue="Нужна консультация дизайнера-замерщика?" />
              <div className="uk-margin"><input className="uk-input" type="text" name="name" placeholder="Ваше имя" required /></div>
              <div className="uk-margin"><input className="uk-input" type="text" name="phone" placeholder="+7 (___)__ - __ - __" required /></div>
              <div className="uk-margin"><button className="uk-button" type="submit">Узнать стоимость</button></div>
              <div className="uk-margin">
                <div className="politic"><span>Нажимая кнопку, вы соглашаетесь с <br /><a href="#privacy-policy" data-uk-toggle>условиями политики конфиденциальности</a></span></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="projects" id="projects">
    <div className="uk-container">
      <h3 className="section-title">Примеры работ</h3>
    </div>
    <ul className="uk-switcher-nav uk-flex-center uk-subnav uk-subnav-pill uk-margin-medium-bottom" data-uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
      <li><a href="#">Кухни</a></li>
    </ul>
    <ul className="uk-switcher">
      <li>
        <div className="projects-grid uk-grid uk-grid-small uk-child-width-1-5@l uk-child-width-1-5@m uk-child-width-1-3@s  uk-child-width-1-2" data-uk-grid>
          <div><img src="/assets/images/projects/1.jpg" alt="project-1" /></div>
          <div><img src="/assets/images/projects/2.jpg" alt="project-2" /></div>
          <div><img src="/assets/images/projects/3.jpg" alt="project-3" /></div>
          <div><img src="/assets/images/projects/4.jpg" alt="project-4" /></div>
          <div><img src="/assets/images/projects/5.jpg" alt="project-5" /></div>
          <div><img src="/assets/images/projects/6.jpg" alt="project-6" /></div>
          <div><img src="/assets/images/projects/7.jpg" alt="project-7" /></div>
          <div><img src="/assets/images/projects/8.jpg" alt="project-8" /></div>
          <div><img src="/assets/images/projects/9.jpg" alt="project-9" /></div>
          <div><img src="/assets/images/projects/10.jpg" alt="project-10" /></div>
        </div>
      </li>
      <li>
        <div className="projects-grid uk-grid uk-grid-small uk-child-width-1-5@l uk-child-width-1-5@m uk-child-width-1-3@s  uk-child-width-1-2" data-uk-grid>
          <div><img src="/assets/images/projects/1.jpg" alt="project-1" /></div>
          <div><img src="/assets/images/projects/2.jpg" alt="project-2" /></div>
          <div><img src="/assets/images/projects/3.jpg" alt="project-3" /></div>
          <div><img src="/assets/images/projects/4.jpg" alt="project-4" /></div>
          <div><img src="/assets/images/projects/5.jpg" alt="project-5" /></div>
          <div><img src="/assets/images/projects/6.jpg" alt="project-6" /></div>
          <div><img src="/assets/images/projects/7.jpg" alt="project-7" /></div>
          <div><img src="/assets/images/projects/8.jpg" alt="project-8" /></div>
          <div><img src="/assets/images/projects/9.jpg" alt="project-9" /></div>
          <div><img src="/assets/images/projects/10.jpg" alt="project-10" /></div>
        </div>
      </li>
    </ul>
  </section>
  <section className="total-price" id="total-price">
    <div className="uk-section-large uk-container">
      <div className="uk-grid uk-child-width-1-2@m" data-uk-grid>
        <div />
        <div>
          <div className="total-price__callback callback" />
          <div className="total-price__form">
            <h3 className="total-price__title">Хотите узнать итоговую <br /> стоимость работ?</h3>
            <p className="total-price__subtitle">Закажите бесплатный выезд технического <br /> специалиста, который на месте расчитает смену</p>
            <form id="total-price-form" action><input type="hidden" name="formname" defaultValue="Хотите узнать итоговую стоимость работ?" />
              <div className="uk-margin"><input className="uk-input" type="text" name="phone" placeholder="+7 (___)__ - __ - __" required /></div>
              <div className="uk-margin"><button className="uk-button" type="submit">Узнать стоимость</button></div>
              <div className="uk-margin">
                <div className="politic"><span>Нажимая кнопку, вы соглашаетесь с <br /><a href="#privacy-policy" data-uk-toggle>условиями политики конфиденциальности</a></span></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="footer-page" id="contacts">
    <div className="uk-container">
      <div className="footer-page__box">
        <div className="footer-page__logo logo">
          <a className="logo__link" href="/">
            <div className="logo__icon"><img className="logo__img" src="assets/images/logo_icon.png" alt="IDEAL" /></div>
            <div className="logo__text"><span className="logo__company">IDEAL</span><span className="logo__slogan"><span>Производство</span> мебели под заказ</span>
            </div>
          </a>
        </div>
        <div className="footer-page__info">
          <ul>
            <li><span>ООО «IDEAL»</span></li>
            <li><a href="#">г. Тюмень, ул.Закалужская 83, стр.4, эт.4</a></li>
            {/*<li><a href="mailto:centrdiz@list.ru">centrdiz@list.ru</a></li>*/}
            <li><a href="tel:+7+79292694888">+7 (929) 269-48-88</a></li>
          </ul>
        </div>
        <div className="footer-page__developer"><span>Разработано</span><img src="/assets/images/logo-develorep.png" alt="Бизнес мечта" /></div>
      </div>
      <div className="footer-page__copy"><span>Сайт защищен от копирования законом об авторском праве. Штраф от 10 000 руб. до 5 000 000 руб.</span></div>
    </div>
  </footer>
  <div id="offcanvas" uk-offcanvas="overlay: true">
    <div className="uk-offcanvas-bar"><button className="uk-offcanvas-close" type="button" uk-close />
      <h3>Title</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
  <div className="uk-flex-top" id="callback" uk-modal>
    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical"><button className="uk-modal-close-default" type="button" uk-close />
      <div className="js-step-1">
        <h4 className="uk-modal-title">Заказать <br /> обратный звонок</h4>
        <form id="callback-form" action><input type="hidden" name="formname" defaultValue="Заказать обратный звонок" />
          <div className="uk-margin"><input className="uk-input" type="text" name="name" placeholder="Ваше имя" /></div>
          <div className="uk-margin"><input className="uk-input" type="text" name="phone" placeholder="Телефон" /></div>
          <div className="uk-margin"><button className="uk-button" type="submit">Заказать звонок</button></div>
          <div className="uk-margin">
            <div className="politic"><span>Нажимая кнопку, вы соглашаетесь с <br /><a href="#privacy-policy" data-uk-toggle>условиями политики конфиденциальности</a></span></div>
          </div>
        </form>
      </div>
      <div className="js-step-2"><img src="/assets/images/icons/success.png" alt="Спасибо, ваша заявка отправлена" />
        <h3>Спасибо, ваша <br /> заявка отправлена!</h3>
        <p>В ближайшее время мы перезвоним Вам, и проконсультируем по возникшим вопросам!</p>
      </div>
    </div>
  </div>
  <div className="uk-flex-top" id="success" uk-modal>
    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical"><button className="uk-modal-close-default" type="button" uk-close />
      <div className="success"><img src="/assets/images/icons/success.png" alt="Спасибо, ваша заявка отправлена" />
        <h3>Спасибо, ваша <br /> заявка отправлена!</h3>
        <p>В ближайшее время мы перезвоним Вам, и проконсультируем по возникшим вопросам!</p>
      </div>
    </div>
  </div>
  <div className="uk-modal-container" id="privacy-policy" data-uk-modal>
    <div className="uk-modal-dialog uk-modal-body"><button className="uk-modal-close-default" type="button" data-uk-close />
      <h2 className="uk-modal-title uk-text-left">Политика конфиденциальности</h2>
      <div data-uk-overflow-auto>
        <h4>1.Сбор информации</h4>
        <p>Мы собираем информацию, когда вы регистрируетесь на сайте, заходите на свой аккаунт, совершаете покупку, участвуете в акции и/или выходите из аккаунта. Информация включает ваше имя, адрес электронной почты, номер телефона и данные по кредитной
          карте.</p>
        <p>Кроме того, мы автоматически регистрируем ваш компьютер и браузер, включая IP, ПО и аппаратные данные, а также адрес запрашиваемой страницы.</p>
        <h4>2. Использование информации</h4>
        <p>Информация, которую мы получаем от вас, может быть использована, чтобы:</p>
        <ul>
          <li>Сделать услуги соответствующими вашим индивидуальным запросам</li>
          <li>Предложить персонализированную рекламу</li>
          <li>Улучшить наш сайт</li>
          <li>Улучшить систему поддержки пользователей</li>
          <li>Связаться с вами по электронной почте</li>
          <li>Устроить акцию, конкурс или организовать исследование</li>
        </ul>
        <h4>3. Защита личных данных при онлайн-продажах</h4>
        <p>Мы являемся единственным владельцем информации, собранной на данном сайте. Ваши личные данные не будут проданы или каким-либо образом переданы третьим лицам по каким-либо причинам, за исключением необходимых данных для выполнения запроса
          или транзакции, например, при отправке заказа.</p>
        <h4>4. Раскрытие информации третьим лицам</h4>
        <p>Мы не продаем, не обмениваем и не передаем личные данные сторонним компаниям. Это не относится к надежным компаниям, которые помогают нам в работе сайта и ведении бизнеса при условии, что они соглашаются сохранять конфиденциальность информации.</p>
        <p>Мы готовы делиться информацией, чтобы предотвратить преступления или помочь в их расследовании, если речь идет о подозрении на мошенничество, действиях, физически угрожающих безопасности людей, нарушениях правил использования или в случаях,
          когда это предусмотрено законом.</p>
        <p>Неконфиденциальная информация может быть предоставлена другим компаниям в целях маркетинга, рекламы и т.д.</p>
        <h4>5. Защита информации</h4>
        <p>Мы используем различные средства безопасности, чтобы гарантировать сохранность ваших личных данных. К вашим услугам самое современное шифрование. VpnMentor также защищает ваши данные в режиме оффлайн. Только те сотрудники, которые работают
          с конкретным заданием (например, техническая поддержка или проведение оплаты) получают доступ к личным данным. Сервера и компьютеры, на которых записана конфиденциальная информация, находятся в безопасном окружении.</p>
        <p>Использование файлов «cookie»</p>
        <p>Наши файлы «cookie» используются для улучшения доступа к сайту и определения повторных посещений. Кроме того, они позволяют отследить наиболее интересующие запросы. Файлы «cookie» не передают никакую конфиденциальную информацию.</p>
        <h4>6. Отказ от подписки</h4>
        <p>Мы используем электронную почту, чтобы предоставить вам информацию по вашему заказу, новостям компании, информации по продуктам и т.д. Если вы желаете отказаться от подписки, в каждом письме даны подробные инструкции, как вы можете это
          сделать.</p>
        <h4>7. Согласие</h4>
        <p>Пользуясь услугами нашего сайта, вы автоматически соглашаетесь с нашей политикой конфиденциальности.</p>
      </div>
    </div>
  </div>
</div>