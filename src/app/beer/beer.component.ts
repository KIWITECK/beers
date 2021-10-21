import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {
  @Input() id  = 0;
  @Input() view  = 0;
  @Input() name  = '';
  @Input() abv  = '';
  @Input() tagline  = '';
  @Input() image  = '';
  constructor() { }
  get isFavorite(){
    const favorite = localStorage.getItem(this.id+'');
    if(favorite){
      return 'favorite';
    }else{
      return 'favoriteborder';
    }
  }
  ngOnInit(): void {
  }
  toggleFavorite(){
    const id = this.id+'';
    const favorite = localStorage.getItem(id);
    console.log({favorite})
    if(favorite){
      localStorage.removeItem(id);
    }else{
      localStorage.setItem(id, new Date().toISOString());
    }
  }
}
