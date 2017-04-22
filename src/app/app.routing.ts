import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArchivesComponent } from './archives/archives.component';





const appRoutes: Routes = [
    { path: 'accueil', redirectTo: '', pathMatch: 'full'},
    { path: '', component: HomeComponent},
    { path: 'a-propos', component: AboutComponent},
    { path: 'archives', component: ArchivesComponent},
    { path: '**', component: ArticleComponent},
];

export const routing = RouterModule.forRoot(appRoutes);