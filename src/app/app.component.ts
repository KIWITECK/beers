import { Component } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private apiBaseUrl = 'https://api.punkapi.com/v2/beers';
  public beers : any[] = [];
  public beersAll: any[] = [];
  public page = 1;
  public abvState = 1;
  public searchterm = '';
  public viewType = 0;
  constructor(private httpClient: HttpClient){
    this.getBeers()
  }
  getBeers(){
    this.httpClient.get(this.apiBaseUrl,{params:{
      'per_page': 8,
      'page': this.page
    }}).subscribe((beers:any)=>{
      this.beers = beers;
      this.beersAll = beers;
      this.search()
    });
  }
  search(){
    let text = this.searchterm;
    if(text){
      this.beers = this.beersAll.filter(beer=>
        beer.tagline.toLowerCase().indexOf(text.toLowerCase()) > -1
      )
    }else{
      this.beers = this.beersAll
    }
  }
  navigate(direction: 1 | -1){
    if(this.page === 1 && direction === -1) return;
    this.page = this.page + direction; 
    this.getBeers();
  }
  chageAbvState(){
    if(this.abvState < 3){
      this.abvState += 1 
    }else{
      this.abvState = 1
    }
  }
  changeViewType(){
    if(this.viewType < 1){
      this.viewType += 1 
    }else{
      this.viewType = 0
    }
  }
}
