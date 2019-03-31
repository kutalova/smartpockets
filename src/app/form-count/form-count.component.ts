import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-form-count',
    templateUrl: './form-count.component.html',
    styleUrls: ['./form-count.component.scss', '../shared/styles/icons.css', '../shared/styles/forms.scss']
})
export class FormCountComponent implements OnInit {
    name: string;
    radioTest: FormGroup;
    gender;
    packetType;
    matType;
    size;
    phone;
    email;
    comment;
    data;
    countForm: FormGroup;
    size_banana = ['15*20', '20*30', '30*40', '40*50', '50*60', '60*60', '60*70'];

    // countForm = new FormGroup({
    //     packetType: new FormControl(''),
    //     matType: new FormControl(''),
    //     size: new FormControl(''),
    //     phone: new FormControl(''),
    //     email: new FormControl(''),
    //     comment: new FormControl(''),
    // });
    // http: HttpClient;
    endpoint = 'http://localhost/post_mail/sendMail.php';

    constructor(private http: HttpClient, private fb: FormBuilder) {
    }

    onSubmit() {

        // let data = {
        //     email: this.countForm.value.email,
        //     name: this.countForm.value.email,
        //     message: this.countForm.value.comment
        // };

        // You may also want to check the response. But again, let's keep it simple.
        this.http.post(this.endpoint, this.data)
            .subscribe(
                response => console.log(response),
                response => console.log(response)
            );
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.name = 'Angular2';
        this.radioTest = this.fb.group({
            gender: ['', Validators.required]
        });
        this.countForm = this.fb.group({
            packetType: ['', Validators.required],
            matType: ['', Validators.required],
            name: ['', Validators.required],
            phone: new FormControl(''),
            comment: new FormControl(''),
            email: [null]
        });

    }
}
