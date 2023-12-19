// import React, { lazy } from "react";
import {
  ProfileContainer,
  ProfileEmail,
  ProfileImage,
  ProfileName,
} from "./style";

import noUserPhoto from "../../assets/images/noUser.webp";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const Profile = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <ProfileContainer>
      <ProfileImage alt="no user photo" src={noUserPhoto} />
      <div>
        <ProfileName>{auth.name}</ProfileName>
        <ProfileEmail>{auth.email}</ProfileEmail>
      </div>
    </ProfileContainer>
  );
};
