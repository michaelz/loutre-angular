import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ArticleService {
    constructor(public http: Http) { }

    getData() {
        return this.http.get("http://api.loutre.ch")
            .map((res: Response) => { 
                let result;
                
                result = res.json().map(article => {
                    article.slug =  decodeURI(article.slug)
                    return article;
                })
                return result;
            
            }); //records in this case
    }
}
