import { IUserInfoResponse } from '@api/endpoints/github/user/types';
import { IUserStateInfoData } from '@store/user/slice';

export const mappedUserInfoData = (data: IUserInfoResponse): IUserStateInfoData => {
  return {
    id: data.id,
    login: data.login
  };
};
