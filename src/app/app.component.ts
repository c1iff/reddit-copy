import { Component } from '@angular/core';
import { Post } from './post.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];

  constructor(private router: Router){}

  title = 'Discussion Board';

}
