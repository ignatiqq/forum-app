import React from 'react';

import ProfileLogic from '@pages/Profile/ProfileLogic';
import { ProfileInfo } from '@molecules/index';
import { IUserProfileData } from '@api/gql/queries/profile/types';
import { ErrorTitle } from '@atoms/index';

export interface IProfileViewProps {
  data: IUserProfileData | undefined;
  isLoading: boolean;
  error: string | undefined;
}

const ProfileView: React.FC<IProfileViewProps> = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorTitle>Error: {error}</ErrorTitle>;
  }

  return (
    <>
      {data && (
        <div>
          <ProfileInfo image={data.avatarUrl} name={data.login} />
        </div>
      )}
    </>
  );
};

export default ProfileLogic(ProfileView);
