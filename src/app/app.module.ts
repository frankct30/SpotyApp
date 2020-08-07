import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from'@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { CardsComponent } from './components/shared/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

//Import Routes 
import {ROUTES} from './app.routes';

//Import Services
import { SpotifyService } from './services/spotify.service';

//Import Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,    
    ArtistComponent, 
    NoimagePipe,
    DomseguroPipe,
    CardsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash:true})
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
