import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-hamburger',
    templateUrl: './hamburger.component.html',
    styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
    hamburgerForm: FormGroup;
    open = true;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.hamburgerForm = this.fb.group({
            hamCheck: [''],
        });
    }

    uncheck() {
        this.hamburgerForm.controls['hamCheck'].reset();
    }
}
