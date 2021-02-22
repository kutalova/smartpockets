export enum PacketEnum {
  NORMAL = 'Звичайний',
  BIO = 'БIО (d2w)'
}

export enum PacketTypeEnum {
  MAYKA = 'Майка',
  BANANA = 'Банан',
  PETLIA = 'Петля',
  COURRIER = 'Кур\'єрський',
  // ZIP = 'ZIP застежка'
}

export enum PolyethyleneTypeEnum {
  NIZKIY = 'Низького тиску',
  VYSOKIY = 'Високого тиску',

}

export enum PrintTypeEnum {
  SILK = 'Шовкодрук',
  FLEX = 'Флексодрук'
}

export enum SidesEnum {
  ONE = 'Односторонiй',
  TWO = 'Двоcторонiй'
}

export enum ColourEnum {
  WHITE= 'бiлий',
  TRANSPARENT = 'прозорий',
  COLOUR = 'кольоровий',
  MILK = 'молочний'
}


export const TYPES_ALLOWED_FOR_SILK = [PacketTypeEnum.MAYKA,
  PacketTypeEnum.PETLIA,
  PacketTypeEnum.BANANA,
  // PacketTypeEnum.ZIP,
  PacketTypeEnum.COURRIER];

export const TYPES_ALLOWED_FOR_FLEX = [PacketTypeEnum.MAYKA,
  PacketTypeEnum.PETLIA,
  PacketTypeEnum.BANANA];

export const TYPES_ALLOWED_FOR_BIO = [];
export const TYPES_ALLOWED_FOR_NORMAL = [];
