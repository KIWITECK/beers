import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  private apiBaseUrl = 'https://api.punkapi.com/v2/beers';
  public beersAll: any[] = [];
  public beers: any[] = [];
  public searchterm = '';
  public pagesFetched = 1;
  public page = 1;
  public abvState = 1;
  public perPage = 8;
  public maximumStorage = 1000;
  public viewType = 0;

  constructor(private httpClient: HttpClient) {
    this.fetchBeers();
  }
  fetchBeers() {
    this.httpClient
      .get(this.apiBaseUrl, {
        params: {
          per_page: this.perPage,
          page: this.pagesFetched,
        },
      })
      .subscribe((beers: any) => {
        if (beers.length) {
          this.beersAll = this.beersAll.concat(beers);
          this.beers = this.beersAll;
          this.search();
          if (
            beers.length === this.perPage &&
            this.pagesFetched < this.maximumStorage
          ) {
            this.pagesFetched++;
            this.fetchBeers();
          }
        }
      });
  }
  search(keep=false) {
    this.page = 1;
    let text = this.searchterm;
    if(!keep){if (text) {
      this.beers = this.beersAll.filter(
        (beer) => beer.tagline.toLowerCase().indexOf(text.toLowerCase()) > -1
      );
    } else {
      this.beers = this.beersAll;
    }}else{
      if (text) {
        this.beers = this.beers.filter(
          (beer) => beer.tagline.toLowerCase().indexOf(text.toLowerCase()) > -1
        );
      } else {
        this.beers = this.beers;
      }
    }
  }
  chageAbvState() {
    this.page = 1;
    if (this.abvState < 3) {
      this.abvState += 1;
    } else {
      this.abvState = 1;
    }
  }
  sortByABV() {
    this.chageAbvState();
    if (this.abvState === 3) {
      this.beers = this.beersAll;
    } else {
      this.beers = [...new Set(this.beersAll)].sort((a, b) => {
        if (a.abv > b.abv) {
          return this.abvState === 1 ? 1 : -1;
        } else {
          return this.abvState === 1 ? -1 : 1;
        }
      });
    }
    this.search(true);
  }
  changeViewType() {
    if (this.viewType < 1) {
      this.viewType += 1;
    } else {
      this.viewType = 0;
    }
  }
  navigate(direction: 1 | -1) {
    if (this.page === 1 && direction === -1) return;
    if (this.beers.length / this.perPage <= this.page) return;
    this.page = this.page + direction;
  }
}
