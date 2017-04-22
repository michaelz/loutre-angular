import { Pipe, Component } from '@angular/core';
import { Article } from './_models/article.model';
import { ArticleService } from './_services/article.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];
  private sub: any;
  constructor(public _articleService: ArticleService) { }


  loadArticles() {
    return this._articleService.getData()

  }

  ngOnInit() {
    this.sub = this.loadArticles()
      .subscribe(articles => {
        this.articles = articles;        
      })
  }
  

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

