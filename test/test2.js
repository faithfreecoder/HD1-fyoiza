(function () {
  'use strict';
var jasmine = require('jasmine');

var jasmine = jasmine.expect;

var getPrimes = require('../lib/library2.js');

describe('Generate prime numbers in a List from 0 to n: ', function () {

      it('should return [2] for 2', function () {
        expect(getPrimes(2)).toEqual([2]);
      });

      it('should return [2,3] for 3', function () {
        expect(getPrimes(3)).toEqual([2,3]);
      });

      it('should return [2,3,5] for 6', function () {
        expect(getPrimes(6)).toEqual([2,3,5]);
      });

      it('should return [2,3,5] for 5', function () {
        expect(getPrimes(5)).toEqual([2,3,5]);
      });

      it('should return [2,3,4,5,7] for 8', function () {
        expect(getPrimes(8)).toEqual([2,3,5,7]);
      });

    });

})();