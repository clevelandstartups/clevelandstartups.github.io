import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartupsComponent } from './startups/startups.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StartupsComponent],
  exports: [StartupsComponent]
})
export class StartupsModule { }