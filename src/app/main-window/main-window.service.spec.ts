import { TestBed } from '@angular/core/testing';

import { MainWindowService } from './main-window.service';

describe('MainWindowService', () => {
  let service: MainWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainWindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
