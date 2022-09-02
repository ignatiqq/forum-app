import { IUserInfoResponse } from '@api/endpoints/github/user/types';
import { IUserStateInfo } from '@store/user/slice';

export const mappedUserInfoData = (data: IUserInfoResponse): IUserStateInfo => {
  return {
    id: data.id,
    login: data.login
  };
};
