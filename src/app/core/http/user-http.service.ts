import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of} from 'rxjs';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  private cassandraUrl = "http://localhost:1111";

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.cassandraUrl + '/users')
    .pipe(
      catchError(error => {
        console.log(error)
        return of();
      })
    )
  }

  createNewUser(user: User): Observable<User> {
    return this.http.post<User>(this.cassandraUrl + '/add-user', user)
    .pipe(
      catchError(error => {
        console.log(error)
        return of();
      })
    )
  }

  removeUser(userId: number): Observable<User> {
    return this.http.delete<User>(this.cassandraUrl + '/remove-user/' + userId)
    .pipe(
      catchError(error => {
        console.log(error)
        return of();
      })
    )
  }

  updateUser(user: User): Observable<User>{
    return this.http.put<User>(this.cassandraUrl + '/update-user', user)
    .pipe(
      catchError(error => {
        console.log(error)
        return of();
      })
    )
  }

}
