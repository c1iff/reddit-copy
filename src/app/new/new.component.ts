import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Post } from '../post.model';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  providers: [PostService]
})
export class NewComponent implements OnInit {
  posts: Post[];
  filterCategory: string = "new";

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  goToPostDetail(post){
    this.router.navigate(['post', post.id]);
  }
}
