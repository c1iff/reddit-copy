import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() emitPostAdded = new EventEmitter();
  posts: Post[];

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  createPost(title, pictureUrl, sourceUrl, category) {
    var currentDate = new Date();
    var newPost = new Post(title, sourceUrl, currentDate.toLocaleString(), 0, pictureUrl, category, this.posts.length + 1);
    this.postService.addNewPost(newPost);
    this.emitPostAdded.emit();
  }

}
