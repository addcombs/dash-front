import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../core/http.service';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  constructor(
    private HttpService: HttpService
  ) { }

  public formGroup = new FormGroup({

    userId: new FormControl('', [

      Validators.required,

    ]),
    firstName: new FormControl('', [

      Validators.required,

    ]),
    birthdate: new FormControl('', [

      Validators.required,

    ])

  });

  public onSubmit(): void {
    const newUser = new User(
      this.formGroup.controls.userId.value, 
      this.formGroup.controls.firstName.value,
      "Combs",
      this.formGroup.controls.imageUrl.value,
      this.formGroup.controls.birthdate.value,
    )
  }



}
