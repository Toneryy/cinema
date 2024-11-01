// ProfileHeader.tsx
import React from "react";
import s from "../../../styles/Pages/Profile/profileHeader.module.scss";

interface ProfileHeaderProps {
  userEmail: string | undefined;
  onLogout: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ userEmail, onLogout }) => {
  return (
    <div className={s.profileHeader}>
      <span className={s.welcome}>Welcome, {userEmail}!</span>
      <button className={s.logoutButton} onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

export default ProfileHeader;
