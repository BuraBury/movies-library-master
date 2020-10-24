import {Component, EventEmitter, Output} from '@angular/core';
import {SearchMovieApi} from '../../../models';
import {SearchMoviesService} from '../../services/search-movies.service';

@Component({
  selector: 'main-navbar',
  templateUrl: 'main-navbar.component.html'
})
export class MainNavbarComponent {
  @Output() public emitMovie = new EventEmitter<SearchMovieApi>(); // daje nam możliwość użycia emittera, potrzebna metoda aby go wywołać
  public searchQuery: string;
  public isSearchById = false;
  public movie: SearchMovieApi;

  constructor(private searchMovieService: SearchMoviesService) {
  }

  public searchMovie(): void {
    /*
    * czy zapytanie jest stringiem dluzszym niz 0
    * jesli jest dluzsza wykona metode serwisu
    */
    if (this.searchQuery === undefined || this.searchQuery.length === 0) {
      return;
    }
    if (this.isSearchById) {
      this.searchMovieService.getMovieById(this.searchQuery).subscribe((res: any) => {
        this.movie = res;
        this.emitMovie.emit(this.movie);
      });
    } else {
      this.searchMovieService.getMovieByTitle(this.searchQuery).subscribe((res: any) => {
        this.movie = res;
        this.emitMovie.emit(this.movie);
      });
    }
    this.searchQuery = undefined;
  }

  public setSearchById(): void {
    this.isSearchById = !this.isSearchById;
  }
}
