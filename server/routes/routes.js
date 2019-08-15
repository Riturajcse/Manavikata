var express = require('express');
var router = express.Router();
var bdMembers = require('../services/bdMembers');
var members = require('../services/member');
var bdMembersApiService = new bdMembers();
var memberApiService = new members();


// Blood Donations Api routes
router.get('/bdMembers/', bdMembersApiService.index.bind(bdMembersApiService));
router.post('/bdMembers/', bdMembersApiService.create.bind(bdMembersApiService));

// Members Api routes
router.get('/members/', memberApiService.index.bind(memberApiService));
router.post('/members/', memberApiService.create.bind(memberApiService));

module.exports = router;
