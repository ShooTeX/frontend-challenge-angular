import { TestBed, waitForAsync } from '@angular/core/testing';
import { addClass, removeClass } from './dom';

describe('NotFoundComponent', () => {
  const functRemove = removeClass;
  const functAdd = addClass;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({}).compileComponents();
  }));

  it('should add class', () => {
    const element = document.createElement('div');
    functAdd('test', element);
    expect(element.className).toBe('test');
  });

  it('should remove class', () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'test');
    functRemove('test', element);
    expect(element.className).toBe('');
  });
});
