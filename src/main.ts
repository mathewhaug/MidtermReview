import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';
import {GalleryDetailComponent} from './app/gallery-detail/gallery-detail.component';
import {GalleryListComponent} from './app/gallery-list/gallery-list.component';

const routes: Routes = [
  { path: 'art', component: GalleryListComponent },
  { path: 'art/:id', component: GalleryDetailComponent },
  { path: '', redirectTo: '/art', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
