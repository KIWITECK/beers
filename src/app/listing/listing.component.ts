import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers-service.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  constructor(public beersService: BeersService) { }

  ngOnInit(): void {
  }

}
