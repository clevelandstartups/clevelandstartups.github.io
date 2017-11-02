import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StartupsModule } from './features/startups/startups.module';
import { PeopleModule } from './features/people/people.module';
import { EventsModule } from './features/events/events.module';
import { SpacesModule } from './features/spaces/spaces.module';
import { routes } from './routes';
// import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StartupsModule,
    PeopleModule,
    EventsModule,
    SpacesModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
