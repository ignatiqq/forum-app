import React from 'react';

import ProfileLogic from '@pages/Profile/ProfileLogic';
import { ProfileInfo } from '@molecules/index';

const ProfileView = () => {
  return (
    <div>
      <ProfileInfo image={'https://html5css.ru/css/img_lights.jpg'} name={'Ignat'} />
    </div>
  );
};

export default ProfileLogic(ProfileView);
