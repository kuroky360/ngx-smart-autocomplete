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
    setTimeout(() => {
      this.fetchData = this.genMockData(query);
    }, 200);
  }

  genMockData(keyword:string) {
    let mockData = [{"id":0,"name":"Albania"},{"id":1,"name":"Andorra"},{"id":2,"name":"Armenia"},{"id":3,"name":"Austria"},{"id":4,"name":"Azerbaijan"},{"id":5,"name":"Belarus"},{"id":6,"name":"Belgium"},{"id":7,"name":"Bosnia & Herzegovina"},{"id":8,"name":"Bulgaria"},{"id":9,"name":"Croatia"},{"id":10,"name":"Cyprus"},{"id":11,"name":"Czech Republic"},{"id":12,"name":"Denmark"},{"id":13,"name":"Estonia"},{"id":14,"name":"Finland"},{"id":15,"name":"France"},{"id":16,"name":"Georgia"},{"id":17,"name":"Germany"},{"id":18,"name":"Greece"},{"id":19,"name":"Hungary"},{"id":20,"name":"Iceland"},{"id":21,"name":"Ireland"},{"id":22,"name":"Italy"},{"id":23,"name":"Kosovo"},{"id":24,"name":"Latvia"},{"id":25,"name":"Liechtenstein"},{"id":26,"name":"Lithuania"},{"id":27,"name":"Luxembourg"},{"id":28,"name":"Macedonia"},{"id":29,"name":"Malta"},{"id":30,"name":"Moldova"},{"id":31,"name":"Monaco"},{"id":32,"name":"Montenegro"},{"id":33,"name":"Netherlands"},{"id":34,"name":"Norway"},{"id":35,"name":"Poland"},{"id":36,"name":"Portugal"},{"id":37,"name":"Romania"},{"id":38,"name":"Russia"},{"id":39,"name":"San Marino"},{"id":40,"name":"Serbia"},{"id":41,"name":"Slovakia"},{"id":42,"name":"Slovenia"},{"id":43,"name":"Spain"},{"id":44,"name":"Sweden"},{"id":45,"name":"Switzerland"},{"id":46,"name":"Turkey"},{"id":47,"name":"Ukraine"},{"id":48,"name":"United Kingdom"},{"id":49,"name":"Vatican City"}];
    mockData = mockData.filter(item => {
      return item.name.indexOf(keyword) !== -1;
    });
    return mockData;
  }
}
