import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'clq-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items :any[]=[];
  constructor(private router:Router) { }

  ngOnInit() {
  }

  detailsArtist(item){
      let artistId;
      if(item.type ==='artist'){
        artistId = item.id;
      }
      else{
        artistId = item.artists[0].id;
      }

      console.log(artistId);

      this.router.navigate(['/artist',artistId])
      
  }
}
