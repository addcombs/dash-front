import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpService } from '../core/http.service';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private breakpointObserver: BreakpointObserver,
    private httpService: HttpService
  ) { }

  public users: User[] = [];

  ngOnInit(): void {
    this.getAllUsers();
  }

  /** Based on the screen size, switch from standard to one column per row */
  cols = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return 3;
      }
      return 1;
    })
  );

  getAllUsers(): void {
    this.httpService.getAllUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

  createNewUser(id: string, fname: string, lname: string, imageurl: string, birthdate: string) {
    this.httpService.createNewUser(new User(id, fname, lname, imageurl, new Date(birthdate)))
      .subscribe();
  }

  // logUsers(users: User[]) {
  //   for (const user of users) {
  //     console.log('User number: ' + user.userId);
  //     console.log('Name: ' + user.fName + ' ' + user.lName);
  //     console.log('Age: ' + user.birthdate.getFullYear());
  //     console.log('Image Url: ' + user.imageUrl);
  //   }
  // }

}
