import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingColorComponent } from './setting-color.component';

describe('SettingColorComponent', () => {
  let component: SettingColorComponent;
  let fixture: ComponentFixture<SettingColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
