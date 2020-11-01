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
    this.newsService.getNewsPromise().then(data => {
      this.news = data;
    }).catch(err => {
      console.error(err);
    })
  }

}
