import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private aidenImageUrl = "/assets/img/aiden1_250.png"
  private avaImageUrl = "/assets/img/ava1_250.png"
  private alexImageUrl = "/assets/img/alex1_250.png"
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Aiden', age: 12, image:this.aidenImageUrl, cols: 2, rows: 1 },
          { title: 'Ava', age: 10, image: this.avaImageUrl, cols: 2, rows: 1 },
          { title: 'Alex', age: 6, image: this.alexImageUrl, cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'Aiden',  image: this.aidenImageUrl, age: 12 , cols: 1, rows: 1 },
        { title: 'Ava',  image: this.avaImageUrl, age: 10, cols: 1, rows: 1 },
        { title: 'Alex',  image: this.alexImageUrl, age: 6, cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
