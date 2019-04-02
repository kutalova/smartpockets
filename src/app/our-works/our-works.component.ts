import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-our-works',
    templateUrl: './our-works.component.html',
    styleUrls: ['./our-works.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class OurWorksComponent implements OnInit {
    images = [
        {src: '../../assets/img/slider-photos/craft.jpg', big_src: '../../assets/img/slider-photos/big_craft.jpg', type: 'craft'},
        {src: '../../assets/img/slider-photos/banana_1.jpg', big_src: '../../assets/img/slider-photos/big_banana_1.jpg', type: 'banana'},
        {src: '../../assets/img/slider-photos/banana_2.jpg', big_src: '../../assets/img/slider-photos/big_banana_2.jpg', type: 'banana'},
        {src: '../../assets/img/slider-photos/banana_3.jpg', big_src: '../../assets/img/slider-photos/big_banana_3.jpg', type: 'banana'},
        {src: '../../assets/img/slider-photos/banana_4.jpg', big_src: '../../assets/img/slider-photos/big_banana_4.jpg', type: 'banana'},
        {src: '../../assets/img/slider-photos/paper_1.jpg', big_src: '../../assets/img/slider-photos/big_paper_1.jpg', type: 'paper'},
        {src: '../../assets/img/slider-photos/paper_2.jpg', big_src: '../../assets/img/slider-photos/big_paper_2.jpg', type: 'paper'},
        {src: '../../assets/img/slider-photos/paper_3.jpg', big_src: '../../assets/img/slider-photos/big_paper_3.jpg', type: 'paper'}
    ];
    slideConfig = {
        slidesToShow: 5,
        slidesToScroll: 2,
        dots: true,
        arrows: false
    };

    constructor() {
    }

    ngOnInit() {
    }
}
