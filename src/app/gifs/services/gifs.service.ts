import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifsResponse, Data } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private httpClient: HttpClient) { 
    if( localStorage.getItem('history') ) {
      this._history = JSON.parse( localStorage.getItem('history')! ) || [];
    }

    if( localStorage.getItem('data') ) {
      this._results = JSON.parse( localStorage.getItem('data')! ) || [];
    }
  }

  private _url: string = 'https://api.giphy.com/v1/gifs/search';
  private _history: string[] = [];
  private _apikey : string = 'PuFAgL97JniU1I2l44CXJEyJnf5XZwQO';
  private _results : Data [] = [];
  private _limit : number = 10;
  private _limitLocaleStorage : number = 20;
  private _locale : string = 'en';

  get url() {
    return this._url;
  }
  get history() {    
    return [...this._history];
  }
  get results() {
    return [...this._results];
  }
  get apikey() {
    return this._apikey;
  }
  get limit() {
    return this._limit;
  }
  get limitLocaleStorage() {
    return this._limitLocaleStorage;
  }
  get locale() {
    return this._locale;
  }

  public searchGifs( query: string ) {

    if(query.trim().length != 0 && !this._history.includes(query.trim().toUpperCase())) { 
      this._history.unshift(query.trim().toUpperCase());      
      this._history = this.history.splice(0,this.limitLocaleStorage);

      localStorage.setItem('history', JSON.stringify(this._history));
      console.log(this._history);
    }

    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('q', query.trim())
      .set('limit', this.limit)
      .set('offset', 0)
      .set('rating', 'g')
      .set('lang', this.locale);
    //this.httpClient.get<GifsResponse>(`${this.url},{params})  

    
    this.httpClient.get<GifsResponse>(`${this.url}?api_key=${this.apikey}&q=${query}&limit=${this.limit}&offset=0&rating=g&lang=${this.locale}`)
      .subscribe( (response: GifsResponse) => {
        this._results = response.data;

        localStorage.setItem('data', JSON.stringify(this._results));
        console.log(response)
      });

    
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=PuFAgL97JniU1I2l44CXJEyJnf5XZwQO&q=300&limit=10&offset=0&rating=g&lang=en')
    //   .then( resp => {
    //     resp.json().then(data => { console.log(data) })
    //   })    
    //async function
    //const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=PuFAgL97JniU1I2l44CXJEyJnf5XZwQO&q=300&limit=10&offset=0&rating=g&lang=en');
    //const data = resp.json();
  }

  public searchGifsGo( query: string, limit: number, locale: string ) {

    if(query.trim().length != 0 && !this._history.includes(query.trim().toUpperCase())) { 
      this._history.unshift(query.trim().toUpperCase());
      
      if(limit <= 0 || limit > 50) {
        limit = 1;
      }

      this._history = this.history.splice(0, this.limitLocaleStorage);

      localStorage.setItem('history', JSON.stringify(this._history));
      console.log(this._history);

      this.httpClient.get<GifsResponse>(`${this.url}?api_key=${this.apikey}&q=${query}&limit=${limit}&offset=0&rating=g&lang=${locale}`)
      .subscribe( (response: GifsResponse) => {
        this._results = response.data;

        localStorage.setItem('data', JSON.stringify(this._results));
        console.log(response)
      });

    }else {
      alert('Empty string !!!');
    }
    

  }
}
