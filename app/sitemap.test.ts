import assert from 'node:assert';
import { describe, it } from 'node:test';
import sitemap from './sitemap.ts';

describe('sitemap', () => {
  it('should return the correct sitemap array', () => {
    const result = sitemap();

    assert.strictEqual(Array.isArray(result), true, 'sitemap should return an array');
    assert.strictEqual(result.length, 2, 'sitemap should return an array of length 2');

    const [homePage, blogPage] = result;

    // Test homePage
    assert.strictEqual(homePage.url, 'https://kamtech.online');
    assert.strictEqual(homePage.changeFrequency, 'weekly');
    assert.strictEqual(homePage.priority, 1);
    assert.ok(homePage.lastModified instanceof Date, 'lastModified should be a Date instance');

    // Check if the date is recent
    const now = new Date();
    const diffHome = now.getTime() - homePage.lastModified.getTime();
    assert.ok(diffHome >= 0 && diffHome < 1000 * 60 * 60, 'lastModified should be a recent Date');

    // Test blogPage
    assert.strictEqual(blogPage.url, 'https://kamtech.online/blog');
    assert.strictEqual(blogPage.changeFrequency, 'weekly');
    assert.strictEqual(blogPage.priority, 0.8);
    assert.ok(blogPage.lastModified instanceof Date, 'lastModified should be a Date instance');

    const diffBlog = now.getTime() - blogPage.lastModified.getTime();
    assert.ok(diffBlog >= 0 && diffBlog < 1000 * 60 * 60, 'lastModified should be a recent Date');
  });
});
