import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Album, Artist} from '../artist';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
   id: string;
  album: Album[];

  constructor(
      private spotifyService: SpotifyService, private route: ActivatedRoute) {}
  ngOnInit() {
        this.route.params.map(params => params['id']).subscribe((id) => {
          this.spotifyService.getAlbum(id)
                .subscribe(album => {
                  this.album = album;
                })
        });
    }

}
