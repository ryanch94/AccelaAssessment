import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastController: ToastController, private loginSvc: LoginService, private router: Router, private userSvc: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  async login() {
    const {email} = this.loginForm.value;

    if (email == '') {
      const toast = await this.toastController.create({
        message: 'Email cannot be blank. Please enter an email address.',
        position: 'bottom',
        duration:1500
      });
      toast.present();
      return;
    }

    this.loginSvc.checkValidEmail(email).subscribe(async (val: User[]) => {
      if (val[0] == null) {
        const toast = await this.toastController.create({
          message: 'This email is not a valid email.',
          position: 'bottom',
          duration:1500
        });
        await toast.present();
        return;
      }
      localStorage.setItem("currentUser", JSON.stringify(val[0]));
      this.userSvc.currentUser = val[0];
      this.router.navigate(['tabs']);
    });
  }
}
