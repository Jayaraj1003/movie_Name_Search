import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MovieLists } from '../../service/movie-lists';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-movie-list',
  styleUrl: './movie-list.css',
  templateUrl: './movie-list.html',
})
export class MovieList {
  private movieService = inject(MovieLists);

  movieName = '';
  movies: any[] = [];
  loading = true;
  errorMessage = '';

  searchMovie() {
    if (!this.movieName.trim()) {
      this.movies = [];
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.movieService.searchMovies(this.movieName).subscribe({
      next: (response) => {
        this.movies = response.results ?? [];
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Movie search failed:', error);
        this.errorMessage = 'Something went wrong while loading movies.';
        this.movies = [];
        this.loading = false;
      },
    });
  }
}
