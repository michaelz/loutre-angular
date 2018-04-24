import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import localeFrCH from '@angular/common/locales/fr-CH';
import localeFrCHExtra from '@angular/common/locales/extra/fr-CH';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './_services/article.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { MainPipe } from './_pipes/mainPipes.module';
import { ArchivesComponent } from './archives/archives.component';
import { LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DisqusModule } from "ngx-disqus";


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
    BrowserAnimationsModule,
    MainPipe,
    FormsModule,
    HttpModule,
    routing,
    DisqusModule.forRoot('loutre-ch'),

    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
  ],
  providers: [
    ArticleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
