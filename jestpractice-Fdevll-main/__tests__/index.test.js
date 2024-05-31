/* eslint-disable*/
import { describe, expect, it } from '@jest/globals';
import * as funcs from '../index.js';

describe('task1', () => {
  it('should return undefined', () => {
    expect(funcs.convertToLowerOrUpperCase()).toBeUndefined();
    expect(funcs.convertToLowerOrUpperCase('s')).toBeUndefined();
  });
  it('should work fine', () => {
    expect(funcs.convertToLowerOrUpperCase(['request', 'response'], 'upper')).toEqual(['REQUEST', 'RESPONSE']);
    expect(funcs.convertToLowerOrUpperCase(['request', 'response'], 'upper')).not.toContain('request');
    expect(funcs.convertToLowerOrUpperCase(['request', 'response'], '123')).toEqual(['request', 'response']);
  });
  it('should work fine 2', () => {
    expect(funcs.convertToLowerOrUpperCase(['REQUEST', 'RESPONSE'], 'lower')).toEqual(['request', 'response']);
    expect(funcs.convertToLowerOrUpperCase(['REQUEST', 'RESPONSE'], 'lower')).not.toContain('REQUEST');
    expect(funcs.convertToLowerOrUpperCase(['REQUEST', 'RESPONSE'], '123')).toEqual(['REQUEST', 'RESPONSE']);
  });
});

describe('task2', () => {
  it('should return undefined', () => {
    expect(funcs.convertToFilteredLowerOrUpperCase()).toBeUndefined();
    expect(funcs.convertToFilteredLowerOrUpperCase('s')).toBeUndefined();
  });
  it('should work fine', () => {
    expect(funcs.convertToFilteredLowerOrUpperCase(['request', 'response'], 'upper')).toEqual(['REQUEST', 'RESPONSE']);
    expect(funcs.convertToFilteredLowerOrUpperCase(['request', 'response'], 'upper')).not.toContain('request');
    expect(funcs.convertToFilteredLowerOrUpperCase(['request', 'response'], '123')).toEqual(['request', 'response']);
    expect(funcs.convertToFilteredLowerOrUpperCase(['REQUEST', 'RESPONSE'], 'lower')).toEqual(['request', 'response']);
    expect(funcs.convertToFilteredLowerOrUpperCase(['REQUEST', 'RESPONSE'], 'lower')).not.toContain('REQUEST');
    expect(funcs.convertToFilteredLowerOrUpperCase(['REQUEST', 'RESPONSE'], '123')).toEqual(['REQUEST', 'RESPONSE']);
  });
  it('should work fine 2', () => {
    expect(funcs.convertToFilteredLowerOrUpperCase(['request', 123, 'response'], 'upper')).toEqual(['REQUEST', 'RESPONSE']);
  });
  describe('task3', () => {
    const user = [
      { name: 'Jonh', age: 14 },
      { name: 'Bob', age: 18 },
      { name: 'Ivan', age: 100 },
      { name: 'David', age: 0 },
    ];
    const result = [
      { name: 'Bob', age: 18 },
      { name: 'Ivan', age: 100 },
    ];

    it('should return undefined', () => {
      expect(funcs.filterUsersByAge()).toBeUndefined();
    });
    it('should work fine', () => {
      expect(funcs.filterUsersByAge(user)).toEqual(result);
    });
    describe('task4', () => {
      const users = [
        { name: 'John', age: 14, orthodox: false },
        { name: 'Bob', age: 18, orthodox: false },
        { name: 'Ivan', age: 100, orthodox: true },
        { name: 'David', age: 0, orthodox: true },
      ];

      const resultBoolean = [
        { name: 'Ivan', age: 100, orthodox: true },
        { name: 'David', age: 0, orthodox: true },
      ];

      it('should return undefined', () => {
        expect(funcs.filterUsersByParam()).toBeUndefined();
      });
      it('should work fine', () => {
        expect(funcs.filterUsersByParam(users, 'orthodox', true, '>')).toEqual(resultBoolean);
      });
    });
    describe('task4', () => {
      const users = [
        { name: 'John', age: 14, orthodox: false },
        { name: 'Bob', age: 18, orthodox: false },
        { name: 'Ivan', age: 100, orthodox: true },
        { name: 'David', age: 0, orthodox: true },
      ];

      const resultBoolean = [
        { name: 'Ivan', age: 100, orthodox: true },
        { name: 'David', age: 0, orthodox: true },
      ];
      
      it('should return undefined', () => {
        expect(funcs.filterUsersByParam()).toBeUndefined();
        expect(funcs.filterUsersByParam(users)).toBeUndefined();
        expect(funcs.filterUsersByParam(undefined, 'age')).toBeUndefined();
        expect(funcs.filterUsersByParam(undefined, 'age', 40, '>')).toBeUndefined();
        expect(funcs.filterUsersByParam(users, 'age', ['dada'], '>')).toBeNull();
        expect(funcs.filterUsersByParam(users, 'age', 18, 'y')).toBeUndefined();
        expect(funcs.filterUsersByParam(users, 'age', 18, 1)).toBeUndefined();
        expect(funcs.filterUsersByParam(users, 'age', 18)).toBeUndefined();
      });
      it('should work fine', () => {
        expect(funcs.filterUsersByParam(users, 'orthodox', true, '>')).toEqual(resultBoolean);
      });
    });
  });
});
