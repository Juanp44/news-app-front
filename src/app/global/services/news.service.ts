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

  getNewsPromise():Promise<any>{
    // return this.httpClient.get('https://jsonplaceholder.typicode.com/posts').toPromise();
    return this.httpClient.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=73ec6161b0124edcaa0fe6eb0041df7a').toPromise();

  }
}
