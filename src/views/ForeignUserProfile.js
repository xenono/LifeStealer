import React, {useEffect, useState} from "react";
import axios from 'axios'
import PropTypes from "prop-types";
import CheckUserAuth from "../hoc/checkUserAuth";
import ProfilePage from "../components/pages/ProfilePage";
import Button from "../components/Button/Button";
import EditProfileForm from "../components/EditProfileForm/EditProfileForm";
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
    hobbyDescription: ""
  })


  useEffect(() => {
    const getProfile = async () => {
      const user = await axios.get(API_URL + "/getProfile/" + userId,{withCredentials: true})
      setUser(user.data)
    }
    try {
      getProfile()
    } catch(err){
      console.log(err)
      if(err.response){
        console.log(err.response.message)
      }
    }

  },[])
  return (
    <MainTemplate cookies={cookies}>
      <CheckUserAuth cookies={cookies}>
        <ProfilePage user={user}/>
      </CheckUserAuth>
    </MainTemplate>
  );
};

ForeignUserProfile.propTypes = {
  
};

export default ForeignUserProfile;