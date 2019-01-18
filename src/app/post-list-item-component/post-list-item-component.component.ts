import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  // PROPRIETE
  // Input récuperé de app.component.js
  @Input() title: string;
  @Input() loveIts: number;
  @Input() content: string;
  @Input() date: Date;

  constructor() {
  }
  // fonction qui s'active sur Click. Permet en autre le changement de couleur des posts
  onAllumer(retour) {
    if (retour) {
      this.loveIts ++;
    } else {
      this.loveIts --;
    }
}
  ngOnInit() {
  }

}
