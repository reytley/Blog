
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})

export class PostListComponentComponent implements OnInit {
  // liste recuperer de App.component.ts
  @Input() postss: Array<Post> ;
  constructor() {
   }

  ngOnInit() {
  }

}
