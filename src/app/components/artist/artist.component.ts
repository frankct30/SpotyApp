import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'clq-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  loadingArtist:boolean;
  artist:any={};
  tracks:any[]= [];
   
  constructor(private router:ActivatedRoute, private spotify:SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe((params)=>{
      console.log(params['id']);
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
   }

  getArtist(id:string){
    this.loadingArtist = true;
      this.spotify.getAccessToken().then((token:any)=>{       
        this.spotify.getArtist(id,token.access_token).subscribe((artist)=>{
          this.artist = artist;
          this.loadingArtist = false;          
        })
      })
      
  }
  
  getTopTracks(id:string){
    this.loadingArtist = true;
      this.spotify.getAccessToken().then((token:any)=>{       
        this.spotify.getTopTracks(id,token.access_token).subscribe((tracks)=>{
          this.tracks = tracks;
          this.loadingArtist = false;       
          console.log(tracks);
             
        })
      })
      
  }

}
