import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../socket.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  userId: string;
  lobbies: Array<any>;
  constructor(private socket: SocketService) { 
    this.userId = '';
    this.lobbies=[];
  }

  ngOnInit() {
    this.socket.connect('lobby');
    this.socket.receive('auth').subscribe((data) => {
      this.userId = data['userId'];
    });
    this.socket.receive('status').subscribe((data) => {
      console.log(data);
      this.lobbies = data;
    });
    this.socket.receive('create:response').subscribe((data) => {
      alert(data.Message);
    });
  }

  create() {
    this.socket.send('create', '');
  }

}
