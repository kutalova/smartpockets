import {ColourEnum, PacketEnum, PacketTypeEnum, PolyethyleneTypeEnum, PrintTypeEnum, SidesEnum} from '../enums/calculation-item.enum';

export interface PacketCalculationItem {
  packet?: PacketEnum,
  type?: PacketTypeEnum,
  polyType?: PolyethyleneTypeEnum[],
  printType?: PrintTypeEnum,
  size?: string,
  density?: string,
  copies?: string[],
  colour?: ColourEnum,
  colourNumber?: string,
  sides?: SidesEnum[]
}

// size_banana = ['15*20', '20*30', '24*40', '25*35', '30*40', '40*40', '40*50', '48*40', '50*60', '57*40', '60*70', '69*50'];
// size_mayka = ['15*22', '20*35', '20*40', '28*48', '30*48', '35*57', '40*69', '45*69', '40*57'];
// size_petlia = ['30*40', '40*50', '50*60', '60*70'];
// density_mayka = ['7 мкм', '10 мкм', '15 мкм', '20 мкм', '25 мкм', '30 мкм', '35 мкм', '40 мкм', '45 мкм', '50 мкм'];
// density_banana = ['40 мкм', '45 мкм', '50 мкм',
//   '55 мкм', '60 мкм', '65 мкм', '70 мкм',
//   '75 мкм', '80 мкм', '85 мкм', '90 мкм', '100 мкм'];
// density_petlia = ['50 мкм', '60 мкм', '70 мкм', '80 мкм', '90 мкм', '100 мкм'];
// copies = ['100', '200', '300', '500', '1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'];
// copies_petlia = ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'];
// colour = ['белый', 'цветной', 'прозрачный'];
// colour_count = [1, 2, 3, 4, 5, 6, 7, 8];
// sides = ['Односторонний', 'Двусторонний'];
