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

  private users: User[] = [];
  private aidenImageUrl = "/assets/aiden_1.png"
  private avaImageUrl = "/assets/ava_1.png"
  private alexImageUrl = "/assets/alex_1.png"

  ngOnInit(): void {
    this.createNewUser('ac1', 'Adam', 'Combs', '', '10-03-1977');
    this.getAllUsers();
    // this.createCards();
  }

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(

    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Aiden', age: 12, image: this.aidenImageUrl, cols: 3, rows: 1 },
          { title: 'Ava', age: 10, image: this.avaImageUrl, cols: 3, rows: 1 },
          { title: 'Alex', age: 6, image: this.alexImageUrl, cols: 3, rows: 1 }
        ];
      }

      return [
        { title: 'Aiden', image: this.aidenImageUrl, age: 12, cols: 1, rows: 1 },
        { title: 'Ava', image: this.avaImageUrl, age: 10, cols: 1, rows: 1 },
        { title: 'Alex', image: this.alexImageUrl, age: 6, cols: 1, rows: 1 }
      ];
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
