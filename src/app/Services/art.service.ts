import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArtService {
  private artPieces = [
    {
      id: 1,
      name: 'Starry Night',
      artist: 'Vincent van Gogh',
      yearCreated: 1889,
      description: 'A famous painting depicting a swirling night sky above a quiet town.',
      imageUrl: 'assets/images/starry-night.jpg'
    },
    {
      id: 2,
      name: 'Mona Lisa',
      artist: 'Leonardo da Vinci',
      yearCreated: 1503,
      description: 'A portrait of a woman with a mysterious smile, painted by Leonardo da Vinci.',
      imageUrl: 'assets/images/mona-lisa.jpg'
    },
    {
      id: 3,
      name: 'The Persistence of Memory',
      artist: 'Salvador Dalí',
      yearCreated: 1931,
      description: 'A surreal painting by Salvador Dalí, featuring melting clocks in a desert landscape.',
      imageUrl: 'assets/images/persistence-of-memory.jpg'
    }
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
