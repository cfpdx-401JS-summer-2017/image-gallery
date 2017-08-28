const Router = require('express').Router;
const router = Router();
const Bunny = require('../models/bunny');

router
    .get('/', (req, res, next) => {
        Bunny.find()
            .lean()
            .select('title description url')
            .then(bunnies => res.send(bunnies))
            .catch(next);
    })
    .post('/', (req, res, next) => {
        new Bunny(req.body)
            .save()
            .then(pet => res.send(pet))
            .catch(next);
    });


module.exports = router;