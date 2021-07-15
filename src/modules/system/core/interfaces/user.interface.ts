export interface IUser {
    login?: string;
    password?: string;
    checkValidity(ver_login: string, ver_password: string);
}
