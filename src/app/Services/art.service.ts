import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArtService {
  private artPieces = [
    { id: 1, name: 'Mona Lisa', artist: 'Leonardo da Vinci', yearCreated: 1503 },
    { id: 2, name: 'The Starry Night', artist: 'Vincent van Gogh', yearCreated: 1889 },
    { id: 3, name: 'The Persistence of Memory', artist: 'Salvador Dalí', yearCreated: 1931 },
  ];

  getArtPieces() {
    return this.artPieces;
  }

  getArtPieceById(id: number) {
    return this.artPieces.find(art => art.id === id);
  }

  addArtPiece(artPiece: any) {
    this.artPieces.push(artPiece);
  }

  editArtPiece(updatedArt: any) {
    const index = this.artPieces.findIndex(art => art.id === updatedArt.id);
    if (index !== -1) {
      this.artPieces[index] = updatedArt;
    }
  }
}
