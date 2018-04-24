import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../_models/article.model';
import { AppComponent } from '../app.component';
import { Title } from '@angular/platform-browser';
import { routerTransition } from '../router.animations';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  animations: [ routerTransition ],

  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;
  slug: string;


  constructor(private route: ActivatedRoute, private _appComponent: AppComponent,private titleService: Title) { }


htmlDecode(input)
{
  let doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}


  ngOnInit() {

    window.scrollTo(0,0);

    this.route.url.subscribe(segments => {
      let urlArray: string[] = [];
      segments.forEach(element => {
        urlArray.push(element.path);
      });

      let slug: string = '/' + urlArray.join('/');

      if (!this._appComponent.articles) {
        this._appComponent.loadArticles()
          .subscribe(articles => {
            this.article = articles.filter(function (article) {
              return article.slug === slug;
            })[0];              
            
            this.titleService.setTitle(this.htmlDecode(this.article.title) +" | Loutre.ch");
          });
      } else {
        this.article = this._appComponent.articles.filter(function (article) {
          
          return article.slug == slug;
        })[0];
        this.titleService.setTitle(this.htmlDecode(this.article.title) +" | Loutre.ch");
        
      }
    })








  }

  ngOnDestroy() {
  }

}
