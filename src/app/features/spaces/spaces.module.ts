import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacesComponent } from './spaces/spaces.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpacesComponent],
  exports: [SpacesComponent]
})
export class SpacesModule { }
