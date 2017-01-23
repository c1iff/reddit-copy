import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-controversial',
  templateUrl: './controversial.component.html',
  styleUrls: ['./controversial.component.css'],
  providers: [PostService]

})
export class ControversialComponent implements OnInit {
  posts: Post[];
  filterCategory: string = "controversial";

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
