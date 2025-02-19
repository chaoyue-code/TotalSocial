const axios = require('axios');
const USER_PROFILES_API_URL = 'http://localhost:8000/userProfiles'; //8000 is for json server

const getUserProfileById = async function (req, res) {
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
    console.error(error);
  }
};

module.exports = { getUserProfileById };
