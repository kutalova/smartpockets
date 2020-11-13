import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {PacketEnum, PacketTypeEnum, PolyethyleneTypeEnum, PrintTypeEnum, SidesEnum} from '../../enums/calculation-item.enum';
import {CalculationFlexBananaItems} from '../../data/calculation.flex.banana.data';
import {CalculationFlexMaykaItems} from '../../data/calculation.flex.mayka.data';
import {CalculationFlexPetliaItems} from '../../data/calculation.flex.petlia.data';
import {CalculationSilkItems} from '../../data/calculation.silk.data';
import {PacketCalculationItem} from '../../interfaces/calculation-item.interface';
import {CalculationItemService} from '../../services/calculation-item.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-form-count',
  templateUrl: './form-count.component.html',
  styleUrls: ['./form-count.component.scss', '../../shared/styles/icons.css', '../../shared/styles/forms.scss'],
})
export class FormCountComponent implements OnInit {

  packet: typeof PacketEnum = PacketEnum;
  packetType: typeof PacketTypeEnum = PacketTypeEnum;
  polyType: typeof PolyethyleneTypeEnum = PolyethyleneTypeEnum;
  sides: typeof SidesEnum = SidesEnum;
  printType: typeof PrintTypeEnum = PrintTypeEnum;

  silk: PacketCalculationItem[] = CalculationSilkItems;
  banana: PacketCalculationItem[] = CalculationFlexBananaItems;
  petlia: PacketCalculationItem[] = CalculationFlexPetliaItems;
  mayka: PacketCalculationItem[] = CalculationFlexMaykaItems;

  countForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  size_banana = ['15*20', '20*30', '24*40', '25*35', '30*40', '40*40', '40*50', '48*40', '50*60', '57*40', '60*70', '69*50'];
  size_mayka = ['15*22', '20*35', '20*40', '28*48', '30*48', '35*57', '40*69', '45*69', '40*57'];
  size_petlia = ['30*40', '40*50', '50*60', '60*70'];
  density_mayka = ['7 мкм', '10 мкм', '15 мкм', '20 мкм', '25 мкм', '30 мкм', '35 мкм', '40 мкм', '45 мкм', '50 мкм'];
  density_banana = ['40 мкм', '45 мкм', '50 мкм',
    '55 мкм', '60 мкм', '65 мкм', '70 мкм',
    '75 мкм', '80 мкм', '85 мкм', '90 мкм', '100 мкм'];
  density_petlia = ['50 мкм', '60 мкм', '70 мкм', '80 мкм', '90 мкм', '100 мкм'];
  copies = ['100', '200', '300', '500', '1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'];
  copies_petlia = ['1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'];
  colour = ['белый', 'цветной', 'прозрачный'];
  colour_count = [1, 2, 3, 4, 5, 6, 7, 8];
  sidesPacket = ['Односторонний', 'Двусторонний'];

  endpoint = environment.serverDomain;
  text = 'AAA';
  PACKET: PacketEnum = PacketEnum.NORMAL;


  private readonly _calculationModel: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  public get sizeOptionsArray() {
   // return this.calculation.getSizeOptions(this.countForm.value);
    return this._calculationModel.getValue();
  }

  public set sizeOptionsArray(sizes: any) {
    // ;
    this._calculationModel.next(this.calculation.getSizeOptions(this.countForm.value));
  }



  constructor(private http: HttpClient,
              private fb: FormBuilder,
              private calculation: CalculationItemService) {
  }

  onSubmit() {

    const uploadData = new FormData();
    uploadData.append('email', this.countForm.get('email').value);
    uploadData.append('name', this.countForm.get('name').value);
    uploadData.append('phone', this.countForm.get('phone').value);
    uploadData.append('packet_type', this.countForm.get('packetType').value);
    uploadData.append('mat_type', this.countForm.get('matType').value);
    uploadData.append('size', this.countForm.get('size').value);
    uploadData.append('density', this.countForm.get('density').value);
    uploadData.append('copies', this.countForm.get('copies').value);
    uploadData.append('colour', this.countForm.get('colour').value);
    uploadData.append('colour_count', this.countForm.get('colour_count').value);
    uploadData.append('sides', this.countForm.get('sides').value);
    uploadData.append('comment', this.countForm.get('comment').value);
    uploadData.append('count', '1');
    this.http.post(this.endpoint, uploadData).subscribe();
    this.countForm.reset();
    this.countForm.get('packetType').setValue('Майка');
  }

  ngOnInit() {
    this.initForm();
    this.countForm.valueChanges.subscribe(
      (values) => {
        console.log(values);
      }
    );
  }

  getInfo(param: string) {
    // console.log(this.PACKET);
    switch (this.PACKET) {
      case PacketEnum.BIO: {
        this.text = 'BIO';
        break;
      }
      case PacketEnum.NORMAL: {
        this.text = 'NORMAL';
        break;
      }
    }
    const packet = this.countForm.get('packetType').value;
    // switch (packet) {
    //   case this.packetType.BANANA: {
    //     if (param === 'copies') {
    //       return this.copies;
    //       break;
    //     } else {
    //       return param === 'size' ? this.size_banana : this.density_banana;
    //       break;
    //     }
    //   }
    //   case this.packetType.MAYKA: {
    //     if (param === 'copies') {
    //       return this.copies;
    //       break;
    //     } else {
    //       return param === 'size' ? this.size_mayka : this.density_mayka;
    //       break;
    //     }
    //   }
    //   // case 'Петля': {
    //   //   if (param === 'copies') {
    //   //     return this.copies_petlia;
    //   //     break;
    //   //   } else {
    //   //     return param === 'size' ? this.size_petlia : this.density_petlia;
    //   //     break;
    //   //   }
    //   //
    //   // }
    //   default:
    //     return param === 'size' ? this.size_mayka : this.density_mayka;
    // }

  }

  initForm() {

    this.countForm = this.fb.group({
      packet: [this.packet.NORMAL],
      packetType: [this.packetType.MAYKA],
      matType: [this.polyType.NIZKIY],
      printType: [this.printType.SILK],
      size: ['Выберите значение'],
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      comment: [''],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      density: ['Выберите значение'],
      colour_count: ['1'],
      colour: ['белый'],
      copies: ['Выберите значение'],
      sides: [this.sides.ONE],
    });

    this.countForm.get('size').setValue(this.calculation.getSizeOptions(this.countForm.value));

  }
}
