const Router = require('express').Router;
const router = Router();
const Bunny = require('../models/bunny');

router
    .get('/', (req, res, next) => {
        Bunny.find()
            .lean()
            .select('title description url')
            .then(bunnies => res.send(bunnies))
            .then(bunnies => console.log('===========>',bunnies))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        Bunny.findById(req.params.id)
            .lean()
            .then(bunny => {
                if(!bunny) res.status(404).send(`Cannot GET ${req.params.id}`);
                else res.send(bunny);
            })
            .catch(next);
    })
    .post('/', (req, res, next) => {
        const bunny = new Bunny(req.body);
        bunny
            .save()
            .then(Bunny => res.send(Bunny))
            .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        Bunny.findByIdAndRemove(req.params.id)
            .then(bunny => res.send( { removed: bunny !==null }))
            .catch(next);
    });


module.exports = router;