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
        'Відмінна якість, доступні ціни, швидка доставка. Спасибі, дуже задоволені якістю продукції і послуг в цілому! Замовляємо вже 3-ю поставку для мережі магазинів т / м «Giulia" в Одесі. Дякуємо компанії за співпрацю!',
      name: 'Мережа магазинів Giulia'
    },
    {
      img: '../../assets/img/user-images/palmira.png',
      text:
        'Співпрацюємо з вами досить давно і дуже задоволені сервісом. Відмінні пропозиції за прийнятні гроші. Нещодавно спробували нові еко пакети і залишилися дуже задоволені. Дякую за співрпрацю!',
      name: 'Юрий Гребенюк &mdash; Керівник лабораторії «Пальмира»'
    },
    {
      img: '../../assets/img/user-images/mazurkewicz.png',
      text: 'Працюємо з компанією вже кілька років і можемо відзначити найголовніші якості компанії: <br/>професіоналізм, виконання поставлених завдань, якість продукції, терміни виготовлення та все це за дуже вигідними цінами. З усією відповідальністю рекомендуємо.',
      name:
        'Максим Мазуркевич &mdash; Керівник відділу маркетингу Інтернет магазину itsell.ua'
    },
    {
      img: '../../assets/img/user-images/romanova.png',
      text: 'Работаю с данной компанией уже несколько лет. Очень довольна нашим сотрудничеством, изготовление в сроки и даже быстрее, отличное качество и, конечно же, внимательное и чуткое отношение к клиентам. Спасибо Вам!',
      name:
        'Ангелина Романова &mdash; маркетолог компанії, ООО Стройсфера Групп'
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
