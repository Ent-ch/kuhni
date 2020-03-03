import React from "react"
import { LazyLoadImage as ImgL } from 'react-lazy-load-image-component';

import Catalog from './kuhni';
import Header from './header';
import Examples from './examples';

export default () => (
<>
  <Header />
  <section className="advantages" id="advantages">
    <div className="uk-container uk-section">
      <div className="uk-grid uk-child-width-1-6@l uk-child-width-1-3@s uk-child-width-1-2" data-uk-grid>
        <div>
          <div className="advantages__item"><ImgL className="advantages__icon" src="/assets/images/icons/advantages-1.png" alt="Бесплатный замер по Тюмени" /><span className="advantages__text">Бесплатный замер по Тюмени</span></div>
        </div>
        <div>
          <div className="advantages__item"><ImgL className="advantages__icon" src="/assets/images/icons/advantages-2.png" alt="От 3 рабочих дней на изготовление" /><span className="advantages__text">От 7 рабочих дней на изготовление</span></div>
        </div>
        <div>
          <div className="advantages__item"><ImgL className="advantages__icon" src="/assets/images/icons/advantages-3.png" alt="1 день - бесплатная доставка и сборка" /><span className="advantages__text">1 день - бесплатная доставка и сборка</span></div>
        </div>
        <div>
          <div className="advantages__item"><ImgL className="advantages__icon" src="/assets/images/icons/advantages-4.png" alt="Официальная гарантия 10 лет" /><span className="advantages__text">Официальная гарантия 2 года</span></div>
        </div>
        <div>
          <div className="advantages__item"><ImgL className="advantages__icon" src="/assets/images/icons/advantages-5.png" alt="Свое производство с опытом 15 лет" /><span className="advantages__text">Свое производство с опытом 10 лет</span></div>
        </div>
        <div>
          <div className="advantages__item"><ImgL className="advantages__icon" src="/assets/images/icons/advantages-6.png" alt="рассрочка" /><span className="advantages__text">Гибкая ценовая политика</span></div>
        </div>
      </div>
    </div>
  </section>
  <section className="catalog" id="catalog">
    <Catalog />
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
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step1-2" defaultValue="Классика" /><ImgL src="/assets/images/poll2/step1-1.jpg" alt />Классика</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step1-2" defaultValue="Прованс" /><ImgL src="/assets/images/poll2/step1-2.jpg" alt />Современный</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step1-2" defaultValue="Модерн" /><ImgL src="/assets/images/poll2/step1-3.jpg" alt />Прованс</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step1-2" defaultValue="Неоклассика" /><ImgL src="/assets/images/poll2/step1-4.jpg" alt />Кантри</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step1-2" defaultValue="Кантри" /><ImgL src="/assets/images/poll2/step1-5.jpg" alt />Модерн</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step1-2" defaultValue="Хайтек" /><ImgL src="/assets/images/poll2/step1-6.jpg" alt />Лофт</label></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane step-content" id="step-2">
                  <div className="poll__content poll-content">
                    <div className="poll-content__title"><span><b>2</b>/9</span> Выберите тип кухни</div>
                    <div className="poll-content__element uk-grid uk-grid-small uk-child-width-1-3@m uk-child-width-1-2@s  uk-child-width-1-2" data-uk-grid>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step2-2" defaultValue="Линейная" /><ImgL src="/assets/images/poll2/step2-1.jpg" alt />Линейная</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step2-2" defaultValue="Г-образная" /><ImgL src="/assets/images/poll2/step2-2.jpg" alt />Г-образная</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step2-2" defaultValue="П-образная" /><ImgL src="/assets/images/poll2/step2-3.jpg" alt />П-образная</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step2-2" defaultValue="Параллельно" /><ImgL src="/assets/images/poll2/step2-4.jpg" alt />Параллельно</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step2-2" defaultValue="G-образная" /><ImgL src="/assets/images/poll2/step2-5.jpg" alt />G-образная</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step2-2" defaultValue="С островом" /><ImgL src="/assets/images/poll2/step2-6.jpg" alt />С островом</label></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane step-content" id="step-3">
                  <div className="poll__content poll-content">
                    <div className="poll-content__title"><span><b>3</b>/9</span> Выберите тип фасадов</div>
                    <div className="poll-content__element uk-grid uk-grid-small uk-child-width-1-3@m uk-child-width-1-2@s  uk-child-width-1-2" data-uk-grid>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step3-2" defaultValue="Пленка" /><ImgL src="/assets/images/poll2/step3-1.jpg" alt />Пленка</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step3-2" defaultValue="Пластик" /><ImgL src="/assets/images/poll2/step3-2.jpg" alt />Пластик</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step3-2" defaultValue="Эмаль" /><ImgL src="/assets/images/poll2/step3-3.jpg" alt />Эмаль</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step3-2" defaultValue="Акрил" /><ImgL src="/assets/images/poll2/step3-4.jpg" alt />Акрил</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step3-2" defaultValue="Шпон" /><ImgL src="/assets/images/poll2/step3-5.jpg" alt />Шпон</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step3-2" defaultValue="Массив" /><ImgL src="/assets/images/poll2/step3-6.jpg" alt />Массив</label></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane step-content" id="step-4">
                  <div className="poll__content poll-content">
                    <div className="poll-content__title"><span><b>4</b>/9</span> Выберите материал столешницы</div>
                    <div className="poll-content__element uk-grid uk-grid-small uk-child-width-1-4@m uk-child-width-1-2@s uk-child-width-1-2" data-uk-grid>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step4-2" defaultValue="Массив дерева" /><ImgL src="/assets/images/poll2/step4-1.jpg" alt />Массив дерева</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step4-2" defaultValue="ЛДСП" /><ImgL src="/assets/images/poll2/step4-2.jpg" alt />ЛДСП</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step4-2" defaultValue="Нержавеющая сталь" /><ImgL src="/assets/images/poll2/step4-3.jpg" alt />Нержавеющая сталь</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step4-2" defaultValue="Натуральный/искуственный камень" /><ImgL src="/assets/images/poll2/step4-4.jpg" alt />Натуральный/искуственный камень</label></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane step-content" id="step-5">
                  <div className="poll__content poll-content">
                    <div className="poll-content__title"><span><b>5</b>/9</span> Выберите материал мойки</div>
                    <div className="poll-content__element uk-grid uk-grid-small uk-child-width-1-3@m uk-child-width-1-2@s uk-child-width-1-2@s" data-uk-grid>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step5-2" defaultValue="Нержавеющая сталь" /><ImgL src="/assets/images/poll2/step5-1.jpg" alt />Нержавеющая сталь</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step5-2" defaultValue="Камень" /><ImgL src="/assets/images/poll2/step5-2.jpg" alt />Камень</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step5-2" defaultValue="Композит (искусственный камень)" /><ImgL src="/assets/images/poll2/step5-3.jpg" alt />Композит (искусственный камень)</label></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane step-content" id="step-6">
                  <div className="poll__content poll-content">
                    <div className="poll-content__title"><span><b>6</b>/9</span> Выберите материал фартука</div>
                    <div className="poll-content__element uk-grid uk-grid-small uk-child-width-1-4@m uk-child-width-1-2@s uk-child-width-1-2" data-uk-grid>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step6-2" defaultValue="Искусственный камень" /><ImgL src="/assets/images/poll2/step6-1.jpg" alt />Искусственный камень</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step6-2" defaultValue="МДФ" /><ImgL src="/assets/images/poll2/step6-2.jpg" alt />МДФ</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step6-2" defaultValue="Керамическая плитка" /><ImgL src="/assets/images/poll2/step6-3.jpg" alt />Керамическая плитка</label></div>
                      <div><label className="img"><input className="uk-checkbox" type="radio" name="step6-2" defaultValue="Без фартука" /><ImgL src="/assets/images/poll2/step6-4.jpg" alt />Без фартука</label></div>
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
              <li><ImgL src="/assets/images/materials-1.jpg" alt /></li>
              <li><ImgL src="/assets/images/materials-2.jpg" alt /></li>
              <li><ImgL src="/assets/images/materials-3.jpg" alt /></li>
              <li><ImgL src="/assets/images/materials-4.jpg" alt /></li>
              <li><ImgL src="/assets/images/materials-5.jpg" alt /></li>
              <li><ImgL src="/assets/images/materials-6.jpg" alt /></li>
              <li><ImgL src="/assets/images/materials-7.jpg" alt /></li>
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
                      <div className="uk-card-media-left uk-cover-container"><ImgL src="/assets/images/other-services-1.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
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
                      <div className="uk-card-media-left uk-cover-container"><ImgL src="/assets/images/other-services-1.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
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
                      <div className="uk-card-media-left uk-cover-container"><ImgL src="/assets/images/other-services-1.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
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
                      <div className="uk-card-media-left uk-cover-container"><ImgL src="/assets/images/other-services-2.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
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
                      <div className="uk-card-media-left uk-cover-container"><ImgL src="/assets/images/other-services-2.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
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
                      <div className="uk-card-media-left uk-cover-container"><ImgL src="/assets/images/other-services-2.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
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
                      <div className="uk-card-media-left uk-cover-container"><ImgL src="/assets/images/other-services-3.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
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
                      <div className="uk-card-media-left uk-cover-container"><ImgL src="/assets/images/other-services-3.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
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
                      <div className="uk-card-media-left uk-cover-container"><ImgL src="/assets/images/other-services-3.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
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
                      <div className="uk-card-media-left uk-cover-container"><ImgL src="/assets/images/other-services-4.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
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
                      <div className="uk-card-media-left uk-cover-container"><ImgL src="/assets/images/other-services-4.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
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
                      <div className="uk-card-media-left uk-cover-container"><ImgL src="/assets/images/other-services-4.jpg" alt uk-cover /><canvas width={580} height={420} /></div>
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
        <div className="uk-flex-last@s"><ImgL src="/assets/images/director.jpg" alt="Директор" /></div>
        <div>
          <h3>Почему без риска? Рассказывает<br /> директор ООО «IDEAL»:</h3>
          <p>Вашу кухню соберут опытные мастера<br /> на итальянском оборудовании.</p>
          <p>75 из 100 компаний по продаже кухонь —<br /> посредники со своими наценками.</p>
          <p>Мы являемся фабрикой-изготовителем кухонь, <br /> поэтому у нас цены в среднем ниже рынка на 12%.<br /> Кухни изготавливаем от 7 дней, так как<br /> используем самое современное оборудование.</p>
        </div>
      </div>
      <div className="about__box uk-margin uk-child-width-1-2@s uk-flex-middle" uk-grid>
        <div><ImgL src="/assets/images/production.jpg" alt /></div>
        <div>
          <h3>Гарантия качества</h3>
          <p>Чтобы Вы не сомневались в подлинности и качестве<br /> моих кухонь, я лично принимаю объекты. Я лично<br /> отвечаю за качество и даю Вам гарантию 2 года<br /> на всю нашу продукцию!</p>
          <div className="director-info">
            <div className="director-info__left">
              <p>Сергей Семёнов<small>директор компании «IDEAL»</small></p>{/*<a href="mailto:centrdiz@list.ru">centrdiz@list.ru</a></div>*/}
              <div className="director-info__right"><ImgL src="/assets/images/derector-signature.png" alt="Подпись директора" /></div>
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
  <Examples />
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
            <div className="logo__icon"><ImgL className="logo__img" src="assets/images/logo_icon.png" alt="IDEAL" /></div>
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
        <div className="footer-page__developer"><span>Разработано</span><ImgL src="/assets/images/logo-develorep.png" alt="Бизнес мечта" /></div>
      </div>
      <div className="footer-page__copy"><span>Сайт защищен от копирования законом об авторском праве. Штраф от 10 000 руб. до 5 000 000 руб.</span></div>
    </div>
  </footer>
</>
);
