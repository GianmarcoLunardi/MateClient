import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFotoComponent } from './list-foto.component';

describe('ListFotoComponent', () => {
  let component: ListFotoComponent;
  let fixture: ComponentFixture<ListFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListFotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
