import {Component, Input, OnInit} from '@angular/core';
import {ArtService} from '../Services/art.service';
import {ActivatedRoute} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-gallery-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './gallery-detail.component.html',
  styleUrl: './gallery-detail.component.css'
})
export class GalleryDetailComponent implements OnInit{
/*
The following is very weird as I wanted to do this without
an observable
 */
  @Input() set artPiece (value: any){
    this._artPiece = value;

  }
  private _artPiece:any; //Private var that is the local copy of what to display

  get artPiece(): any{
    return this._artPiece;
  }

  //DI
  constructor(private route: ActivatedRoute,
              private artService: ArtService) {
  }

  //Setting the correct route before the component loads
  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      const id = Number(params.get('id'))
      this.artPiece= this.artService.getArtPieceById(id);
    })
  }

}
