import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  list=new FormGroup({
    username: new FormControl('',[Validators.required,
      Validators.minLength(6)
    ]),
    password: new FormControl('',[Validators.required,
      Validators.minLength(6)])
  });
  get username(){
    return this.list.get('username')
  }
  get password(){
    return this.list.get('password')
  }


  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
   
  }

}
