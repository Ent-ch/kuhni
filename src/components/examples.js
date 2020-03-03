import React from "react";
import { LazyLoadImage as ImgL } from 'react-lazy-load-image-component';

export default () => (<section className="projects" id="projects">
  <div className="uk-container">
    <h3 className="section-title">Примеры работ</h3>
  </div>
  <ul className="uk-switcher-nav uk-flex-center uk-subnav uk-subnav-pill uk-margin-medium-bottom" data-uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
    <li><a href="#">Кухни</a></li>
  </ul>
  <ul className="uk-switcher">
    <li>
      <div className="projects-grid uk-grid uk-grid-small uk-child-width-1-5@l uk-child-width-1-5@m uk-child-width-1-3@s  uk-child-width-1-2" data-uk-grid>
        <div><ImgL src="/assets/images/projects/1.jpg" alt="project-1" /></div>
        <div><ImgL src="/assets/images/projects/2.jpg" alt="project-2" /></div>
        <div><ImgL src="/assets/images/projects/3.jpg" alt="project-3" /></div>
        <div><ImgL src="/assets/images/projects/4.jpg" alt="project-4" /></div>
        <div><ImgL src="/assets/images/projects/5.jpg" alt="project-5" /></div>
        <div><ImgL src="/assets/images/projects/6.jpg" alt="project-6" /></div>
        <div><ImgL src="/assets/images/projects/7.jpg" alt="project-7" /></div>
        <div><ImgL src="/assets/images/projects/8.jpg" alt="project-8" /></div>
        <div><ImgL src="/assets/images/projects/9.jpg" alt="project-9" /></div>
        <div><ImgL src="/assets/images/projects/10.jpg" alt="project-10" /></div>
      </div>
    </li>
    <li>
      <div className="projects-grid uk-grid uk-grid-small uk-child-width-1-5@l uk-child-width-1-5@m uk-child-width-1-3@s  uk-child-width-1-2" data-uk-grid>
        <div><ImgL src="/assets/images/projects/1.jpg" alt="project-1" /></div>
        <div><ImgL src="/assets/images/projects/2.jpg" alt="project-2" /></div>
        <div><ImgL src="/assets/images/projects/3.jpg" alt="project-3" /></div>
        <div><ImgL src="/assets/images/projects/4.jpg" alt="project-4" /></div>
        <div><ImgL src="/assets/images/projects/5.jpg" alt="project-5" /></div>
        <div><ImgL src="/assets/images/projects/6.jpg" alt="project-6" /></div>
        <div><ImgL src="/assets/images/projects/7.jpg" alt="project-7" /></div>
        <div><ImgL src="/assets/images/projects/8.jpg" alt="project-8" /></div>
        <div><ImgL src="/assets/images/projects/9.jpg" alt="project-9" /></div>
        <div><ImgL src="/assets/images/projects/10.jpg" alt="project-10" /></div>
      </div>
    </li>
  </ul>
</section>

);
