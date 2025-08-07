import { describe, it, expect } from 'vitest';
import HelloWorld from './HelloWorld';

describe('HelloWorld Component', () => {
  it('should return a div with "Hello, World!"', () => {
    const element = HelloWorld();
    expect(element.textContent).toBe('Hello, World!');
  });
});
