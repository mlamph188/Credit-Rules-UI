import { TestBed } from '@angular/core/testing';

import { AppEndPoints, CoreModule } from '@app/core';

import { TestModule } from '@testhelpers/.';

describe('Service: AppEndPoints', () => {
  let appEndPoints: AppEndPoints;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule, CoreModule.forRoot()],
      providers: [AppEndPoints]
    });
    appEndPoints = TestBed.inject(AppEndPoints);
  });

  it('Should retrieve api endpoint', () => {
    expect(appEndPoints.API_ENDPOINT).toBe('mocked.url');
  });

});
