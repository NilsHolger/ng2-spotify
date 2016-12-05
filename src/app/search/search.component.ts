import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from '../artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchString: string;
  searchResult: Artist[];

  constructor(private spotifyService: SpotifyService) { }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchString).subscribe(result => {  
        console.log(result.artists.items);
          this.searchResult = result.artists.items;
      });
  }

  ngOnInit() {
  }

}
