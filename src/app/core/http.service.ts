import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of} from 'rxjs';
import { Member } from '../shared/models/member';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private cassandraUrl = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) { }

  getAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.cassandraUrl + '/members')
    .pipe(
      catchError(error => {
        console.log('Error caught while getting members: ' + error.error)
        return of();
      })
    )
  }

  createNewMember(member: Member){
    return this.http.post<Member>(this.cassandraUrl + '/addMember', member)
    .pipe(
      catchError(error => {
        console.log('Error caught while creating member: ' + error.error)
        return of();
      })
    )
  }

  removeMember(memberId: String){
    return this.http.delete<Member>(this.cassandraUrl + '/removeMember/' + memberId)
    .pipe(
      catchError(error => {
        console.log('Error caught while deleting member: ' + error.error)
        return of();
      })
    )
  }

  updateMember(member: Member){
    return this.http.put<Member>(this.cassandraUrl + '/updateMember', member)
    .pipe(
      catchError(error => {
        console.log('Error caught while updating member: ' + error.error)
        return of();
      })
    )
  }

}
