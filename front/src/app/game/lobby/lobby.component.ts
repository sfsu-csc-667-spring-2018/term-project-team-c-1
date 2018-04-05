import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../../socket.service';
import { ApiService } from '../../api.service';

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
  constructor(private socket: SocketService, private api: ApiService, private router: Router) {
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

  join(gameId) {
    this.api.get('game/join', {game : gameId}).subscribe(data => {
      if (data[0] === 'Success') {
        this.router.navigate(['game/table', gameId]);
      }
    });
  }

  go(gameId) {
    this.api.get('game/go', {game : gameId}).subscribe(data => {
      if (data[0] === 'Success') {
        this.router.navigate(['game/table', gameId]);
      }
    });
  }

  create() {
    this.socket.send('create', '');
  }

}
