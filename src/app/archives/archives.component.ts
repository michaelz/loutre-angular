import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/article.model';
import { AppComponent } from '../app.component';
import { Title } from '@angular/platform-browser';
import { routerTransition } from '../router.animations';


@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  animations: [ routerTransition ],

  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {
  articles: Article[];
  loading = false;
  constructor(private _appComponent: AppComponent,private titleService: Title) {}


  ngOnInit() { 
    window.scrollTo(0,0);

  this.titleService.setTitle('Archives | Loutre.ch');
  
  if (!this._appComponent.articles) {
    this.loading = true;
      this._appComponent.loadArticles()
        .subscribe(articles => {
          this.loading = false;
          this.articles = articles;
        
        }, error => {
          this.loading = false;
        });
    } else {
      this.articles = this._appComponent.articles;
    }
  }
}
