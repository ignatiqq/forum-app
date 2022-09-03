import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';

import type { IProfileViewProps } from '@pages/Profile/ProfileView';
import { GET_USER_PROFILE_INFO } from '@api/gql/queries/profile';
import { IUserProfileData } from '@api/gql/queries/profile/types';

const ProfileLogic = (Component: React.FC<IProfileViewProps>) => () => {
  const params = useParams();
  const [getUserProfileData, { loading, data, error }] = useLazyQuery<{ user: IUserProfileData }>(
    GET_USER_PROFILE_INFO
  );

  useEffect(() => {
    if (params?.id) {
      getUserProfileData({
        variables: {
          login: params.id
        }
      });
    }
  }, [params]);

  return <Component data={data?.user} isLoading={loading} error={error?.message} />;
};

export default ProfileLogic;
