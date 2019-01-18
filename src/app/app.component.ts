import { Component} from '@angular/core';
import {Post} from '../app/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Bienvenue dans mon code faite comme chez vous. Notez moi bien. Merci X]
  // Une classe Post à été crée pour répondre au bonus.
  // Création d'une liste de posts qui contiendra tout les postes mise en ligne
  public postss: Array<Post> = [];

  // Création des Objets Posts
  Monpost: Post = new Post('Liorem', 'voluptaent veniam nostrum laboriosam. Quas laborum ad quam minima, esse molestiae text');
  Monpost2: Post = new Post('Liorem des KABA', 'voluptaent veniam nostrum laboriosam. Quas laborum ad quam minima, esse molestiae text');

constructor() {
  // Insertion des Objets Post dans la Collection
  this.postss.push(this.Monpost, this.Monpost2);
}

}



