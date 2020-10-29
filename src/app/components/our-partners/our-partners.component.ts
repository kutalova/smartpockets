import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-our-partners',
    templateUrl: './our-partners.component.html',
    styleUrls: ['./our-partners.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class OurPartnersComponent {
    slides = [
        {img: '../../assets/img/partners/icetory.png', alt: 'Icetory'},
        {img: '../../assets/img/partners/benia.png', alt: 'Benya Zubrik'},
        {img: '../../assets/img/partners/bla.png', alt: 'Bla bla kids'},
        {img: '../../assets/img/partners/madison.png', alt: 'Madison'},
        {img: '../../assets/img/partners/omma.png', alt: 'Omma design'},
        {img: '../../assets/img/partners/rokova.png', alt: 'Rokova'},
        {img: '../../assets/img/partners/small.png', alt: 'Small me'},
        {img: '../../assets/img/partners/tiamo.png', alt: 'Ti amo'},
        {img: '../../assets/img/partners/tochka.png', alt: 'Точка здоровья'},
        {img: '../../assets/img/partners/finik.png', alt: 'Финик'},
        {img: '../../assets/img/partners/frozen.png', alt: 'Frozen Dozen'},
        {img: '../../assets/img/partners/face.png', alt: 'Face'},
        {img: '../../assets/img/partners/shabo.png', alt: 'Шабо'},
        {img: '../../assets/img/partners/BelenkayaPhLogo.png', alt: 'Belenkaia'},
        {img: '../../assets/img/partners/doba.png', alt: 'doba'},
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
        slidesToShow: 6, slidesToScroll: 6, arrows: true, dots: true, centerMode: false, responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },

        ]
    };

}
