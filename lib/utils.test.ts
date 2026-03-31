import { cn } from './utils.ts';
import assert from 'node:assert';
import { describe, it } from 'node:test';

describe('utils cn()', () => {
  it('should merge basic class names', () => {
    assert.strictEqual(cn('a', 'b', 'c'), 'a b c');
  });

  it('should merge Tailwind classes and resolve conflicts', () => {
    assert.strictEqual(cn('p-2', 'p-4'), 'p-4');
    assert.strictEqual(cn('text-red-500', 'text-blue-500'), 'text-blue-500');
    assert.strictEqual(cn('flex', 'inline-flex'), 'inline-flex');
  });

  it('should handle conditional classes', () => {
    assert.strictEqual(cn('a', true && 'b', false && 'c'), 'a b');
    assert.strictEqual(cn('a', { b: true, c: false }), 'a b');
    assert.strictEqual(cn('a', undefined, null, 'b'), 'a b');
  });

  it('should handle arrays of classes', () => {
    assert.strictEqual(cn(['a', 'b'], 'c'), 'a b c');
    assert.strictEqual(cn(['p-2', 'text-red-500'], ['p-4']), 'text-red-500 p-4');
  });
});
