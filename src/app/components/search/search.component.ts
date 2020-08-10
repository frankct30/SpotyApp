import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'clq-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  loading:boolean;
  artists:any[]=[];
  constructor(private spotiServices:SpotifyService ) { 
    
  }
  

  buscar(termino:string){
    this.loading = true;
    console.log(termino);
    this.spotiServices.getAccessToken().then((response:any)=>{
      this.spotiServices.getArtists(termino,response.access_token).subscribe((data:any)=>{
        console.log(data);     
        this.artists = data;
        this.loading = false;
      });
 
    });
    
  }

}
