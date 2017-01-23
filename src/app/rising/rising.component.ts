import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-rising',
  templateUrl: './rising.component.html',
  styleUrls: ['./rising.component.css'],
  providers: [PostService]

})
export class RisingComponent implements OnInit {
  posts: Post[];
  filterCategory: string = "rising";

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
