import {Component} from '@angular/core';
import {SimpleSmoothScrollService} from 'ng2-simple-smooth-scroll';

@Component({
    selector: 'app-up-button',
    templateUrl: './up-button.component.html',
    styleUrls: ['./up-button.component.scss']
})
export class UpButtonComponent {

    constructor(private smooth: SimpleSmoothScrollService) {
    }

    goTop() {
        this.smooth.smoothScrollToTop({duration: 1000, easing: 'linear'});
    }
}
