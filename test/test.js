'use strict';
const assert = require('power-assert');
const fizzbuzz = require('../');

describe('fizzbuzz', () => {
    it('returns fizzbuzz when divisible by 15', () => {
        assert(fizzbuzz(45) === 'fizzbuzz');
    });
});
