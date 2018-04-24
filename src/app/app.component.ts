import { Pipe, Component } from '@angular/core';
import { Article } from './_models/article.model';
import { ArticleService } from './_services/article.service';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { routerTransition } from './router.animations';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ routerTransition ],

})
export class AppComponent {

  articles: Article[];
  private sub: any;
  constructor(
    public _articleService: ArticleService,
    public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics
  ) { }


  loadArticles() {
    return this._articleService.getData()

  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
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

