import { Component, Input } from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  standalone: true
})
export class GalleryDetailComponent {
  @Input() artPiece: any;
}
