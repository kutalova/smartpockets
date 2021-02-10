import {PacketCalculationItem} from '../interfaces/calculation-item.interface';
import {PacketEnum, PacketTypeEnum, PolyethyleneTypeEnum, PrintTypeEnum, ColourEnum, SidesEnum} from '../enums/calculation-item.enum';

export const CalculationFlexPetliaItems: PacketCalculationItem[] = [

  /** FLEX PETLIA

   */
// FLEX BIO WHITE PETLIA
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },

  // FLEX BIO TRANS PETLIA
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  // FLEX BIO COLOUR PETLIA
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.BIO,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },

// FLEX NORMAL WHITE PETLIA
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.WHITE,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },

// FLEX NORMAL TRANS PETLIA
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }, {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.TRANSPARENT,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
// FLEX NORMAL COLOUR PETLIA
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '30*30',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '30*35',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '50 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '60 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  },
  {
    packet: PacketEnum.NORMAL,
    printType: PrintTypeEnum.FLEX,
    type: PacketTypeEnum.PETLIA,
    polyType: [PolyethyleneTypeEnum.NIZKIY, PolyethyleneTypeEnum.VYSOKIY],
    colour: ColourEnum.COLOUR,
    copies: ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'],
    density: '70 мкм',
    size: '40*40',
    sides: [SidesEnum.ONE, SidesEnum.TWO]
  }
];

