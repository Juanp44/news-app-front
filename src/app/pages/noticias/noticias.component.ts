import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../global/services/news.service'

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  //Arreglo para guardar las noticias a busdcar
  noticias = []

  //Arrgeglo para guardar el input que quiere buscar
  search: string = '';



  constructor(private newsService: NewsService) { } 

  ngOnInit(): void {

  }

  ngOnChanges() { }

  doSearch() {
    this.newsService.getNoticias(this.search).then(data => {
      this.noticias = data;
      console.log(data);
    }).catch(err => {
      console.error(err);
    }) 
  }
}
