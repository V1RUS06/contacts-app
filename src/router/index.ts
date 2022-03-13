import Login from "../pages/Login/Login";
import Contacts from "../pages/Contacts/Contacts";


export const privateRoutes = [
  {path: '/contacts', component: Contacts, exact: true},
]

export const publicRoutes = [
  {path: '/login', component: Login, exact: true},
]
