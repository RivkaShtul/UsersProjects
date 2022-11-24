
/* --- STATE --- */
export interface UserDetails {
  name: string;
  teams: string;
  joinedAt: Date;
  avatar: string;
}

export interface ProjectInfo {
  id: string
  name: string
  score: number;
  durationInDays: number
  bugsCount: number
  madeDedline: boolean
}

export interface AppState {
  token: string;
  userDetails: UserDetails;
  projectsInfo: ProjectInfo[];
  serverErrorMessage: string | undefined;
}

export type ContainerState = AppState;

/* --- STATE --- */