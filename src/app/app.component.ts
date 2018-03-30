import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  solist = [
    { id: '1', name: 'Lemon', selected: false },
    { id: '2', name: 'Lime', selected: false },
    { id: '3', name: 'Apple', selected: true },
  ];

  remove(so: any): void {
    let i = this.solist.indexOf(so);
    if (i >= 0) {
      this.solist.splice(i, 1);
    }
  }
}
