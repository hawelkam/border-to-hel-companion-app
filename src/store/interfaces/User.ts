export interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  nickname?: string;
  legs?: string[];
  teamId?: string | null;
  avgPace?: string;
}

export interface UserProfile {
  id: string;
  firstName?: string;
  lastName?: string;
  nickname?: string;
  avgPace?: string;
}
