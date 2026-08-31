import { Routes } from '@angular/router';
import { MovieList } from './component/movie-list/movie-list';
import { MovieDetails } from './component/movie-details/movie-details';

export const routes: Routes = [
    {
        path:'', component:MovieList
    },
    {
        path: 'movieList/:id', component: MovieDetails
    }
];
