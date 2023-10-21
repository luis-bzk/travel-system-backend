export class User {
  constructor(
    public id: string,
    public name: string,
    public lastName: string,
    public email: string,
    public state: string,
    public token: string,
    public id_role: string
  ) {}
}
