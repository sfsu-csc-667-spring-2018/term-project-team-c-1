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
  chatMessage: string;
  chatMessages: Array<any>;
  constructor(private socket: SocketService) {
    this.userId = '';
    this.lobbies = [];
    this.chatMessage = '';
    this.chatMessages = [];
  }

  ngOnInit() {
    this.socket.connect('lobby');
    this.socket.receive('auth').subscribe((data) => {
      this.userId = data['userId'];
    });
    this.socket.receive('status').subscribe((data) => {
      this.lobbies = data;
    });
    this.socket.receive('create:response').subscribe((data) => {
      alert(data.Message);
    });
    this.socket.receive('lobby:response').subscribe((data) => {
      this.chatMessages.push(data);
    });
  }

  sendMessage() {
    this.socket.send('lobby:msg', this.chatMessage);
    this.chatMessage = '';
  }

  check(gameUsers) {
    for (let i = 0; i < gameUsers.length; i++) {
      if (gameUsers[i].UserId === this.userId) {
        return true;
      }
    }
    return false;
  }

  create() {
    this.socket.send('create', '');
  }

}
