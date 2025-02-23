const express = require('express');

const {
  getUserProfileById,
  getUserProfiles,
  patchUserProfilesById,
} = require('../controllers/userProfilesController');

const userProfilesRouter = express.Router();

//const USER_PROFILES_API_URL = 'http://localhost:8000/userProfiles'; //8000 is for json server

//GET get userProfiles by id /api/userProfiles/:userId
userProfilesRouter.get('/:userId', getUserProfileById);
module.exports = userProfilesRouter;

// GET get user profiles  /api/userProfiles
userProfilesRouter.get('/', getUserProfiles);

//PATCH update user profile by id /api/userProfiles/:userId
userProfilesRouter.patch('/:userId', patchUserProfilesById);
