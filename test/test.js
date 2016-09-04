'use strict';
const assert = require('power-assert');
const fizzbuzz = require('../');

describe('fizzbuzz', () => {
    it('returns fizzbuzz when divisible by 15', () => {
        assert(fizzbuzz(45) === 'fizzbuzz');
    });

    it('returns fizz when divisible by 3', function() {
        assert(fizzbuzz(9) === 'fizz');
    });

    it('returns buzz when divisible by 5', function() {
        assert(fizzbuzz(10) === 'buzz');
    });
});
