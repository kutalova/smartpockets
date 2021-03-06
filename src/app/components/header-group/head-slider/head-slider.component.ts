import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-head-slider',
  templateUrl: './head-slider.component.html',
  styleUrls: ['./head-slider.component.scss', '../../../shared/styles/icons.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeadSliderComponent implements OnInit {
  slides = [
    {img: '../../assets/img/head-slider-photos/1.jpg', alt: 'slider'},
    {img: '../../assets/img/head-slider-photos/2.jpg', alt: 'slider'},
    {img: '../../assets/img/head-slider-photos/3.jpg', alt: 'slider'},
    {img: '../../assets/img/head-slider-photos/4.jpg', alt: 'slider'},
    {img: '../../assets/img/head-slider-photos/5.jpg', alt: 'slider'},
  ];
  slideConfig = {
    lazyLoad: 'ondemand', slidesToShow: 1, slidesToScroll: 1, centerMode: false, arrows: true, dots: false, autoplay: true,
    autoplaySpeed: 5000
  };

  constructor() {
  }

  ngOnInit() {
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
}
