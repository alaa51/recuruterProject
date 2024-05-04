import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidatRegisterComponent } from './condidat-register.component';

describe('CondidatRegisterComponent', () => {
  let component: CondidatRegisterComponent;
  let fixture: ComponentFixture<CondidatRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidatRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondidatRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
