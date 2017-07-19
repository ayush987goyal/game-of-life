import { Component } from '@angular/core';
import { GameOfLife } from './game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  board = [[1,0],[0,1]];
  resBoard = [[1,0],[0,1]];

  onShow(){
    let game = new GameOfLife(16,7,6);
     this.board = game.getBoard();
    // console.log(game.board);
    // game.play();
    this.resBoard = game.play();
  }
}
