import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileShellComponent } from './profile-shell.component';
import { RouterModule } from '@angular/router';
import { TabsComponent } from 'src/app/shared/ui/tabs/tabs.component';

describe('ProfileShellComponent', () => {
  let component: ProfileShellComponent;
  let fixture: ComponentFixture<ProfileShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileShellComponent, TabsComponent],
      imports: [RouterModule]
    });
    fixture = TestBed.createComponent(ProfileShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
