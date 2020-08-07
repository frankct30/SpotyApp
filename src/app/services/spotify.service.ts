import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify services listo');
    
   }
   
   getAccessToken(){
    let urlPost = 'https://accounts.spotify.com/api/token';
    const payload = new HttpParams()
                    .set('grant_type', 'client_credentials')
                    .set('client_id',"6ab436b3f6244ec5bd9fdb2f88cc4865")
                    .set('client_secret', "3492c50e6b3c44f28108163a9d1c2539");
     return this.http.post(urlPost,payload).toPromise();
     //.pipe( map(data => { return data['access_token']}))
     /* .subscribe((data:any) =>{ 
        console.log(data.access_token);   
        return data.access_token;     
      });*/
   }
   
   getQuery(query:string,token:string){

      const url = `https://api.spotify.com/v1/${ query }`;
      let access_token = 'Bearer ' + token;     
      const headers = new HttpHeaders({'Authorization':access_token});
      return this.http.get(url,{headers});
   }

   getNewReleases(token){     
   /* let urlPost = 'https://accounts.spotify.com/api/token';
    const payload = new HttpParams()
                    .set('grant_type', 'client_credentials')
                    .set('client_id',"6ab436b3f6244ec5bd9fdb2f88cc4865")
                    .set('client_secret', "3492c50e6b3c44f28108163a9d1c2539");
     this.http.post(urlPost,payload)
      .subscribe((data:any) =>{ 
        console.log(data.access_token);   
        let access_token = 'Bearer ' + data.access_token;     

        const headers = new HttpHeaders({'Authorization':access_token})        
        this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
        .subscribe(data =>{ 
          console.log(data);        
        });
      });*/
        /*let access_token = 'Bearer ' + token;     
        const headers = new HttpHeaders({'Authorization':access_token});        */
        return this.getQuery('browse/new-releases',token)
        .pipe( map(data => { return data['albums'].items})) ;
   }

  getArtists(termino: string, token:string){
    
        /*let access_token = 'Bearer ' + token;     
        const headers = new HttpHeaders({'Authorization':access_token})*/        
        return this.getQuery(`search?q=${termino}&type=artist&limit=10` ,token)
        .pipe( map(data => {return data['artists'].items}));
   }

   getArtist(id: string, token:string){       
    return this.getQuery(`artists/${id}` ,token);    
  }
   
  getTopTracks(id: string, token:string){       
    return this.getQuery(`artists/${id}/top-tracks?country=us` ,token)
    .pipe( map(data => {return data['tracks']}));    
  }
}
