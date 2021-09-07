import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPostsPage } from './user-posts.page';

import { UserPostsPageRoutingModule } from './user-posts-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserPostsPageRoutingModule
  ],
  declarations: [UserPostsPage]
})
export class UserPostsPageModule {}
