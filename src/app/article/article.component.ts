import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../_models/article.model';
import { AppComponent } from '../app.component';
import { Title } from '@angular/platform-browser';
import { routerTransition } from '../router.animations';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  animations: [ routerTransition ],

  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;
  slug: string;
  loading = false;

  constructor(private route: ActivatedRoute,
     private _appComponent: AppComponent,
     private titleService: Title,
     private meta: Meta
    ) { }


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
        this.loading = true;
        this._appComponent.loadArticles()
          .subscribe(articles => {
            this.loading = false;
            this.setArticle(articles, slug);
          }, error => {
            this.loading = false;
          });
      } else {
        this.setArticle(this._appComponent.articles, slug);

      }
    })
  }

  setArticle(articles, slug) {
    let arts = articles.filter(function (article) {              
      return article.slug === slug || decodeURI(article.slug) === slug;
    });

    if (arts && arts.length > 0) {
      this.article = arts[0];
    } else {
      this.article = new Article();
      this.article.title = '404';
      this.article.teaser = 'Ceci est une erreur quatre cent quatre.'
      this.article.body = 'Désolé, la page demandée n\'a pas été trouvée.<br><br>';
    }
    
    this.titleService.setTitle(this.htmlDecode(this.article.title) +" | Loutre.ch");
    this.meta.updateTag({ name: 'description', content: this.article.teaser });
  }

  ngOnDestroy() {
  }

}
