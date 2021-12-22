import { Component, OnInit } from '@angular/core';
import { HttpService } from './core/http.service';
import { Member } from './shared/models/member';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {

    this.httpService.updateMember(new Member('ac4', 'Adam', 'Comb'))
      .subscribe();
    // this.httpService.getAllMembers()
    //   .subscribe((members: Member[]) => {
    //     this.logMembers(members);
    //   });
    // this.httpService.createNewMember(new Member('ac4', 'Adam', 'Combs'))
    //   .subscribe();
    this.httpService.getAllMembers()
      .subscribe((members: Member[]) => {
        this.logMembers(members);
      });
  }

  logMembers(members: Member[]) {
    for (const member of members) {
      console.log('Member number: ' + member.memberId);
      console.log('Name: ' + member.firstName + ' ' + member.lastName);
    }
  }
}
