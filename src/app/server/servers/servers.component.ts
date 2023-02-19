import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {

  allowServer = false;
  serverCreationStatus = 'None';
  serverName = 'Test Server';
  serverCreated = false;
  username = '';
  servers = ['Test Server', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000)
  }


  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  

}
