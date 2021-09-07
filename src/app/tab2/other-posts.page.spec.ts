import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherPostsPage } from './other-posts.page';

describe('OtherPostsPage', () => {
  let component: OtherPostsPage;
  let fixture: ComponentFixture<OtherPostsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OtherPostsPage]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
