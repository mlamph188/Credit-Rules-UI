import { CommonModule } from '@angular/common';
import { async, inject, TestBed } from '@angular/core/testing';

import { WindowRefService } from './window-ref.service';

describe('Service: AuthContextService', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule],
        providers: [WindowRefService],
      });
    }),
  );

  it(
    'should construct',
    inject([WindowRefService], (service: WindowRefService) => {
      expect(service).toBeTruthy();
    }),
  );

  it(
    'should retrieve native window object',
    inject([WindowRefService], (service: WindowRefService) => {
      expect(service.nativeWindow).toBe(window);
    }),
  );
});
