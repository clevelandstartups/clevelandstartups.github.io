import { Route } from '@angular/router';
import { StartupsComponent } from './features/startups/startups/startups.component';

export const routes: Route[] = [
    {
        path: '',
        component: StartupsComponent
    },
    {
        path: '**',
        component: StartupsComponent
    }
];
