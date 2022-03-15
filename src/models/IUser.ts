export interface IUser {
  id: string,
  username: string
  password: string
  contacts: IUserContacts[]
}

export interface IUserContacts {
  "id": number,
  "name": string,
  "phone": string
}
