import { Route } from '@angular/router';
import { StartupsComponent } from './features/startups/startups/startups.component';
import { PeopleComponent } from './features/people/people/people.component';
import { EventsComponent } from './features/events/events/events.component';

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
        path: '**',
        component: StartupsComponent
    }
];
