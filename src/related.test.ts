import { expect, test } from 'vitest';
import { greet } from './related';

test('greet returns a greeting message', () => {
  expect(greet('World')).toBe('Hello, World!');
});
