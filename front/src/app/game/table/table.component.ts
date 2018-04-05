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
  }

}
