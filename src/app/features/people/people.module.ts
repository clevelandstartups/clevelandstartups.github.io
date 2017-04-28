import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PeopleComponent],
  exports: [PeopleComponent]
})
export class PeopleModule { }
