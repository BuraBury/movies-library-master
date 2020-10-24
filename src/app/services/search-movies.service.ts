import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {SearchMovieApi} from '../../models';

/* deklarowanie serwisu
 dalsza czesc w app.module.ts */

@Injectable({providedIn: 'root'})
export class SearchMoviesService {
  constructor(private http: HttpClient) {
  }

  public consoleState(): void {
    console.log('Działa');
  }

  public getMovieByTitle(title: string): Observable<SearchMovieApi> {
    /*
    *uzycie serwisu
    * klienta http
    * parametryzacja zapytania
    */
    return this.http.get<SearchMovieApi>(`${environment.baseApiUrl}&t=${title}`);
  }

  public getMovieById(id: string): Observable<SearchMovieApi> {
    return this.http.get<SearchMovieApi>(`${environment.baseApiUrl}&i=${id}`);
  }
}

