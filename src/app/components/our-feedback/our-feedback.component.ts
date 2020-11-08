import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-our-feedback',
    templateUrl: './our-feedback.component.html',
    styleUrls: ['./our-feedback.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class OurFeedbackComponent {
    reviews = [
        {
            img: '../../assets/img/user-images/giulia.png',
            text:
                'Отлично качество, доступные цены, быстрая доставка. Спасибо, очень довольны качеством продукции и услуг в целом! Заказываем уже 3-ю поставку для сети магазинов т/м «Giulia” в Одессе. Благодарим компанию за сотрудничество!',
            name: 'Сеть магазинов Giulia'
        },
        {
            img: '../../assets/img/user-images/palmira.png',
            text:
                'Сотрудничаем с вами достаточно давно и очень довольны сервисом. Отличные предложения за приемлемые деньги. Недавно попробовали новые эко пакеты и остались очень довольны. Спасибо за сотрудничество!',
            name: 'Юрий Гребенюк &mdash; Руководитель лаборатории «Пальмира»'
        },
        {
            img: '../../assets/img/user-images/mazurkewicz.png',
            text: 'Работаем с компанией уже несколько лет и можем отметить самые главные качества компании:<br/>профессионализм, выполнение поставленных задач, качество продукции, сроки изготовления и все это по очень выгодным ценам. Со всей ответственностью рекомендуем.',
            name:
                'Максим Мазуркевич &mdash; Руководитель отдела Маркетинга Интернет магазина itsell.ua'
        },
        {
            img: '../../assets/img/user-images/romanova.png',
            text: 'Работаю с данной компанией уже несколько лет. Очень довольна нашим сотрудничеством, изготовление в сроки и даже быстрее, отличное качество и, конечно же, внимательное и чуткое отношение к клиентам. Спасибо Вам!',
            name:
                'Ангелина Романова &mdash; маркетолог компании, ООО Стройсфера Групп'
        }
    ];
    slideConfig = {
        lazyLoad: 'onDemand', slidesToShow: 3, slidesToScroll: 3, dots: false, arrows: true, responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 650,
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