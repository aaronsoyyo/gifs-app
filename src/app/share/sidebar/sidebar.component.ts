import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  get gifList() {

    const gifList = this.gifsService.history;

    if(gifList.length > 0) return this.gifsService.history;
    else return;
  }

  public loadGifs( item: string ) {
    console.log("item: " + item);
    this.gifsService.searchGifs(item);
  }

}
