import assert from 'node:assert';
import { describe, it } from 'node:test';
import robots from './robots.ts';

describe('robots.ts', () => {
  it('should return the correct robots configuration', () => {
    const expected = {
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: "https://kamtech.online/sitemap.xml",
    };

    const actual = robots();

    assert.deepStrictEqual(actual, expected, 'Robots configuration should match the expected object structure');
  });
});
