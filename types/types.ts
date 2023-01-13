export interface AuthProps {
    userCredentials: UserCredentials ,
    validateUser : (value:  UserCredentials)=>void
}

export interface UserCredentials{
    userId: number | string ,
    username: string ;
    password: string ;
    email: string,
    isUserActive?: boolean,
}

export interface Inputs{
    username: string,
    password: string,
    email: string
}