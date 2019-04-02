import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-form-feedback',
    templateUrl: './form-feedback.component.html',
    styleUrls: ['./form-feedback.component.scss', '../shared/styles/icons.css', '../shared/styles/forms.scss']
})
export class FormFeedbackComponent implements OnInit {
    feedbackForm = new FormGroup({
        name: new FormControl(''),
        phone: new FormControl(''),
        email: new FormControl(''),
        comment: new FormControl(''),
    });
    // http: HttpClient;
    endpoint = 'http://localhost/post_mail/sendMail.php';
    constructor(private http: HttpClient) {
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
                response => console.log(response)
            );
    }
    ngOnInit() {

    }


}


