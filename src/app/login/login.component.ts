import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private us : UserService) { }

  ngOnInit(): void {
  }

  onSubmit(data){
    console.log(data)
    this.us.userLogin(data)
    



  }

}
