import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserHttpService } from 'src/app/core/http/user-http.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  constructor(
    private userHttpService: UserHttpService,
    private router: Router
  ) { }

  public formGroup = new FormGroup({

    userId: new FormControl('', [

      Validators.required,

    ]),
    firstName: new FormControl('', [

      Validators.required,

    ]),
    imageUrl: new FormControl('', [

    ]),
    birthdate: new FormControl('', [

      Validators.required,

    ])

  });

  public onSubmit(): void {

    if(this.formGroup.valid){
      const user : User = this.formGroup.value;
      user.lastName = "Combs";
      this.userHttpService.createNewUser(user).subscribe({
        next(user){
          console.log("User added " + user.firstName + " " + user.lastName)
        },
        error(msg) {
          console.log("Error: " + msg);
        }
      });
      this.router.navigate(['users']);
    }
  }

}
