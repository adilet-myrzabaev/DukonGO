export class LoginModel {
    public email!: string;
    public password!: string;
    constructor(init?:Partial<LoginModel>) {
        Object.assign(this, init)
    }
}
