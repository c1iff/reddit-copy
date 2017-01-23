import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  providers: [PostService]
})
export class EditPostComponent implements OnInit {
  @Input() postToEdit;
  @Output() doneButtonClickedSender = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  editedPost() {
    this.doneButtonClickedSender.emit();
  }
}
