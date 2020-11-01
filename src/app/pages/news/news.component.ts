import { Component, OnChanges, OnInit } from '@angular/core';
import{ NewsService } from '../../global/services/news.service' 

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  news =[] 

  constructor( private newsService:NewsService) {}
  

  ngOnInit(): void {
    this.newsService.getTop().then(data => {
      this.news = data.articles;
      console.log(data);
    }).catch(err => {
      console.error(err);
    })
  }

}
