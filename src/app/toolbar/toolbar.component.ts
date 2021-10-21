import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public beersService: BeersService) { }

  ngOnInit(): void {
  }

}
