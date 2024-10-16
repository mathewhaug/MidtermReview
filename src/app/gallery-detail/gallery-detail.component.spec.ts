import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDetailComponent } from './gallery-detail.component';

describe('GalleryDetailComponent', () => {
  let component: GalleryDetailComponent;
  let fixture: ComponentFixture<GalleryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
