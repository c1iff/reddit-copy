import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostService]
})
export class PostListComponent implements OnInit {
  posts: Post[];
  filterCategory: string = "";

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.filterCategory = urlParametersArray['category'];
    });
    this.posts = this.postService.getPosts();
  }

  goToPostDetail(post){
    this.router.navigate(['post', post.id]);
  }
}
