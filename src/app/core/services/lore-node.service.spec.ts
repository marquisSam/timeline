import { TestBed } from '@angular/core/testing';

import { LoreNodeService } from './lore-node.service';

describe('LoreNodeService', () => {
  let service: LoreNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoreNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
