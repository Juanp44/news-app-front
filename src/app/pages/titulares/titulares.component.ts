import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/global/services/news.service';

@Component({
  selector: 'app-titulares',
  templateUrl: './titulares.component.html',
  styleUrls: ['./titulares.component.scss']
})
export class TitularesComponent implements OnInit {

titulares = []

  constructor( private newsService:NewsService) { }

  ngOnInit(): void {
    this.newsService.getTop().then(data => {
      this.titulares = data.articles;
      console.log(data);
    }).catch(err => {
      console.error(err);
    })
  }

}
