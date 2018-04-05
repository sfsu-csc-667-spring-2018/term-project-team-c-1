import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SocketService } from '../../socket.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableId: string;
  userId: string;
  game: any;
  chatMessage: string;
  chatMessages: Array<any>;
  constructor(private socket: SocketService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.userId = '';
    this.game = {};
    this.chatMessage = '';
    this.chatMessages = [];
    this.activatedRoute.params.subscribe((params: Params) => {
      this.tableId = params['id'];
    });
  }

  ngOnInit() {
    this.socket.connect(this.tableId);
    this.socket.receive('auth').subscribe((data) => {
      this.userId = data['userId'];
    });

    this.socket.receive('status').subscribe((data) => {
      this.game = data;
      console.log(this.game);
    });

    this.socket.receive('closed').subscribe((data) => {
      this.router.navigate(['./game']);
    });

    this.socket.receive('removeUser').subscribe((data) => {
      if(data.user == this.userId) {
        this.router.navigate(['./game']);
      }
    });

    this.socket.receive('table:response').subscribe((data) => {
      this.chatMessages.push(data);
    });
  }

  cancel() {
    this.socket.send('table:cancel', {});
  }

  start() {
    this.socket.send('table:start', {});
  }

  remove(user) {
    this.socket.send('table:remove', user);
  }

  sendMessage() {
    this.socket.send('table:msg', this.chatMessage);
    this.chatMessage = '';
  }

}
