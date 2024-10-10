import { Component, Input } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  imports: [
    NgIf
  ],
  standalone: true
})
export class GalleryDetailComponent {
  @Input() artPiece: any;
}
