var express = require('express')
  , router = express.Router()
  , Interface = require('../models/interface')

router.get('/:id', function(req, res) {
  Interface.get(req.params.id, function (err, interface) {
    res.render('interfaces/interface', {interface: interface})
  })
})

module.exports = router