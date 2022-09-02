export interface IUserProfileData {
  login: string;
  bio: string;
  avatarUrl: string;
  repositories: IRepositoriesInfo;
}

// REPOSITORIES TYPES

interface ISingleRepositoryData {
  id: string;
  createdAt: string;
  description: string;
  name: string;
}

interface IRepositoriesInfo {
  totalCount: number;
  edges: Array<{ node: ISingleRepositoryData }>;
}

// ISSUES TYPES

interface IIssueAuthor {
  url: string;
  login: string;
}

interface ISignleIssueData {
  id: string;
  author: IIssueAuthor;
  bodyUrl: string;
}

interface IIssuesData {
  totalCount: number;
  edges?: Array<{ node: ISignleIssueData }>;
}
