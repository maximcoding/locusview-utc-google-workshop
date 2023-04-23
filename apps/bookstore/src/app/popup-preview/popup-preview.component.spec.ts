import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPreviewComponent } from './popup-preview.component';

describe('PopupPreviewComponent', () => {
  let component: PopupPreviewComponent;
  let fixture: ComponentFixture<PopupPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
