import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-our-blog',
    templateUrl: './our-blog.component.html',
    styleUrls: ['./our-blog.component.scss']
})
export class OurBlogComponent implements OnInit {
    innerWidth = 500;
    token = 'EAAFEmfVsX5oBAEBZBR5utgbqXkWF7nZCwbeI3Oh4ZAbRmmOa6kTmNK0WKI8jhsSGOXKmSSsnLtfFQp5P7KlYpDMZARZCHaK1hqe84IYLJ6hJZA7EPIMbYjgHTutUQ6y2jct6PQoNBBsscQUOZCkZBmmorKPPPriSszqfGDG49CWUQwZDZD';
    results = [];
    error: any;
    facebook: any;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth > 1100 ? 500 : 300;
    }
    constructor(private http: HttpClient) {
    // constructor(private http: HttpClient, private fb: FacebookService) {
        // let initParams: InitParams = {
        //     appId: '356903014915994',
        //     xfbml: true,
        //     version: 'v3.2'
        // };
        // fb.init(initParams);

    }

    ngOnInit() {

    }

}
