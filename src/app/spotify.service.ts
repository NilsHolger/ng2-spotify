import 'rxjs/add/operator/map';

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;
  private type: string = 'artist';
  private albumsUrl: string;
  private albumUrl: string;

  constructor(private http: Http) {}

  searchMusic(searchString: string) {
    this.searchUrl =
        `https://api.spotify.com/v1/search?query=${searchString}&offset=0&limit=20&type=${this.type}&market=US`;
    return this.http.get(this.searchUrl).map(response => response.json());
  }

  fetchArtist(id: string) {
    this.artistUrl = `https://api.spotify.com/v1/artists/${id}`;
    return this.http.get(this.artistUrl).map(response => response.json());
  }

  getAlbums(artistId: string){
    this.albumsUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this.http.get(this.albumsUrl).map(response => response.json());
  }

    getAlbum(albumId: string){
    this.albumUrl = `https://api.spotify.com/v1/albums/${albumId}`;
    return this.http.get(this.albumUrl).map(response => response.json());
  }

}
