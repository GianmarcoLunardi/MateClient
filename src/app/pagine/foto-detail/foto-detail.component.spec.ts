import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoDetailComponent } from './foto-detail.component';

describe('FotoDetailComponent', () => {
  let component: FotoDetailComponent;
  let fixture: ComponentFixture<FotoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FotoDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FotoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
