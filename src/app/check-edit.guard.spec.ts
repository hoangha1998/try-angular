import { TestBed, async, inject } from '@angular/core/testing';

import { CheckEditGuard } from './check-edit.guard';

describe('CheckEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckEditGuard]
    });
  });

  it('should ...', inject([CheckEditGuard], (guard: CheckEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});
