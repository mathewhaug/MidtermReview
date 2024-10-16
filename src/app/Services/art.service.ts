import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  private artPieces = [ //Would be better to use an interface, but we wont so I struggle
    {
      id: 1,
      name: 'Starry Night',
      artist: 'Vincent van Gogh',
      yearCreated: 1889,
      description: 'A famous painting depicting a swirling night sky above a quiet town.',
      imageUrl: 'assets/Image2.jpg'
    },
    {
      id: 2,
      name: 'Mona Lisa',
      artist: 'Leonardo da Vinci',
      yearCreated: 1503,
      description: 'A portrait of a woman with a mysterious smile, painted by Leonardo da Vinci.',
      imageUrl: 'assets/Image3.png'
    },
    {
      id: 3,
      name: 'The Persistence of Memory',
      artist: 'Salvador Dalí',
      yearCreated: 1931,
      description: 'A surreal painting by Salvador Dalí, featuring melting clocks in a desert landscape.',
      imageUrl: 'assets/Image1.jpg'
    }
  ];
  /*
  I am not going to use observables just to show you an alt way
  Note, its garder to not
   */

  //To get art pieces
  getArtPieces(){
    return this.artPieces;
  }

  getArtPieceById(id: Number){
    //Now we have to search for a specific art piece.
    //This will be used in our paramerterized route
    return this.artPieces.find(art =>art.id === id);
  }

  constructor() { }
}
