import { Admin, Resource } from "react-admin";
import { UserList } from "./users";
import { Dashboard } from './Dashboard';


export const App = () => (
  <Admin dashboard={Dashboard}>
     <Resource name="users" list={UserList} />
  </Admin>
);
