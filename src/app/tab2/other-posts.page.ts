import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { User } from '../models/user';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-other-posts',
  templateUrl: 'other-posts.page.html',
  styleUrls: ['other-posts.page.scss']
})
export class OtherPostsPage {
  posts: Post[];
  users: Map<number, User>;

  constructor(private postSvc: PostService, private userSvc: UserService, private router: Router) {}

  ionViewDidEnter() {
    if (!this.userSvc.currentUser) {
      if (localStorage.getItem('currentUser')) {
        this.userSvc.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      }
    }

    if (this.userSvc.currentUser) {
      this.postSvc.getAllPosts().subscribe((posts: Post[]) => {
        if (posts != null) {
          this.posts = [];
          posts.forEach(p => {
            if (p.userId !== this.userSvc.currentUser.id) {
              this.posts.push(p);
            }
          });
        }
      });
    }
    else {
      this.router.navigateByUrl('/', { replaceUrl: true});
    }

    this.users = new Map<number, User>();
    this.userSvc.getAllUsers().subscribe((users: User[]) => {
      users.forEach(u => {
        this.users.set(u.id, u);
      });
    });
  }

}
