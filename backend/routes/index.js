const express = require('express');
const userPostsRouter = require('./userPosts');
const userProfilesRouter = require('./userProfiles');

const router = express.Router();

router.use('/userPosts', userPostsRouter);
router.use('/userProfiles', userProfilesRouter);

module.exports = router;
