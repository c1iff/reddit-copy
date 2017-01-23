import { Component, OnInit, Input, Output } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostService]
})
export class NewPostComponent implements OnInit {
  @Input() showNewForm;

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
  }

  createPost(title, pictureUrl, sourceUrl, category) {
    var currentDate = new Date();
    var newPost = new Post(title, sourceUrl, currentDate.toLocaleDateString(), 0, pictureUrl, category );
    console.log(newPost)
    this.postService.addNewPost(newPost);
  }

}
