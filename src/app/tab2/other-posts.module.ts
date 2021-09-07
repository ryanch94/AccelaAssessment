import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OtherPostsPage } from './other-posts.page';

import { OtherPostsPageRoutingModule } from './other-posts-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    OtherPostsPageRoutingModule
  ],
  declarations: [OtherPostsPage]
})
export class OtherPostsPageModule {}
