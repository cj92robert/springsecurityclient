export class Role {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class User {
  id: number;
  username: string;
  name: string;
  lastname: string;
  email: string;
  roles: Role[];
  enabled: boolean;
  activationKey: number;
  remindKey: number;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
}
