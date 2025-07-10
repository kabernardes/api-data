import { describe, it, expect } from 'vitest';
import type { Post } from '../types/Post';
import {
  getPostsByUser,
  getPostsByTitleKeyword,
  getPostsTitles,
  getPostsWithLongBody,
  allPostsHaveTitle,
  changeArrayItem,
} from './postsUtils';

// Mock data para testes
const mockPosts: Post[] = [
  {
    id: 1,
    title: 'First Post',
    body: 'This is the first post content',
    user_id: 1,
  },
  {
    id: 2,
    title: 'Second Post About React',
    body: 'This is a very long post about React that has more than 100 characters in its body content to test our utility function that filters posts by body length',
    user_id: 1,
  },
  {
    id: 3,
    title: 'Third Post',
    body: 'Short content',
    user_id: 2,
  },
  {
    id: 4,
    title: 'React Tutorial',
    body: 'This is another very long post that contains detailed information about React development and has more than 100 characters in its body content',
    user_id: 2,
  },
  {
    id: 5,
    title: '',
    body: 'Post without title',
    user_id: 3,
  },
];

describe('postsUtils', () => {
  describe('getPostsByUser', () => {
    it('returns posts for a specific user', () => {});

    it('returns empty array for non-existent user', () => {});

    it('returns empty array when there is no posts', () => {});
  });

  describe('getPostsTitles', () => {
    it('returns only titles and ids from the post object', () => {});

    it('returns empty array when there are no posts', () => {});
  });

  describe('getPostsWithLongBody', () => {
    it('returns posts with body longer than 100 characters', () => {});

    it('do not return posts with short body', () => {});

    it('returns empty array when there are no posts', () => {});
  });

  describe('allPostsHaveTitle', () => {
    it('returns false when some posts do not have title', () => {});

    it('returns true when all posts have title', () => {});

    it('returns false when there are no posts', () => {});
  });

  describe('changeArrayItem', () => {
    it('changes the item at the specified position', () => {
      const arr = [1, 2, 3, 4];
      const result = changeArrayItem(arr, 2, 99);
      expect(result).toEqual([1, 2, 99, 4]);
    });

    it('does not mutate the original array', () => {
      const arr = [5, 6, 7];
      changeArrayItem(arr, 1, 42);
      expect(arr).toEqual([5, 6, 7]);
    });

    it('returns the same array if positionToChange is out of bounds (negative)', () => {
      const arr = [10, 20, 30];
      const result = changeArrayItem(arr, -1, 99);
      expect(result).toEqual([10, 20, 30]);
    });

    it('returns the same array if positionToChange is out of bounds (too large)', () => {
      const arr = [10, 20, 30];
      const result = changeArrayItem(arr, 5, 99);
      expect(result).toEqual([10, 20, 30]);
    });

    it('works with an empty array', () => {
      const arr: number[] = [];
      const result = changeArrayItem(arr, 0, 1);
      expect(result).toEqual([]);
    });
  });
});
