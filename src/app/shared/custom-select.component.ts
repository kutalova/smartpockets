import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

interface selectOption {
    title: string;
    value: string;
}

@Component({
    selector: 'app-custom-select',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomSelectComponent),
            multi: true,
        }
    ],
    template: `
        <div class="btn-group btn-group-justified" [ngClass]="{'show':isOpen}">
            <button type="button" class="btn btn-secondary">{{ placeholder }}</button>
            <i class="icon icon-chevron-down btn btn-secondary dropdown-toggle dropdown-toggle-split" (click)="toggleOpen();"></i>
            <!--<button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" >-->
                <!--<span class="sr-only">Toggle Dropdown</span>-->
            <!--</button>-->
            <div class="dropdown-menu">
                <button
                        type="button"
                        class="dropdown-item"
                        *ngFor="let option of options"
                        [ngClass]="{'active':option.value === value}"
                        (click)="optionSelect(option);">
                    {{option}}
                </button>
                <input type="text" (click)="optionSelect(option);" placeholder="Введите свое значение"/>
                <!--<div class="dropdown-item" *ngIf="!options.length">No items for select</div>-->
            </div>
        </div>
    `,
    styleUrls: [`./custom-select.component.scss`, './styles/icons.css']
})
export class CustomSelectComponent implements ControlValueAccessor {
    @Input() options = [];

    selectedOption: string;

    get placeholder(): string {
        return this.selectedOption ? this.selectedOption : 'Select';
    }
    set placeholder(value){
        this.selectedOption = value;
    }

    open: boolean = false;

    optionSelect(option: selectOption) {
        console.log(option);
        this.writeValue(option);
        this.onTouched();
        this.open = false;
    }

    toggleOpen() {
        this.open = !this.open;
    }

    get isOpen(): boolean {
        return this.open;
    }

    writeValue(value) {
        if (!value || typeof value !== 'string') {
            console.log('error');
            return;
        }
        // const selectedEl = this.options.find(el => el.value === value);
        // if (selectedEl) {
            console.log(this.placeholder, 'plchldr');
            this.selectedOption = value;
            this.onChange(this.selectedOption);
            this.placeholder = this.selectedOption;

        // }
    }

    onChange: any = () => {  };
    onTouched: any = () => { };

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

}
