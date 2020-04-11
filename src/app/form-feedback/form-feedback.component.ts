import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Component({
    selector: 'app-form-feedback',
    templateUrl: './form-feedback.component.html',
    styleUrls: ['./form-feedback.component.scss', '../shared/styles/icons.css', '../shared/styles/forms.scss'],
})
export class FormFeedbackComponent implements OnInit {
    feedbackForm: FormGroup;
    endpoint = environment.serverDomain;
    emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

    constructor(private http: HttpClient, private fb: FormBuilder) {
    }

    onSubmit() {
        const uploadData = new FormData();
        uploadData.append('email', this.feedbackForm.get('email').value);
        uploadData.append('name', this.feedbackForm.get('name').value);
        uploadData.append('phone', this.feedbackForm.get('phone').value);
        uploadData.append('comment', this.feedbackForm.get('comment').value);
        uploadData.append('feedback', '1');

        this.http.post(this.endpoint, uploadData)
            .subscribe(
                response => console.log(response),
                response => console.error('An error occured')
            );
        this.feedbackForm.reset();
    }

    ngOnInit() {
        this.feedbackForm = this.fb.group({
            name: ['', Validators.required],
            phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
            comment: [''],
            email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        });
    }


}


