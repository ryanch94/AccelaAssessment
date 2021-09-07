import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: 'user-posts.page.html',
  styleUrls: ['user-posts.page.scss']
})
export class UserPostsPage {
  posts: Post[];
  postForm: FormGroup;

  constructor(private postSvc: PostService, private userSvc: UserService, private router: Router, private fb: FormBuilder, private tc: ToastController) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  ionViewDidEnter() {   
    if (!this.userSvc.currentUser) {
      if (localStorage.getItem('currentUser')) {
        this.userSvc.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      }
    }

    if (this.userSvc.currentUser) {
      this.postSvc.getAllPosts().subscribe((posts: Post[]) => {
        this.posts = posts;
      });
    }
    else {
      this.router.navigateByUrl('/', { replaceUrl: true});
    }
  }

  createPost() {
    const { title, body } = this.postForm.value;

    if (title == "" || body == "") {
      const toast = this.tc.create({
        message: 'You must fill in all the fields.',
        position: 'bottom',
        duration:1500
      });
      toast.then((a) => a.present());
      return;
    }

    const post: Post = {
      body: body,
      title: title,
      userId: this.userSvc.currentUser.id,
      id: 0
    }

    this.postSvc.createPost(post).subscribe(() => {}, (err) => {
      const toast = this.tc.create({
        message: err,
        position: 'bottom',
        duration:1500
      });
      toast.then((a) => a.present());
    }, () => {
      this.posts.push(post);

      this.postForm.reset();
  
      const toast = this.tc.create({
        message: 'Post successfully created.',
        position: 'bottom',
        duration:1500
      });
      toast.then((a) => a.present());
    });
    
  }

}
