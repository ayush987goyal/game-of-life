import { Component, OnInit } from '@angular/core';
import { GameOfLife } from './game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  board = [];
  resBoard = [];
  counter = 0;
  isRunning = true;
  gameInstance: GameOfLife;

  ngOnInit() {
    this.gameInstance = new GameOfLife(50, 30);
    this.board = this.gameInstance.getBoard();
    var _this = this;

    setInterval(function () {
      if (_this.isRunning) {
        _this.counter++;
        _this.resBoard = _this.gameInstance.play();
      }
    }, 100);

  }

  onPlay() {
      this.isRunning = true;
  }

  onPause() {
    this.isRunning = false;
  }

  onCellChange(row, col) {
    // console.log(row + " , " + col);
    if (!this.isRunning) {
      this.gameInstance.updateBoard(row, col);
    }
    else {
      return;
    }

  }

  onClear() {
    this.isRunning = false;
    this.counter = 0;
    this.gameInstance.clearBoard();
  }
}
