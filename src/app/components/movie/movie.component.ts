import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SearchMovieApi} from '../../../models';

@Component({
  selector: 'movie-component',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush <-- optymalizacja działania aplikacji
})
export class MovieComponent {
  @Input() public movie: SearchMovieApi;
}
