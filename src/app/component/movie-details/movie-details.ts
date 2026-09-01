import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieLists } from '../../service/movie-lists';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  imports: [CommonModule],
  selector: 'app-movie-details',
  styleUrl: './movie-details.css',
  templateUrl: './movie-details.html',
})
export class MovieDetails {
  private route = inject(ActivatedRoute);
  private movieService = inject(MovieLists);

  movie: any = null;
  loading = true;
  selectedLanguage = 'en-US';

  getGenreNames(): string {
    return this.movie?.genres?.map((genre: any) => genre.name).join(', ') || 'N/A';
  }

  ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get('id');

    if(movieId) {this.loadMovieDetails(movieId, this.selectedLanguage);
    } else {
      this.loading = false;
    }
  }
  loadMovieDetails(movieId: string, language: string) {
    this.loading = true;

    this.movieService.getMovieDetails(movieId, language).subscribe({
        next: (response: any) => {
          this.movie = response;
          this.loading = false;
        },

        error: (error: HttpErrorResponse) => {

          console.error('Error fetching movie details:', error);

          this.loading = false;
        },
      });
  }
  changeLanguage(language: string) {

    this.selectedLanguage = language;

    const movieId = this.route.snapshot.paramMap.get('id');

    if (movieId) {

      this.loadMovieDetails(movieId, this.selectedLanguage);
    }
  }
}