import {Component} from '@angular/core';

@Component({

  selector: 'app-server', // selector is used in HTML templates <app-server></app-server>
  templateUrl: './server.component.html', // the html file that this component manages
  styles:[`
    .online {
      color: white;
    }
   `]

})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }


  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
