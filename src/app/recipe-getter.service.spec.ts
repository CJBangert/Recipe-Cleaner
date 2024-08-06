import { TestBed } from '@angular/core/testing';

import { RecipeGetterService } from './recipe-getter.service';

describe('RecipeGetterService', () => {
  let service: RecipeGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
