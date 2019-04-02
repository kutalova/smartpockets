import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-our-partners',
    templateUrl: './our-partners.component.html',
    styleUrls: ['./our-partners.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class OurPartnersComponent implements OnInit {
    slides = [
        {img: '../../assets/img/partners/BelenkayaPhLogo.png', alt: 'Belenkaia'},
        {img: '../../assets/img/partners/doba.png', alt: 'doba'},
        {img: '../../assets/img/partners/eks.png', alt: 'EXC'},
        {img: '../../assets/img/partners/goodfood.png', alt: 'Good Food'},
        {img: '../../assets/img/partners/helenberg.png', alt: 'Helenber'},
        {img: '../../assets/img/partners/isabelle.png', alt: 'Isabelle'},
        {img: '../../assets/img/partners/ITSell.png', alt: 'ITSell'},
        {img: '../../assets/img/partners/julia.png', alt: 'Giulia'},
        {img: '../../assets/img/partners/maersk.png', alt: 'Maersk'},
        {img: '../../assets/img/partners/majoriki.png', alt: 'Мажорики'},
        {img: '../../assets/img/partners/marusja.png', alt: 'Маруся'},
        {img: '../../assets/img/partners/palmira.png', alt: 'Пальмира'},
        {img: '../../assets/img/partners/posh.png', alt: 'Posh'},
        {img: '../../assets/img/partners/SGS.png', alt: 'SGS'},
        {img: '../../assets/img/partners/uspeh.png', alt: 'Успех принт'},
        {
            img: '../../assets/img/partners/stoy_servis-logo.png',
            alt: 'Строй сфера'
        },
        {img: '../../assets/img/partners/Vchechle.png', alt: 'В чехле'},
        {img: '../../assets/img/partners/VR.png', alt: 'Виар'}
    ];
    slideConfig = {
        slidesToShow: 4, slidesToScroll: 3, arrows: false, dots: true, responsive: [
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

    constructor() {
    }

    ngOnInit() {
    }
}
