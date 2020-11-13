import {Injectable} from '@angular/core';
import {PacketCalculationItem} from '../interfaces/calculation-item.interface';
import {CalculationSilkItems} from '../data/calculation.silk.data';
import {CalculationFlexBananaItems} from '../data/calculation.flex.banana.data';
import {CalculationFlexPetliaItems} from '../data/calculation.flex.petlia.data';
import {CalculationFlexMaykaItems} from '../data/calculation.flex.mayka.data';
import {PacketTypeEnum, PrintTypeEnum} from '../enums/calculation-item.enum';

@Injectable()
export class CalculationItemService {

  silk: PacketCalculationItem[] = CalculationSilkItems;
  banana: PacketCalculationItem[] = CalculationFlexBananaItems;
  petlia: PacketCalculationItem[] = CalculationFlexPetliaItems;
  mayka: PacketCalculationItem[] = CalculationFlexMaykaItems;


  getSizeOptions(values: PacketCalculationItem) {
    // console.log('size', values);
    let a;
    a = [...new Set(this.silk.filter(item => (item.type === PacketTypeEnum.BANANA))
      .map((item: PacketCalculationItem) => item.size).sort())];

    console.log(a);
    switch (values.type) {
      // ПЕТЛЯ
      case PacketTypeEnum.PETLIA: {
        switch (values.printType) {
          case PrintTypeEnum.SILK: {
            a = [...new Set(this.silk.filter(item => (item.type === PacketTypeEnum.PETLIA))
              .map((item: PacketCalculationItem) => item.size).sort())];
            break;
          }
          case PrintTypeEnum.FLEX: {
            a = [...new Set(this.petlia.filter(item => (item.type === PacketTypeEnum.PETLIA))
              .map((item: PacketCalculationItem) => item.size).sort())];
            break;
          }
        }
        break;
      }
      case PacketTypeEnum.MAYKA: {
        switch (values.printType) {
          case PrintTypeEnum.SILK: {
            a = [...new Set(this.silk.filter(item => (item.type === PacketTypeEnum.MAYKA))
              .map((item: PacketCalculationItem) => item.size).sort())];
            break;
          }
          case PrintTypeEnum.FLEX: {
            a = [...new Set(this.mayka.filter(item => (item.type === PacketTypeEnum.PETLIA))
              .map((item: PacketCalculationItem) => item.size).sort())];
            break;
          }
        }
        break;
      }

      // БАНАН
      case PacketTypeEnum.BANANA: {
        switch (values.printType) {
          case PrintTypeEnum.SILK: {
            a = [...new Set(this.silk.filter(item => (item.type === PacketTypeEnum.BANANA))
              .map((item: PacketCalculationItem) => item.size).sort())];
            break;
          }
          case PrintTypeEnum.FLEX: {
            a = [...new Set(this.banana
              .map((item: PacketCalculationItem) => item.size).sort())];
            break;
          }
        }
      }
    }
    return a;
  }

  getCopies(values: any) {
    console.log('copies', values);
  }

}
