import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    const firstName = new FormControl(this.auth.currentUser.firstName);
    const lastName = new FormControl(this.auth.currentUser.lastName);

    this.profileForm = new FormGroup({
      firstName,
      lastName
    });
  }

  saveProfile(formValues) {
    this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }

}
