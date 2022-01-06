import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { User } from 'src/app/shared/models/User';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  public users: User[] = [];

  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.httpService.getAllUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

  editUser(userId: number): void {
    console.info(userId);
  }

  deleteUser(userId: number): void {
    this.httpService.removeUser(userId)
      .subscribe(() => {
        this.getAllUsers();
      });
  }

  displayedColumns: string[] = ['userId', 'name', 'birthdate', 'imageUrl', 'edit', 'delete'];

}