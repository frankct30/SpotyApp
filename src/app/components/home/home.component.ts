import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'clq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // paises:any[]=[];
  // constructor(private http:HttpClient) {
    
  //     console.log('Constructor del Home Hecho');
  //     this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //     .subscribe((countries:any) =>{
  //       this.paises = countries;
  //       console.log(countries);
  //     })
      
  //  }
  albums:any[] = [];
  loading:boolean;
  error:boolean;
  mensajeError :string;
  constructor(private spotify:SpotifyService){    
      
      this.loading = true;
      this.error = false; 
      this.spotify.getAccessToken().then((response:any)=>{
        console.log(response.access_token);        
        this.spotify.getNewReleases(response.access_token).subscribe((data:any)=>{
          console.log(data);     
          this.albums = data;
          this.loading = false;
        },(fail)=>{
          this.loading = false;  
          this.error = true;
          this.mensajeError = fail.error.error.message;
        });
      });
      
  } 
  ngOnInit() {
  }

}
