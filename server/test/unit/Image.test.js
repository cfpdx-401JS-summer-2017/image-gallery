require('mongoose').Promise = Promise;
const assert = require('chai').assert;
const Image = require('../../lib/models/image');

const expectedValidation = () => { throw new Error('expected validation errors'); };

describe('images model', () => {
    
    it('validates a good model', () => {
        const image = new Image({ 
            title: 'Test Bunny Title', 
            description: 'Test Bunny Description', 
            url: 'testbunny@test.com' 
        });
        return image.validate();
    });
});