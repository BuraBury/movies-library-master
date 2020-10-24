import {Component} from '@angular/core';
import {SearchMovieApi} from '../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'movies-library';
  public searchedMovie: SearchMovieApi;

  public onMovieEmit(movie: SearchMovieApi): void {
    this.searchedMovie = movie;
  }
}
