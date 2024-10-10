import { Component, OnInit } from '@angular/core';
import { ArtService} from '../Services/art.service';
import { Router } from '@angular/router';
import {GalleryDetailComponent} from '../gallery-detail/gallery-detail.component';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css'],
  imports: [
    GalleryDetailComponent
  ],
  standalone: true
})
export class GalleryListComponent implements OnInit {
  artPieces: any[] = [];
  selectedArtPiece: any;

  constructor(private artService: ArtService, private router: Router) {}

  ngOnInit(): void {
    this.artPieces = this.artService.getArtPieces();
  }

  viewArtDetail(id: number): void {
    this.router.navigate(['/art', id]);
  }

  onSelect(artPiece: any): void {
    this.selectedArtPiece = artPiece;
  }
}
