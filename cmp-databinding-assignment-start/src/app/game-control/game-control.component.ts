import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{index: number}>();
  index: number;
  interval;

  constructor() {
    this.index = 0;
  }


  startGame() {
    this.interval = setInterval(() => {
      this.index++;
      this.gameStarted.emit({index: this.index});
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }

  ngOnInit() {
  }

}
