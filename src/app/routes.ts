import { Route } from '@angular/router';
import { StartupsComponent } from './features/startups/startups/startups.component';
import { PeopleComponent } from './features/people/people/people.component';
import { EventsComponent } from './features/events/events/events.component';
import { SpacesComponent } from './features/spaces/spaces/spaces.component';

export const routes: Route[] = [
    {
        path: '',
        component: StartupsComponent
    },
    {
        path: 'people',
        component: PeopleComponent
    },
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: 'spaces',
        component: SpacesComponent
    },
    {
        path: '**',
        component: StartupsComponent
    }
];
