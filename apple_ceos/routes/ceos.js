const express = require('express'),
 router = express.Router(),
 ceoModel = require('../models/ceoModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
    const executiveData = await ceoModel.getAll();
    console.log('executive data: ',executiveData);
    
    res.render('template', {
      locals: {
          title: 'Apple Ceos!',
          data: executiveData
      },
      partials: {
          partial: 'partial-ceos'
      }
  });
});

module.exports = router;
