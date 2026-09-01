import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieLists {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.themoviedb.org/3';

  private apiKey = '79fe777f022fe9eda6f7dd8ff2b0f611';

  searchMovies(movieName: string) {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });

    return this.http.get<any>(`${this.apiUrl}/search/movie`, {
      headers,
      params: {
        api_key: this.apiKey,
        query: movieName,
        language: 'en-US',
        include_adult: 'false',
      },
    });
  }

  getMovieDetails(movieId: string, language: string = 'en-US') {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });

    return this.http.get<any>(`${this.apiUrl}/movie/${movieId}`, {
      headers,
      params: {
        api_key: this.apiKey,
        language: language,
      },
    });
    }
  }