import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/article.model';
import { AppComponent } from '../app.component';
import { Title } from '@angular/platform-browser';
import { routerTransition } from '../router.animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [ routerTransition ],

  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  firstArticle: Article;
  homeArticles: Article[];
  loading = false;

  
  constructor(private _appComponent: AppComponent,private titleService: Title) {}
  ngOnInit() { 

    const NBHOMEARTICLES: number = 6
    
    this.titleService.setTitle('Loutre.ch | Le libre pour les fainéants');

    if (!this._appComponent.articles) {
      this.loading = true;
      this._appComponent.loadArticles()
        .subscribe(articles => {
          this.firstArticle = articles[0];
          this.homeArticles = articles.slice(1,NBHOMEARTICLES);
          this.loading = false;
        }, error => {
          this.loading = false;
        });
    } else {
      this.firstArticle = this._appComponent.articles[0];
      this.homeArticles = this._appComponent.articles.slice(1,NBHOMEARTICLES);
    }
  }
}

