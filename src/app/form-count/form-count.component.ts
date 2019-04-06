import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Component({
    selector: 'app-form-count',
    templateUrl: './form-count.component.html',
    styleUrls: ['./form-count.component.scss', '../shared/styles/icons.css', '../shared/styles/forms.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCountComponent implements OnInit {

    countForm: FormGroup;
    emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

    size_banana = ['15*20', '20*30', '24*40', '25*35', '30*40', '40*40', '40*50', '48*40', '50*60', '57*40', '60*70', '69*50'];
    size_mayka = ['15*22', '20*35', '20*40', '28*48', '30*48', '35*57', '40*69', '45*69', '40*57'];
    density_mayka = ['7 мкм', '10 мкм', '15 мкм', '20 мкм', '25 мкм', '30 мкм', '35 мкм', '40 мкм', '45 мкм', '50 мкм'];
    density_banana = ['40 мкм', '45 мкм', '50 мкм', '55 мкм', '60 мкм', '65 мкм', '70 мкм', '75 мкм', '80 мкм', '85 мкм', '90 мкм', '100 мкм'];
    copies = ['100', '200', '300', '500', '1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30 000', '50 000', '100 000'];
    colour = ['белый', 'цветной', 'прозрачный'];
    colour_count = [1, 2, 3, 4, 5, 6, 7, 8];
    sides = ['Односторонний', 'Двусторонний'];

    endpoint = environment.serverDomain;

    constructor(private http: HttpClient, private fb: FormBuilder) {
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
        this.http.post(this.endpoint, uploadData)
            .subscribe(
                response => console.log(response),
                response => console.log(response)
            );
        this.countForm.reset();
        this.countForm.get('packetType').setValue('Майка');
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {

        this.countForm = this.fb.group({
            packetType: ['Майка'],
            matType: ['Низкого давления'],
            size: ['Выберите значение'],
            name: ['', Validators.required],
            phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
            comment: [''],
            email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
            density: ['Выберите значение'],
            colour_count: ['1'],
            colour: ['белый'],
            copies: ['Выберите значение'],
            sides: ['Односторонний'],
        });

    }
}
