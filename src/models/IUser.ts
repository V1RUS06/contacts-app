export interface IUser {
  id: string,
  username: string
  password: string
  contacts: IUserContact[]
}

export interface IUserContact {
  "id": string,
  "name": string,
  "phone": string
}
