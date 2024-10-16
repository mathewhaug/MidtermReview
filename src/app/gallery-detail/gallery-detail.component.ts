import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ArtService} from '../Services/art.service';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css'],
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  standalone: true
})
export class GalleryDetailComponent implements OnInit {
  @Input() set artPiece(value: any) {
    this._artPiece = value;
    console.log('Art Piece in Detail Component:', this._artPiece); // Debugging statement
  }
  private _artPiece: any;

  get artPiece(): any {
    return this._artPiece;
  }

  constructor(private route: ActivatedRoute, private artService: ArtService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.artPiece = this.artService.getArtPieceById(id);
    });
  }
}
