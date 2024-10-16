import { Component, OnInit } from '@angular/core';
import { ArtService} from '../Services/art.service';
import { Router } from '@angular/router';
import {GalleryDetailComponent} from '../gallery-detail/gallery-detail.component';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css'],
  imports: [
    GalleryDetailComponent,
    NgForOf,
    NgOptimizedImage
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

  onSelect(id: number): void {
    this.selectedArtPiece = this.artPieces.find(art => art.id === id);
    console.log('Selected Art Piece:', this.selectedArtPiece); //Debugging
    this.router.navigate(['/art', id]);
  }

}
