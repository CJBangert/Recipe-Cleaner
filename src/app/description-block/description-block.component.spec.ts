import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionBlockComponent } from './description-block.component';

describe('DescriptionBlockComponent', () => {
  let component: DescriptionBlockComponent;
  let fixture: ComponentFixture<DescriptionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
