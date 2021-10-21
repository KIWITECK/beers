import { Component } from '@angular/core';
import { BeersService } from './beers-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public beersService: BeersService){
  }
}
