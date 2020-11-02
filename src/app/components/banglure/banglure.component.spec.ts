import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanglureComponent } from './banglure.component';

describe('BanglureComponent', () => {
  let component: BanglureComponent;
  let fixture: ComponentFixture<BanglureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanglureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanglureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
