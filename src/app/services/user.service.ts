import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(environment.apiUrl + '/users');
  }
}
