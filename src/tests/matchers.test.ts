import { describe, expect, test } from '@jest/globals';
import { sum, diff } from '../utilities';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('diff module', () => {
  test('diff 1 - 2 to  not equal 3', () => {
    expect(diff(1, 2)).not.toBe(3);
  });
});

describe('object module', () => {
  test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  test('object fail assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).not.toEqual({one: 1, two: 3});
  });
});
