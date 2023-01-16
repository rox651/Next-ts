export interface AuthProps {
   userCredentials: UserCredentials;
}

export interface UserCredentials {
   userId?: number | string;
   username: string;
   password: string;
   email: string;
   isUserActive?: boolean;
}

export interface Inputs {
   username: string;
   password: string;
   email: string;
}
