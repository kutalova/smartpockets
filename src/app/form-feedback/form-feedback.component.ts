import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-form-feedback',
    templateUrl: './form-feedback.component.html',
    styleUrls: ['./form-feedback.component.scss', '../shared/styles/icons.css', '../shared/styles/style.min.css']
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
        let postVars = {
            email: this.feedbackForm.value.email,
            name: this.feedbackForm.value.email,
            message: this.feedbackForm.value.comment
        };

        // You may also want to check the response. But again, let's keep it simple.
        this.http.post(this.endpoint, postVars)
            .subscribe(
                response => console.log(response),
                response => console.log(response)
            );
    }
    ngOnInit() {

    }


}


