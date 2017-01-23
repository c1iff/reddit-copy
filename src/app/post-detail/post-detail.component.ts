import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]

})
export class PostDetailComponent implements OnInit {
  postId: number;
  postToDisplay: Post;
  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.postId = parseInt(urlParametersArray['id']);
    });
    this.postToDisplay = this.postService.getPostById(this.postId);
  }

}
