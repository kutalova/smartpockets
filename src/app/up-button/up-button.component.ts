import {Component, OnInit} from '@angular/core';
import {SimpleSmoothScrollService} from 'ng2-simple-smooth-scroll';

@Component({
    selector: 'app-up-button',
    templateUrl: './up-button.component.html',
    styleUrls: ['./up-button.component.scss']
})
export class UpButtonComponent implements OnInit {

    constructor(private smooth: SimpleSmoothScrollService) {
    }

    ngOnInit() {
    }

    goTop() {
        this.smooth.smoothScrollToTop({duration: 1000, easing: 'linear'});
    }
}
