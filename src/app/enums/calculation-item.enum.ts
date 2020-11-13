export enum PacketEnum {
  NORMAL = 'Обычный',
  BIO = 'БИО (d2w)'
}

export enum PacketTypeEnum {
  MAYKA = 'Майка',
  BANANA = 'Банан',
  PETLIA = 'Петля',
  COURRIER = 'Курьерский',
  ZIP = 'ZIP застежка'
}

export enum PolyethyleneTypeEnum {
  NIZKIY = 'Низкого давления',
  VYSOKIY = 'Высокого давления',

}

export enum PrintTypeEnum {
  SILK = 'Шелкотрафарет',
  FLEX = 'Флексопечать'
}

export enum SidesEnum {
  ONE = 'Односторонний',
  TWO = 'Двусторонний'
}


export const TYPES_ALLOWED_FOR_SILK = [PacketTypeEnum.MAYKA,
  PacketTypeEnum.PETLIA,
  PacketTypeEnum.BANANA,
  PacketTypeEnum.ZIP, PacketTypeEnum.COURRIER];

export const TYPES_ALLOWED_FOR_FLEX = [PacketTypeEnum.MAYKA,
  PacketTypeEnum.PETLIA,
  PacketTypeEnum.BANANA];

export const TYPES_ALLOWED_FOR_BIO = [];
export const TYPES_ALLOWED_FOR_NORMAL = [];
