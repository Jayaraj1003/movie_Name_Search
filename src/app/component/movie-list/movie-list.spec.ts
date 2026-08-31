import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, RouterLink } from '@angular/router';
import { MovieList } from './movie-list';

describe('MovieList', () => {
  let component: MovieList;
  let fixture: ComponentFixture<MovieList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieList, RouterLink],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should link each movie to its details page', () => {
    component.movies = [
      {
        id: 123,
        title: 'Inception',
        poster_path: '',
        release_date: '2010-07-16',
        vote_average: 8.8,
        overview: 'A dream within a dream.',
      },
    ];

    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('a[ng-reflect-router-link="/movieList,123"]');
    expect(link).not.toBeNull();
  });
});
