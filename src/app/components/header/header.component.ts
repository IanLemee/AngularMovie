import { Component } from '@angular/core';
<<<<<<< HEAD
import { MoviesService } from 'src/app/service/movies.service';
import { WatchlistService } from 'src/app/service/watchlist.service';
=======
>>>>>>> 7b81db7 (first commit)

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

<<<<<<< HEAD
  constructor(
    private moviesService: MoviesService,
    public watchlistService: WatchlistService
  ) {}

  openWatchList(): void {
    const watchlist = this.moviesService.getWatchList();
    this.watchlistService.toggleWatchlistVisibility();
  }

  isWatchlistVisible(): boolean {
    return this.watchlistService.isWatchlistVisible();
  }

  toggleWatchlistVisibility(): void {
    this.watchlistService.toggleWatchlistVisibility();
  }
=======
>>>>>>> 7b81db7 (first commit)
}
