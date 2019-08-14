var express = require('express');
var router = express.Router();
var bdMembers = require('../services/bdMembers');
var bdMembersApiService = new bdMembers();


// Users Api routes
router.get('/bdMembers/', bdMembersApiService.index.bind(bdMembersApiService));
router.post('/bdMembers/', bdMembersApiService.create.bind(bdMembersApiService));

module.exports = router;
