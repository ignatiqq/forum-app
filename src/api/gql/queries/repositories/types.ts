import { IGQLPageInfo } from '@api/gql/types';

export interface ISingleRepositoryData {
  id: string;
  createdAt: string;
  description: string;
  name: string;
  forkCount: number;
}

interface IRespositoriesNodeInfo extends ISingleRepositoryData, IIssuesCount {}

export interface IRepositoriesInfo {
  totalCount: number;
  edges: Array<{ node: IRespositoriesNodeInfo }>;
  pageInfo: IGQLPageInfo;
}

interface IIssuesCount {
  issues: {
    totalCount: number;
  };
}

export interface IRepositoriesByLoginResponse {
  user: {
    repositories: IRepositoriesInfo;
  };
}
