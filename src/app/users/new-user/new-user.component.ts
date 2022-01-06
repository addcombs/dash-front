import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../core/http.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  constructor(
    private httpService: HttpService
  ) { }

  public formGroup = new FormGroup({

    userId: new FormControl('', [

      Validators.required,

    ]),
    firstName: new FormControl('', [

      Validators.required,

    ]),
    imageUrl: new FormControl('', [

      Validators.required,

    ]),
    birthdate: new FormControl('', [

      Validators.required,

    ])

  });

  public onSubmit(): void {
    const user : User = this.formGroup.value;
    user.lastName = "Combs";
    this.httpService.createNewUser(user).subscribe({
      next(user){
        console.log("User added " + user.firstName + " " + user.lastName)
      },
      error(msg) {
        console.log("Error: " + msg);
      }
    });
  }

}
