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
            <!--<button type="button" class="btn btn-secondary">{{ placeholder }}</button>-->
            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" (click)="toggleOpen();">
                <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu">
                <button
                        type="button"
                        class="dropdown-item"
                        *ngFor="let option of options"
                        [ngClass]="{'active':option.value === value}"
                        (click)="optionSelect(option);">
                    {{option}}
                </button>
                <input type="text" placeholder="Введите свое значение"/>
                <!--<div class="dropdown-item" *ngIf="!options.length">No items for select</div>-->
            </div>
        </div>
    `,
    styles: [`.btn-group-justified {
        display: flex;
    }

    .btn-group-justified .btn:first-child {
        flex: 1;
        text-align: left;
    }

    .btn-group-justified .dropdown-menu {
        width: 100%;
    }

    .btn-group-justified .dropdown-item {
        cursor: pointer;
    }

    .btn-group-justified .dropdown-item.active {
        cursor: default;
    }

    .btn-group-justified .dropdown-item:active {
        background: transparent;
        color: inherit;
    }

    .btn-group-justified .dropdown-item:focus {
        outline: none !important;
    }`]
})
export class CustomSelectComponent implements ControlValueAccessor {
    @Input() options: selectOption[] = [];

    selectedOption: selectOption;

    // get placeholder(): string {
    //     return this.selectedOption && this.selectedOption.hasOwnProperty('title') ? this.selectedOption.title : 'Select';
    // }

    open: boolean = false;

    optionSelect(option: selectOption) {
        this.writeValue(option.value);
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
            return;
        }
        const selectedEl = this.options.find(el => el.value === value);
        if (selectedEl) {
            this.selectedOption = selectedEl;
            this.onChange(this.selectedOption.value);
        }
    }

    onChange: any = () => {
    };
    onTouched: any = () => {
    };

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

}
