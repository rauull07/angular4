import { Component } from '@angular/core';
import {Response} from '@angular/http';
import {ServerService} from './server.service';
import {PetApi} from './api/api/PetApi';
import {Pet} from './api/model/Pet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = this.serverService.getAppName();
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  statuses = ['available', 'pending', 'sold'];
  pets: Pet[] = [];
  pendingPets: Pet[] = [];

  constructor(private serverService: ServerService, private petApi: PetApi) {}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
  onGet() {
    this.serverService.getServers()
      .subscribe(
        (servers: any[]) => this.servers = servers,
        (error) => console.log(error)
      );
  }

  getPetByStatus(status: string) {
    const petStatus: string[] = [];
    petStatus.push(status);

    this.petApi.findPetsByStatus(petStatus).subscribe(
      (response) => {
          this.pets = response;
          console.log(response);
          },
      (error) => console.log(error)
    );
  }

  getPendingPets() {
    this.petApi.findPetsByStatus(['pending']).subscribe(
      (response) => {
        this.pendingPets = response;
        console.log(this.pets);
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
