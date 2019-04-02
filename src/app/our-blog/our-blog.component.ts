import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FacebookService, InitParams} from 'ngx-facebook';

// import {FaceBookPostsService} from '../providers/facebook-graph-service.service';

@Component({
    selector: 'app-our-blog',
    templateUrl: './our-blog.component.html',
    styleUrls: ['./our-blog.component.scss']
})
export class OurBlogComponent implements OnInit {
    innerWidth: number = 500;
    token = 'EAAFEmfVsX5oBAEBZBR5utgbqXkWF7nZCwbeI3Oh4ZAbRmmOa6kTmNK0WKI8jhsSGOXKmSSsnLtfFQp5P7KlYpDMZARZCHaK1hqe84IYLJ6hJZA7EPIMbYjgHTutUQ6y2jct6PQoNBBsscQUOZCkZBmmorKPPPriSszqfGDG49CWUQwZDZD';
    results = [];
    error: any;
    facebook: any;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth > 1100 ? 500 : 300;
        console.log(this.innerWidth);
    }
    constructor(private http: HttpClient, private fb: FacebookService) {
        let initParams: InitParams = {
            appId: '356903014915994',
            xfbml: true,
            version: 'v3.2'
        };
        fb.init(initParams);

    }

//   FB.api(
//   '/smartpocketsua/feed',
//   'GET',
// {},
// function(response) {
//   // Insert your code here
// }
// );
//   GET https://graph.facebook.com/v2.9/LADbible/posts?access_token={ACCESS_TOKEN}
    ngOnInit() {
        this.fb.api('smartpocketsua/feed?limit=2&fields=permalink_url&access_token=' + this.token)
            .then((res: any) => {
                // console.log(res);
                this.results = res.data;
                console.log(this.results.length);
            })
            .catch(this.handleError);

        // this.fb.getPosts().subscribe(
        //     data => {
        //         this.results = data;
        //         console.log('values  in results');
        //         console.log(this.results);
        //         for (let i of this.results) {
        //
        //             console.log('url is ' + i.permalink_url);
        //         }
        //     },
        //
        //     error => console.log(error)
        // );
        // this.http.get('https://graph.facebook.com/v3.2/smartpocketsua/posts?access_token=' + this.token)
        //     .subscribe(
        //         response => console.log(response),
        //         response => console.log(response)
        //     );
    }

    private handleError(error) {
        console.error('Error processing action', error);
    }
}
