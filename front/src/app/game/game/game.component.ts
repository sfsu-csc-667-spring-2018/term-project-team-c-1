import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  user: User;
  constructor(private api: ApiService) {
    this.user = new User;
  }

  ngOnInit() {
    this.api.getAll('user/details')
    .subscribe(data => {
      this.user = data;
    });
  }

}
