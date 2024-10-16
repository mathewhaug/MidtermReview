import {Component, OnInit} from '@angular/core';
import {ArtService} from '../Services/art.service';
import {NgForOf, NgIf} from '@angular/common';
import {GalleryDetailComponent} from '../gallery-detail/gallery-detail.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-gallery-list',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    GalleryDetailComponent
  ],
  templateUrl: './gallery-list.component.html',
  styleUrl: './gallery-list.component.css'
})
export class GalleryListComponent implements OnInit{

  //Local var to store an array of the list items
  artPieces: any[]=[];
  selectedArtPiece: any;
  constructor(private artService: ArtService,
              private router: Router) { };
  //We need a method to get our art pieces
  ngOnInit() {
    this.artPieces=this.artService.getArtPieces();
  }

  //Make out onSelect Method
  onSelect(id: Number){
    this.selectedArtPiece = this.artPieces.find(art => art.id ===id);
    console.log("Selected art piece", this.selectedArtPiece)//debugging
    this.router.navigate(['/art',id])
  }

}
