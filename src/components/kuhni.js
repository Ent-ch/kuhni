import React, { useState } from "react";
import axios from "axios";
import $ from 'jquery';

function initProduct(){
  $('.filter__content > li').hide();
  $('.filter__content > li').slice(0,8).show();
}
// $('.more-products > span').on('click', function(e){
//   console.log('show more');
//   e.preventDefault();
//   var elHidden = $('.filter__content > li:hidden').length;
//   if( elHidden <= 0) {
//     $('.more-products').hide();
//   }
// });
// $('.filter__box .uk-nav a').on('click', function(el){
//   $('.more-products').hide();
// });
// $('.filter__clear .uk-nav a').on('click', function(el){
//   $('.more-products').show();
//   setTimeout(initProduct, 1000);
// });

const showMore = () => {
  console.log('show more');
  $('.filter__content > li:hidden').slice(0, 36).slideDown();
  const elHidden = $('.filter__content > li:hidden').length;
  if( elHidden <= 0) {
    $('.more-products').hide();
  }

};

export default () => {
  const [ htmlList, setHtmlList ] = useState('');

  setTimeout(() => {
    axios.get('/list.html.part')
    .then(response => {
      setHtmlList(response.data);
      setTimeout(() => {
        console.log('Показать больше шкафов');
        // Показать больше шкафов
        initProduct();
      }, 5000);
    });
  }, 1000);

  return (
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
        <div dangerouslySetInnerHTML={{__html: htmlList}} />
        <div className="more-products uk-heading-line uk-text-center" onClick={showMore}><span>Показать еще <i data-uk-icon="icon: grid" /></span></div>
      </div>
    </div>
  )
};
