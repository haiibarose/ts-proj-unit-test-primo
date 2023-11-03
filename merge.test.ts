// merge.test.ts
import { merge } from './merge';

test('correctly merges two sorted arrays', () => {
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([1, 1, 1], [2, 2])).toEqual([1, 1, 1, 2, 2]);
    expect(merge([], [2, 2])).toEqual([2, 2]);
    expect(merge([1, 3, 5], [])).toEqual([1, 3, 5]);
    expect(merge([], [])).toEqual([]);
});

describe('merge function', () => {
  test('correctly merges two sorted arrays', () => {
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([1, 3], [2])).toEqual([1, 2, 3]);
    // You can add more test cases with different scenarios
  });

  test('works with empty arrays', () => {
    expect(merge([], [])).toEqual([]);
    expect(merge([1, 3, 5], [])).toEqual([1, 3, 5]);
    expect(merge([], [2, 4, 6])).toEqual([2, 4, 6]);
  });

  // Add more tests as needed to cover all cases
});
