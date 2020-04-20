import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EUser } from './models/EUser';
import { UEvent } from './models/UEvent';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  

  userUri: string = 'http://localhost:9025/euser';
  eventUri: string = 'http://localhost:9025/event';

  constructor(private http: HttpClient) { }

  login(user: EUser){
    console.log(user, "in service")
    return this.http.post<EUser>(`${this.userUri}/login`, user);
  }

  getAllEvents() {
    return this.http.get<UEvent[]>(`${this.eventUri}/all`);
  }

  saveEvent(event: UEvent) {
    return this.http.post<UEvent>(`${this.eventUri}/save`, event);
  }
}
