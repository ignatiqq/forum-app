import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { GET_USER_PROFILE_INFO } from '@api/gql/queries/profile';
import { IUserProfileData } from '@api/gql/queries/profile/types';

const ProfileLogic = (Component: React.FC) => () => {
  const params = useParams();
  const [getUserProfileData, { loading, data, error }] =
    useLazyQuery<IUserProfileData>(GET_USER_PROFILE_INFO);

  useEffect(() => {
    if (params?.id) {
      getUserProfileData({
        variables: {
          login: params.id
        }
      });
    }
  }, [params]);

  console.log(loading, data, error);
  return <Component />;
};

export default ProfileLogic;
