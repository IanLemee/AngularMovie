import { Component } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { WatchlistService } from 'src/app/service/watchlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private moviesService: MoviesService,
    public watchlistService: WatchlistService
  ) {}

  openWatchList(): void {
    const watchlist = this.moviesService.getWatchList();
    this.watchlistService.toggleWatchlistVisibility();
  }

  // Adicione esta função para obter a visibilidade da watchlist
  isWatchlistVisible(): boolean {
    return this.watchlistService.isWatchlistVisible();
  }

  // Adicione esta função para alternar a visibilidade da watchlist
  toggleWatchlistVisibility(): void {
    this.watchlistService.toggleWatchlistVisibility();
  }
}
