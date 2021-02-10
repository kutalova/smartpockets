import {PacketCalculationItem} from '../interfaces/calculation-item.interface';
import {ColourEnum, PacketEnum, PacketTypeEnum, PolyethyleneTypeEnum, PrintTypeEnum, SidesEnum} from '../enums/calculation-item.enum';

export const CalculationSilkItems: PacketCalculationItem[] = [

// SILK COURRIER

  {
    printType: PrintTypeEnum.SILK,
    packet: PacketEnum.BIO,
    type: PacketTypeEnum.COURRIER,
    colour: ColourEnum.MILK,
    copies: ['200', '300', '400', '500', '600', '700', '800', '900', '1000', '2000', 'other'],
    density: '50 мкм',
    size: '12,5*19 (А5)',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    printType: PrintTypeEnum.SILK,
    packet: PacketEnum.BIO,
    type: PacketTypeEnum.COURRIER,
    colour: ColourEnum.MILK,
    copies: ['200', '300', '400', '500', '600', '700', '800', '900', '1000', '2000', 'other'],
    density: '50 мкм',
    size: '19*24 (А6)',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    printType: PrintTypeEnum.SILK,
    packet: PacketEnum.BIO,
    type: PacketTypeEnum.COURRIER,
    colour: ColourEnum.MILK,
    copies: ['200', '300', '400', '500', '600', '700', '800', '900', '1000', '2000', 'other'],
    density: '50 мкм',
    size: '24*32(А4)',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    printType: PrintTypeEnum.SILK,
    packet: PacketEnum.BIO,
    type: PacketTypeEnum.COURRIER,
    colour: ColourEnum.MILK,
    copies: ['200', '300', '400', '500', '600', '700', '800', '900', '1000', '2000', 'other'],
    density: '50 мкм',
    size: '30*40 (А3) см',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    printType: PrintTypeEnum.SILK,
    packet: PacketEnum.BIO,
    type: PacketTypeEnum.COURRIER,
    colour: ColourEnum.MILK,
    copies: ['200', '300', '400', '500', '600', '700', '800', '900', '1000', '2000', 'other'],
    density: '50 мкм',
    size: '38*48 (А3+)',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    printType: PrintTypeEnum.SILK,
    packet: PacketEnum.BIO,
    type: PacketTypeEnum.COURRIER,
    colour: ColourEnum.MILK,
    copies: ['200', '300', '400', '500', '600', '700', '800', '900', '1000', '2000', 'other'],
    density: '50 мкм',
    size: '60*40 см(А2)',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },

// SILK PETLIA
  {
    printType: PrintTypeEnum.SILK,
    packet: PacketEnum.NORMAL,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    printType: PrintTypeEnum.SILK,
    packet: PacketEnum.NORMAL,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '60 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    printType: PrintTypeEnum.SILK,
    packet: PacketEnum.NORMAL,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    printType: PrintTypeEnum.SILK,
    packet: PacketEnum.NORMAL,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '60 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },

// SILK MAYKA

  {
    printType: PrintTypeEnum.SILK,
    packet: PacketEnum.BIO,
    type: PacketTypeEnum.MAYKA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '30*57',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.MAYKA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '30*48',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.MAYKA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '30*57',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.MAYKA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '40*57',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },

// BIO SILK WHITE BANANA
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '30*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '40*50',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },

// NORMAL SILK WHITE BANANA
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '20*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '20*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '30*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '40*50',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '58*48',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '60 мкм',
    size: '60*60',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },

// NORMAL SILK TRANS BANANA

  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '20*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '30*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '60 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '60 мкм',
    size: '40*50',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },

// BIO SILK TRANS BANANA
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '60 мкм',
    size: '40*50',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '60 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '30*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.SILK,
    type: PacketTypeEnum.BANANA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2 000', '3 000', '4 000', '5 000', '7 000'],
    density: '50 мкм',
    size: '20*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }
];
