import {Component} from '@angular/core';
import {UsersService} from './services/users.service';
import {CounterService} from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeToInactive = 0;
  inactiveToActive = 0;

  constructor(private usersService: UsersService, private counterService: CounterService) {
    this.usersService.counterUpdated.subscribe(
      () => {
        this.activeToInactive = this.counterService.activeToInactiveCounter;
        this.inactiveToActive = this.counterService.inactiveToActiveCounter;
      }
    );
  }
}
