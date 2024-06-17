import { TestBed } from '@angular/core/testing';

import { RecipeService } from '../../app/service/recipe.service';

describe('RecetteService', () => {
  let service: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
