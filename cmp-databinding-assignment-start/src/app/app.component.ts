import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddElements: {index: number}[] = [];
  evenElements: {index: number}[] = [];

  onGameStarted(gameData: {index: number}) {
    if (gameData.index % 2 === 0) {
      this.evenElements.push({index: gameData.index});
    } else {
      this.oddElements.push({index: gameData.index});
    }
  }
}
