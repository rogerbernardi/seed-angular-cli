import { Component } from '@angular/core';
import { ItemsComponent } from './items/items.component';
import { HeaderComponent } from './header/header.component';
import { HttpComponent } from './http/http.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [ItemsComponent, HeaderComponent, HttpComponent],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
