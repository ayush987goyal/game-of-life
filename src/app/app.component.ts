import { Component } from '@angular/core';
import { GameOfLife } from './game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  board = [];
  resBoard = [];

  onShow() {
     this.board = [];
  this.resBoard = [];
    let game = new GameOfLife(12, 12);
    this.board = game.getBoard();
    // console.log(game.board);
    // game.play();
    // this.resBoard = game.play();
    var _this = this;

    for (var i = 1; i <= 1050; i++) {
      setTimeout(function () {
        _this.resBoard = game.play();
      }, 100*i);
    }
  }
}
