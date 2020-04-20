import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { EUser } from '../models/EUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  user: EUser;
  time = new Date();

  constructor(private _service: MainService, private _router: Router) { 
    this.user = new EUser()
  }

  ngOnInit(): void {
    setInterval(()=> {
      this.time = new Date();
    }, 1000)
  }

  login(){
    console.log(this.user)
    this._service.login(this.user).subscribe(
      data => {
        localStorage.setItem('loggedUser', JSON.stringify(data));
        this._router.navigate(['dashboard']);
      }
    )
  }

}
