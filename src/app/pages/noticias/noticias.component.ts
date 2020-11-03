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

  //Areglo para las fuentes
  sources = []

  fuentes: string = '';


  constructor(private newsService: NewsService) { } 

  ngOnInit(): void {
    this.doFuentes();
  }

  ngOnChanges() { }

  doSearch() {
    this.newsService.getNoticias(this.search, this.fuentes).then(data => {
      this.noticias = data;
      // console.log(this.fuentes);
    }).catch(err => {
      console.error(err);
    }) 
  }

  doFuentes(){
    this.newsService.getFuentes().then(data => {
      this.sources = data;
      // console.log(data.name);
    }).catch(err => {
      console.error(err);
    }) 
  }

}
