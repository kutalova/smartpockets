import {productionItemInterface} from '../interfaces/production-item.interface';

export const MainProductsData: productionItemInterface[] = [
  {
    name: 'Пакет с логотипом банан',
    icon: 'url("../../../../assets/img/packets/banana.png")',
    link_to_gallery: '../../../../../assets/img/slider-photos/big_banana_1.jpg',
  }, {
    name: 'Пакет с логотипом майка',
    icon: 'url("../../../../assets/img/packets/mayka.png")',
  },
  {
    name: 'Пакет с логотипом с петлевой ручкой',
    icon: 'url("../../../../assets/img/packets/petlia.png")',
  },
  {
    name: 'Прозрачные пакеты',
    icon: 'url("../../../../assets/img/packets/transparent.png")',
  },
  {
    name: 'Курьерские пакеты',
    icon: 'url("../../../../assets/img/packets/courier.png")',
  }, {
    name: 'Пакет с ZIP застежкой',
    icon: 'url("../../../../assets/img/packets/zip.png")',
  },
];


export const OtherProductsData: productionItemInterface[] = [
  {
    name: 'Пакеты без печати',
    icon: 'url("../../../../assets/img/packets/without_print.png")',
  }, {
    name: 'Бумажные пакеты',
    icon: 'url("../../../../assets/img/packets/paper.png")',
    link_to_gallery: '../../../../../assets/img/slider-photos/big_paper_1.jpg',
  },
  {
    name: 'Крафт пакеты',
    icon: 'url("../../../../assets/img/packets/craft.png")',
    link_to_gallery: '../../../../../assets/img/slider-photos/big_craft.jpg',
  },
  {
    name: 'Эко сумки',
    icon: 'url("../../../../assets/img/packets/eco.png")',
  },
  {
    name: 'Пакеты с готовым принтом',
    icon: 'url("../../../../assets/img/packets/ready_print.png")',
  }, {
    name: 'Пакеты из крахмальной гранулы PLA',
    icon: 'url("../../../../assets/img/packets/pla.png")',
  },
];
