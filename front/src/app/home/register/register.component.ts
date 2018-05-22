import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  errorMsg: string;
  constructor(private api: ApiService, private router: Router) { 
    this.user = new User;
    this.errorMsg = '';
  }

  ngOnInit() {
  }

  register() {
    this.api.put('home/register', this.user)
    .subscribe(data => {
      if (data[0] === 'Success') {
        localStorage.setItem('UnoToken', data[1]);
        this.router.navigate(['/login']);
      } else {
        this.errorMsg = data[1];
      }
    });
  }


}
