const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;
const child_process = require('child_process');

describe('bunnies api', () => {

    before(db.drop);
    before(() => child_process.execSync('mongoimport --file ./lib/bunnies/BunnyData.json --jsonArray --db image-gallery-test --collection bunnies'));

    it('initial /GET returns a list of 3', () => {
        return request.get('/api/bunnies')
            .then(req => {
                const bunnies = req.body;
                assert.deepEqual(bunnies.length, 3);
            });
    });
    let bunbun = {
        title: 'BunBun',
        description:'bouncy guy!',
        url:'www.fakeWeb.com'
    };
    function saveBunny(bunny) {
        return request
            .post('/api/bunnies')
            .send(bunny)
            .then(res => res.body);
    }
    it('roundtrips a new bunny', () => {
        return saveBunny(bunbun)
            .then(saved => {
                assert.ok(saved._id, 'saved has id');
                bunbun = saved;
            })
            .then(() => {
                return request.get(`/api/bunnies/${bunbun._id}`);
            })
            .then( res => res.body)
            .then(got => {
                assert.deepEqual(got, bunbun);
            });
    });
    it('deletes a bunny', () => {
        return request.delete(`/api/bunnies/${bunbun._id}`)
            .then(res => {
                assert.deepEqual(JSON.parse(res.text), bunbun);
            });
    });
    
});