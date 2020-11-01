import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './pages/comments/comments.component';
import { NewsComponent } from './pages/news/news.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { Page404Component } from './pages/page404/page404.component';
import { TitularesComponent } from './pages/titulares/titulares.component';

const routes: Routes = [
  { path:'', redirectTo:'noticias', pathMatch:'full'},
  { path:'titulares', component: TitularesComponent},
  { path:'noticias', component: NoticiasComponent},
  { path:'noticias/:id', component:CommentsComponent},
  { path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
