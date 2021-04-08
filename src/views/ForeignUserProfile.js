import React, {useEffect, useState} from "react";
import axios from 'axios'
import { Redirect } from "react-router";
import PropTypes from "prop-types";
import CheckUserAuth from "../hoc/checkUserAuth";
import ProfilePage from "../pages/ProfilePage";
import MainTemplate from "../templates/MainTemplate";

import {API_URL} from "../actions/action";

const ForeignUserProfile = ({ cookies, match }) => {
  const { userId } = match.params
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    profileImage: "",
    backgroundImage: "",
    job: "",
    country: "",
    city: "",
    introduction: "",
    workDescription: "",
    hobbyDescription: "",
    friendsList: []
  })
  const [error, setError] = useState(false)

  useEffect(() => {
    const getProfile = async () => {
      try {
        const user = await axios.get(API_URL + "/getProfile/" + userId,{withCredentials: true})
        setUser(user.data)
      } catch(err){
        if(err.response.data.message === "This is logged user"){
          setError(true)
        }
      }

    }
    getProfile()
  },[userId,error])

  if(error){
    return <Redirect to='/profile'/>
  }
  return (
    <MainTemplate cookies={cookies}>
      <CheckUserAuth cookies={cookies}>
        <ProfilePage user={user} userId={userId}/>
      </CheckUserAuth>
    </MainTemplate>
  );
};

ForeignUserProfile.propTypes = {
  cookies: PropTypes.object.isRequired,
  match: PropTypes.object
};

export default ForeignUserProfile;