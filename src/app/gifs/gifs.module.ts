import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { OutputsComponent } from './outputs/outputs.component';

@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    OutputsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }