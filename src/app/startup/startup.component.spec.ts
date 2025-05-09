import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupsComponent } from './startup.component';

describe('StartupComponent', () => {
  let component: StartupsComponent;
  let fixture: ComponentFixture<StartupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartupsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StartupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
