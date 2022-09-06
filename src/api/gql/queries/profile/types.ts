export interface IUserProfileData {
  login: string;
  bio: string;
  avatarUrl: string;
  followers: {
    totalCount: number;
  };
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
