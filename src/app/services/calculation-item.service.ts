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

  items: PacketCalculationItem[] = [...this.silk, ...this.petlia, ...this.banana, ...this.mayka];


  getSizeOptions(value: PacketCalculationItem) {

    let b;
    b = [...new Set(
      this.items.filter(item => (item.type === value.type
        && item.printType === value.printType
        && item.colour === value.colour
        && item.packet === value.packet
      ))
        .map((item: PacketCalculationItem) => item.size).sort()
    )];
    console.log('size', value, b);
    return b;
  }

  getCopies(values: any) {
    console.log('copies', values);
  }

}
