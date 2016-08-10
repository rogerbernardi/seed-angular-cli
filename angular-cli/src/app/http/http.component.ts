import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  moduleId: module.id,
  selector: 'app-http',
  templateUrl: 'http.component.html',
  providers: [HttpService]
})
export class HttpComponent {
  items: any[] = [];
  asyncString = this.httpService.getData();

  constructor(private httpService: HttpService) {}

  onSubmit(username: string, email: string) {
    this.httpService.sendData({username: username, email: email})
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

  onGetData() {
    this.httpService.getOwnData()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) {
            myArray.push(data[key]);
          }
          this.items = myArray;
        }
      );
  }
}
