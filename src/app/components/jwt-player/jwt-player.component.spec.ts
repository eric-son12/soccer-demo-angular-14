import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtPlayerComponent } from './jwt-player.component';

describe('JwtPlayerComponent', () => {
  let component: JwtPlayerComponent;
  let fixture: ComponentFixture<JwtPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JwtPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JwtPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
