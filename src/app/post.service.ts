import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {

  constructor() { }

  getPosts() {
    return POSTS;
  }

  addNewPost(post) {
    POSTS.push(post);
  }

  getPostById(postId: number) {
    for (var i = 0; i <= POSTS.length - 1; i++) {
      if (POSTS[i].id === postId) {
        return POSTS[i];
      }
    }
  }

  deletePost(postId: number) {
    for (var i = 0; i <= POSTS.length - 1; i++) {
      if (POSTS[i].id === postId) {
        POSTS.splice(i, 1);
      }
    }
  }
}
