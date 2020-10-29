import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-our-works',
  templateUrl: './our-works.component.html',
  styleUrls: ['./our-works.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OurWorksComponent {
  images = [
    {src: '../../assets/img/slider-photos/18_copy.jpg', big_src: '../../assets/img/slider-photos/18.jpg'},
    {src: '../../assets/img/slider-photos/19_copy.jpg', big_src: '../../assets/img/slider-photos/19.jpg'},
    {src: '../../assets/img/slider-photos/20_copy.jpg', big_src: '../../assets/img/slider-photos/20.jpg'},
    {src: '../../assets/img/slider-photos/21_copy.jpg', big_src: '../../assets/img/slider-photos/21.jpg'},
    {src: '../../assets/img/slider-photos/craft.jpg', big_src: '../../assets/img/slider-photos/big_craft.jpg', type: 'craft'},
    {src: '../../assets/img/slider-photos/banana_1.jpg', big_src: '../../assets/img/slider-photos/big_banana_1.jpg', type: 'banana'},
    {src: '../../assets/img/slider-photos/banana_4.jpg', big_src: '../../assets/img/slider-photos/big_banana_4.jpg', type: 'banana'},
    {src: '../../assets/img/slider-photos/paper_1.jpg', big_src: '../../assets/img/slider-photos/big_paper_1.jpg', type: 'paper'},
    {src: '../../assets/img/slider-photos/paper_3.jpg', big_src: '../../assets/img/slider-photos/big_paper_3.jpg', type: 'paper'},
    {src: '../../assets/img/slider-photos/1_copy.jpg', big_src: '../../assets/img/slider-photos/1.jpg'},
    {src: '../../assets/img/slider-photos/2_copy.jpg', big_src: '../../assets/img/slider-photos/2.jpg'},
    {src: '../../assets/img/slider-photos/3_copy.jpg', big_src: '../../assets/img/slider-photos/3.jpg'},
    {src: '../../assets/img/slider-photos/4_copy.jpg', big_src: '../../assets/img/slider-photos/4.jpg'},
    {src: '../../assets/img/slider-photos/5_copy.jpg', big_src: '../../assets/img/slider-photos/5.jpg'},
    {src: '../../assets/img/slider-photos/6_copy.jpg', big_src: '../../assets/img/slider-photos/6.jpg'},
    {src: '../../assets/img/slider-photos/7_copy.jpg', big_src: '../../assets/img/slider-photos/7.jpg'},
    {src: '../../assets/img/slider-photos/8_copy.jpg', big_src: '../../assets/img/slider-photos/8.jpg'},
    {src: '../../assets/img/slider-photos/9_copy.jpg', big_src: '../../assets/img/slider-photos/9.jpg'},
    {src: '../../assets/img/slider-photos/10_copy.jpg', big_src: '../../assets/img/slider-photos/10.jpg'},
    {src: '../../assets/img/slider-photos/11_copy.jpg', big_src: '../../assets/img/slider-photos/11.jpg'},
    {src: '../../assets/img/slider-photos/12_copy.jpg', big_src: '../../assets/img/slider-photos/12.jpg'},
    {src: '../../assets/img/slider-photos/13_copy.jpg', big_src: '../../assets/img/slider-photos/13.jpg'},
    {src: '../../assets/img/slider-photos/14_copy.jpg', big_src: '../../assets/img/slider-photos/14.jpg'},
    {src: '../../assets/img/slider-photos/15_copy.jpg', big_src: '../../assets/img/slider-photos/15.jpg'},
    {src: '../../assets/img/slider-photos/16_copy.jpg', big_src: '../../assets/img/slider-photos/16.jpg'},
    {src: '../../assets/img/slider-photos/17_copy.jpg', big_src: '../../assets/img/slider-photos/17.jpg'},
  ];
  slideConfig = {
    lazyLoad: 'progressive',
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: true,
    arrows: true, responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  trackByFn(index, item) {
    return index; // or item.id
  }
}
