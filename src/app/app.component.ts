import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  displayData = [];

  fetchData = [];

  fetchMethod(query: string) {
    //mock server
    setTimeout(() => {
      this.fetchData = this.genMockData();
    }, 1500);
  }

  genMockData() {
    let mockData = [
      {
        id: '1',
        name: 'yoda'
      },
      {
        id: '2',
        name: 'delta'
      },
      {
        id: '3',
        name: 'master'
      },
      {
        id: '4',
        name: 'jedi'
      },
      {
        id: '5',
        name: 'judy'
      },
      {
        id: '6',
        name: 'yosida'
      }
    ];

    return mockData.slice(0, Math.floor(Math.random() * 6));
  }
}
