import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementFeedComponent } from './advertisement-feed.component';

describe('AdvertisementFeedComponent', () => {
  let component: AdvertisementFeedComponent;
  let fixture: ComponentFixture<AdvertisementFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
