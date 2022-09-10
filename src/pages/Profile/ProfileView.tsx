import React from 'react';

import ProfileLogic from '@pages/Profile/ProfileLogic';
import { ProfileInfo } from '@molecules/index';
import { IUserProfileData } from '@api/gql/queries/profile/types';
import { ErrorTitle, Loader } from '@atoms/index';
import { Repositories } from '@layouts/Github/index';

export interface IProfileViewProps {
  data: IUserProfileData | undefined;
  isLoading: boolean;
  error: string | undefined;
}

const ProfileView: React.FC<IProfileViewProps> = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorTitle>Error: {error}</ErrorTitle>;
  }

  return (
    <>
      {data && (
        <div>
          <ProfileInfo image={data.avatarUrl} name={data.login} bio={data.bio} />
        </div>
      )}
      <Repositories />
    </>
  );
};

export default ProfileLogic(ProfileView);
