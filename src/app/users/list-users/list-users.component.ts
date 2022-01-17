import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/core/http/user-http.service';
import { User } from 'src/app/shared/models/User';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  public users: User[] = [];

  constructor(private userHttpService : UserHttpService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userHttpService.getAllUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

  editUser(userId: number): void {
    console.info(userId);
  }

  deleteUser(userId: number): void {
    this.userHttpService.removeUser(userId)
      .subscribe(() => {
        this.getAllUsers();
      });
  }

  displayedColumns: string[] = ['userId', 'name', 'birthdate', 'imageUrl', 'edit', 'delete'];

}