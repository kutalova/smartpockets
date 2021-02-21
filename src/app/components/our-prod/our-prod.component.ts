import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MainProductsData, OtherProductsData} from '../../data/production.data';
import {productionItemInterface} from '../../interfaces/production-item.interface';

@Component({
  selector: 'app-our-prod',
  templateUrl: './our-prod.component.html',
  styleUrls: ['./our-prod.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurProdComponent {
 mainProducts: productionItemInterface[] = MainProductsData;
 otherProducts: productionItemInterface[] = OtherProductsData;
}
