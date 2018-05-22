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
  gamestate: any;
  game: any;
  chatMessage: string;
  chatMessages: Array<any>;
  playCard:any;
  showColor:boolean;
  constructor(private socket: SocketService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.userId = '';
    this.gamestate = {};
    this.game = {};
    this.chatMessage = '';
    this.chatMessages = [];
    this.playCard = {};
    this.showColor=false;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.tableId = params['id'];
    });
  }

  ngOnInit() {
    this.socket.connect(this.tableId);

    this.socket.receive('auth').subscribe((data) => {
      this.userId = data['userId'];
    });

    this.socket.receive('table:status').subscribe((data) => {
      this.gamestate = data;
      let counter=0;
      let arr=[];
      let flag=false;
      for(var i=0;i<this.gamestate.GameUsers.length;i++){
        if(this.gamestate.GameUsers[i].UserId==this.userId){
          flag=true;
          counter=i;
        }
        if(counter<=i && flag==true){
          arr.push(this.gamestate.GameUsers[i]);
        }
      }
      for(var i=0;i<counter;i++){
        arr.push(this.gamestate.GameUsers[i]);
      }
      this.gamestate.Users=arr;
    });

    this.socket.receive('status').subscribe((data) => {
      this.game = data;
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

  checkPlayable(card1, card2) {
    if(card1.Card.name[1]==card2.Card.name[1]){
      return true;
    }
    if(card1.Card.color == card2.Card.color){
      return true;
    }
    if(card1.Card.type==card2.Card.type && card1.Card.type>1){
      return true;
    }
    if(card2.Card.type>=5){
      let oldPos=this.gamestate.UserPlays[0].GameUser.position;
      let cPos=this.gamestate.Users[0].position;
      let flag=false;
      if(this.gamestate.direction){
        if(oldPos==cPos-1){
          flag=true;
        }
        if(cPos==1 && oldPos==this.gamestate.GameUsers.length){
          flag=true;
        }
      }
      if(card1.Card.color==this.gamestate.UserPlays[0].color && flag==false){
        return true;
      }
    }
    if(card1.Card.type==5 && card2.Card.type<=5){
      return true;
    }
    if(card1.Card.type==6){
      return true;
    }
    return false;
  }

  getDrawCount(card){
    let oldPos=this.gamestate.UserPlays[0].GameUser.position;
    let cPos=this.gamestate.Users[0].position;
    let flag=false;
    if(this.gamestate.direction){
      if(oldPos==cPos-1){
        flag=true;
      }
      if(cPos==1 && oldPos==this.gamestate.GameUsers.length){
        flag=true;
      }
    }
    else{
      if(oldPos==cPos+1){
        flag=true;
      }
      if(oldPos==1 && cPos==this.gamestate.GameUsers.length){
        flag=true;
      }
    }
    if(card.Card.type==6 && flag==true) {
      return 4;
    }
    if(card.Card.type==4 && flag==true) {
      return 2;
    }
    return 1;
  }

  play(card) {
    if(this.gamestate.Users[0].isCurrent) {
      if(this.checkPlayable(card, this.gamestate.GameCards[0])){
        if(card.Card.type>=5){
          this.playCard=card;
          this.showColor=true;
        }
        else{
          this.socket.send('table:play', card);
        }
      }
    }
  }

  addColor(color){
    this.showColor=false;
    this.playCard.color=color;
    this.socket.send('table:play',this.playCard);
    this.playCard={};
  }

  draw() {
    if(this.gamestate.Users[0].isCurrent) {
      this.socket.send('table:draw',{'num':this.getDrawCount(this.gamestate.GameCards[0])});
    }
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
