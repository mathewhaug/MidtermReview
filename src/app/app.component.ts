import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {GalleryListComponent} from './gallery-list/gallery-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GalleryListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MidtermReviewf24';
}
