const assert = require('chai').assert;
const Bunny = require('../../lib/models/bunny');
const db = require('../e2e/_db');

const expectedValidation = () => { throw new Error('expected validation errors'); };

describe('bunny model', () => {
    const bunny = new Bunny({
        title: 'cuty-pie',
        description: 'fuzy wuzy and cuddly',
        url:'www.ifonly.com'
    });
    return bunny.validate();
});

describe('validation failures', () => {
    it('title and url are required', () => {
        const bunny2 = new Bunny();
        return bunny2.validate()
            .then(expectedValidation,
            err => {
                const errors = err.errors;
                assert.ok(errors.url);
            });
    });
});