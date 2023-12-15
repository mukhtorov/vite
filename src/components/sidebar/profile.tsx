// import React, { lazy } from "react";
import {
  ProfileContainer,
  ProfileEmail,
  ProfileImage,
  ProfileName,
} from "./style";

// const noUserPhoto = lazy(() => import("../../assets/images/noUser.webp"));
import noUserPhoto from "../../assets/images/noUser.webp";

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImage alt="no user photo" src={noUserPhoto} />
      <div>
        <ProfileName>Sardorbek Mukhtorov</ProfileName>
        <ProfileEmail>sardor.edu@gmail.com</ProfileEmail>
      </div>
    </ProfileContainer>
  );
};
