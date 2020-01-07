export class DtoUser {
  email: string;
  lastname: string;
  name: string;
  password: string;
  username: string;

  constructor(email: string, lastname: string, name: string, password: string, username: string) {
    this.email = email;
    this.password = password;
    this.username = username;
  }
}
