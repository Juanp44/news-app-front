import { Component, OnInit } from '@angular/core';
import{ NewsService } from '../../global/services/news.service' 

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  //Arreglo para guardar las noticias a busdcar
  noticias = []

  //Arrgeglo para guardar el input que quiere buscar
  buscar = '';

  onKey(event: any){
    this.buscar += event.target.value + ', ';
  }

  constructor( private newsService:NewsService) {}

  ngOnInit(): void {
    this.newsService.getNoticias().then(data => {
      this.noticias = data.articles;
      console.log(data);
    }).catch(err => {
      console.error(err);
    })
  }

}
