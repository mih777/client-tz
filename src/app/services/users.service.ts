import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService { 

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  //получаем весь обьект юсеров из json 
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/`)
  }


}
