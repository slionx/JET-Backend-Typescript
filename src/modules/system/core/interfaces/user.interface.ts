export interface IUser {
    login?: string;
    password?: number;
    checkValidity(ver_login: string, ver_password: string);
}
