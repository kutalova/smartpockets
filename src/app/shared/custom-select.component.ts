import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

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
        <div class="form-group">
            <div class="btn-group btn-group-justified form-control" [ngClass]="{'show':open}" (click)="toggleOpen();"
                 (clickOutside)="onClickedOutside($event, titleInput.value)">
                <button type="button" class="btn btn-secondary">{{ placeholder }}</button>
                <i class="icon icon-chevron-down btn btn-secondary dropdown-toggle dropdown-toggle-split"></i>
                <div class="dropdown-menu" (click)="toggleOpen();">
                    <button
                            type="button"
                            class="dropdown-item"
                            *ngFor="let option of options"
                            [ngClass]="{'active':option.value === value}"
                            (click)="optionSelect(option);">
                        {{option}}
                    </button>
                    <input type="text" #titleInput class="own"
                           placeholder="Введите свое значение"/>
                </div>
            </div>
        </div>
    `,
    styleUrls: [`./custom-select.component.scss`, './styles/icons.css', './styles/forms.css']
})
export class CustomSelectComponent implements ControlValueAccessor {
    @Input() options = [];

    selectedOption: string;

    get placeholder(): string {
        return this.selectedOption ? this.selectedOption : 'Выберите значение';
    }

    set placeholder(value) {
        this.selectedOption = value;
    }

    open = false;

    optionSelect(option: string) {
        this.writeValue(option);
        this.onTouched();

        this.open = false;
        console.log(this.isOpen);
    }

    toggleOpen() {
        console.log('thats toggle');
        this.open = !this.open;
    }

    close(input) {
        if (input) {
            this.placeholder = input;
        }
        this.open = false;
    }

    get isOpen(): boolean {
        return this.open;
    }

    onClickedOutside(e: Event, input) {
        // console.log(e);
        this.close(input);
    }

    writeValue(value) {
        if (!value || typeof value !== 'string') {
            return;
        }
        this.selectedOption = value;
        this.onChange(this.selectedOption);
        this.open = false;
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
