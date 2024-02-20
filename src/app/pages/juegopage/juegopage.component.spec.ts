import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegopageComponent } from './juegopage.component';

describe('JuegopageComponent', () => {
  let component: JuegopageComponent;
  let fixture: ComponentFixture<JuegopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegopageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuegopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
