import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/global/services/news.service';

@Component({
  selector: 'app-titulares',
  templateUrl: './titulares.component.html',
  styleUrls: ['./titulares.component.scss']
})
export class TitularesComponent implements OnInit {

titulares = []
country:string = 'mx';
paisTemp = [
  {name: 'Mx'},
  {name: 'Us'}
];

  constructor( private newsService:NewsService) { }

  ngOnInit(): void {
    this.getTop()
  }

  getTop(country?){
    this.newsService.getTop(country).then(data => {
      this.titulares = data;
    }).catch(err => {
      console.error(err);
    })
  }

  setCountry(){
    this.getTop(this.country)
  }
}
