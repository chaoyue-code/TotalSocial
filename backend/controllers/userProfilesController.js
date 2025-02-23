const axios = require('axios');
const USER_PROFILES_API_URL = 'http://localhost:8000/userProfiles'; //8000 is for json server

const getUserProfileById = async function (req, res, next) {
  console.log('userProfiles', req.params.userId);
  const id = req.params.userId;
  if (!id) {
    return res.status(400).send('user id is required');
  }
  try {
    const response = await axios.get(`${USER_PROFILES_API_URL}/${id}`);
    const userProfile = response.data;
    res.status(200).json({
      msg: 'Get userProfile succeed',
      data: userProfile,
    });
  } catch (error) {
    //console.error(error);
    next(error);
  }
};

const getUserProfiles = async function (req, res, next) {
  console.log('getUserProfiles');
  try {
    const response = await axios.get(USER_PROFILES_API_URL);
    const userProfiles = response.data;
    res.status(200).json({
      msg: 'Get userProfiles succeed',
      data: userProfiles,
    });
  } catch (error) {
    //console.log('error');
    next(error);
  }
};

const patchUserProfilesById = async function (req, res, next) {
  //console.log('patchUserProfilesById');
  const id = req.params.userId;
  if (!id) {
    return res.status(400).send('Id is requested');
  }
  const newUserProfileData = req.body;
  try {
    const response = await axios.patch(
      `${USER_PROFILES_API_URL}/${id}`,
      newUserProfileData
    );
    const updatedUserProfile = response.data;
    res.status(200).json({
      msg: 'Update user profile succeed',
      data: updatedUserProfile,
    });
  } catch (error) {
    //console.log(error);
    next(error);
  }
};

module.exports = { getUserProfileById, getUserProfiles, patchUserProfilesById };
