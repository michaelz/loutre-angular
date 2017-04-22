import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './_services/article.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { MainPipe} from './_pipes/mainPipes.module';
import { ArchivesComponent } from './archives/archives.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    AboutComponent,
    ArchivesComponent,
  ],
  imports: [
    BrowserModule,
    MainPipe,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }