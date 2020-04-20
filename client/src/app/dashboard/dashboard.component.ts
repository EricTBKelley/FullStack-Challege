import { Component, OnInit } from '@angular/core';
import { EUser } from '../models/EUser';
import { UEvent } from '../models/UEvent';
import { MainService } from '../main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  newEvent: UEvent;
  user: EUser;
  time: Date = new Date();
  events: UEvent[];

  constructor(private _service: MainService) { 
    this.user = <EUser>JSON.parse(localStorage.getItem('loggedUser'));
    this.newEvent = new UEvent();
  }

  ngOnInit(): void {
    setInterval(()=> {
      this.time = new Date();
    }, 1000);

    this._service.getAllEvents().subscribe(data =>{
      this.events = data;
    })
  }

  submit(){
    this.newEvent.userFk = this.user.userId;
    console.log(this.newEvent)
    this._service.saveEvent(this.newEvent).subscribe(res => {
      this.ngOnInit();
    }
    );
  }

}
