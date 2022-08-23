import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  @ViewChild('txtLimit') txtLimit!: ElementRef<HTMLInputElement>;

  public search( key: string) {
    this.gifsService.searchGifs(key);
    this.txtSearch.nativeElement.value = '';
    this.txtLimit.nativeElement.valueAsNumber = 1;   
  }

  public searchGo( key: string, limit: number, locale: string ) {
    
    limit = (Number.isInteger(limit))? limit : 1;    
    this.gifsService.searchGifsGo(key, limit, locale);
    this.txtSearch.nativeElement.value = '';

    this.txtLimit.nativeElement.valueAsNumber = limit;
    //this.txtLimit.nativeElement.valueAsNumber = limit;
  }

}
