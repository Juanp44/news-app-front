import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

news = [
  {
    title: 'Noticia 1'
  }, 
  {
    title: 'Noticla',
  }
]

  constructor(private httpClient:HttpClient) { }

  getNewsCallback(callback){
    setTimeout(() => {
      callback(this.news);
    } ,2000)
  }

  //GET para 'Top Headlines'
  getTop(country = ''):Promise<any>{
    // return this.httpClient.get('https://jsonplaceholder.typicode.com/posts').toPromise();
    return this.httpClient.get('http://localhost:3000/api/topheadlines/'+country).toPromise();
  }

  //GET para Noticias
  getNoticias(search = '', source = ''):Promise<any>{
    console.log("Search:",search);
    console.log("Source", source);
    // return this.httpClient.get('https://jsonplaceholder.typicode.com/posts').toPromise();
    // return this.httpClient.get('http://localhost:3000/api/noticias/'+source+'?search='+search).toPromise();
    const url = (('http://localhost:3000/api/noticias/'+source+'?search='+search))
    console.log(url);
    return this.httpClient.get('http://localhost:3000/api/noticias/'+source+'?search='+search).toPromise();

  }

  //GET para fuentes
  getFuentes():Promise<any>{
    // return this.httpClient.get('https://jsonplaceholder.typicode.com/posts').toPromise();
    return this.httpClient.get('http://localhost:3000/api/fuentes').toPromise();
  }
}
  