import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-form-count',
    templateUrl: './form-count.component.html',
    styleUrls: ['./form-count.component.scss', '../shared/styles/icons.css', '../shared/styles/forms.scss']
})
export class FormCountComponent implements OnInit {

    countForm: FormGroup;

    size_banana = ['15*20', '20*30', '30*40', '40*50', '50*60', '60*60', '60*70'];
    size_mayka = ['15*22', '20*35', '30*48', '35*57', '40*69', '45*69'];
    density = ['10 мкм', '15 мкм', '20 мкм', '25 мкм', '30 мкм', '35 мкм', '40 мкм', '45 мкм', '50 мкм', '60 мкм', '70 мкм', '80 мкм', '90 мкм'];
    copies = ['100', '200', '300', '500', '1000', '3000', '5000', '7000', '10 000', '15 000', '20 000', '30000', '50000', '100000'];
    colour = ['белый', 'цветной'];
    colour_count = [1, 2, 3, 4, 5, 6, 7, 8];
    sides = ['Односторонний', 'Двусторонний'];

    endpoint = 'http://localhost/post_mail/sendMail.php';

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
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {

        this.countForm = this.fb.group({
            packetType: ['', Validators.required],
            matType: ['', Validators.required],
            size: ['', Validators.required],
            name: ['', Validators.required],
            phone: new FormControl(''),
            comment: new FormControl(''),
            email: ['', Validators.required],
            density: ['', Validators.required],
            colour_count: ['', Validators.required],
            colour: ['', Validators.required],
            copies: ['', Validators.required],
            sides: ['', Validators.required],
        });

    }
}
