var router = require('express').Router();
var Log = require('../db').import('../models/log');

router.get('/all', (req, res) => {
    Log.findAll({ where: { owner_id: req.user.id } })
        .then(
            function findSuccess(data) {
                res.status(200).json({
                    log: data,
                    message: "Data fetched."
                })
            },

            function findFail() {
                res.status(500).json({
                    message: "Data not found"
                })
            }
        )
})

router.get('/:id', (req, res) => {
    Log.findOne({ where: { id: req.params.id, owner_id: req.user.id } })
        .then(
            function findSuccess(log) {
                res.status(200).json({
                    log: log
                })
            },

            function findFail(err) {
                res.status(500).json({
                    message: "Data not found."
                })
            }
        )
})

router.post('/create', (req, res) => {
    Log.create({
        description: req.body.log.description,
        owner_id: req.user.id,
        definition: req.body.log.defintion,
        result: req.body.log.result,
    })
        .then(
            function createSuccess(log) {
                res.status(200).json({
                    log: log,
                    message: "Log created."
                })
            },

            function createFail(err) {
                res.status(500).send(err.message)
            }
        )
})

router.put('/update/:id', (req, res) => {
    Log.update({
        description: req.body.log.description,
        owner_id: req.user.id,
        definition: req.body.log.defintion,
        result: req.body.log.result,
    },
        {
            where: {
                id: req.params.id,
                owner_id: req.user.id
            }
        })
        .then(
            function updateSuccess(log) {
                res.status(200).json({
                    log: log,
                    message: "Successfully updated."
                })
            },

            function updateFail(err) {
                res.status(500).json({
                    message: err.message
                })
            }

        )
})

router.delete('/remove/:id', (req, res) => {
    Log.destroy({
        where: {
            id: req.params.id,
            owner_id: req.user.id
        }
    })
    .then(
        function deleteSuccess(log) {
            res.status(200).json({
                log: log,
                message: "Successfully deleted"
            })
        },

        function deleteFail(err) {
            res.status(500).json({
                error: err.message
            })
        }
    )
})

module.exports = router;