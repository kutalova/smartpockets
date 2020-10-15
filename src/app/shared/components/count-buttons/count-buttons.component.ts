import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-count-buttons',
  templateUrl: './count-buttons.component.html',
  styleUrls: ['./count-buttons.component.scss']
})
export class CountButtonsComponent implements OnInit {
  @Input() linkToGallery: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
