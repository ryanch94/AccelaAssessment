import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getUserPosts(userId: number) {
    return this.http.get(environment.apiUrl + '/posts?userId=' + userId);
  }

  getAllPosts() {
    return this.http.get(environment.apiUrl + '/posts');
  }

  createPost(post: Post) {
    return this.http.post(environment.apiUrl + '/posts', post);
  }
}
