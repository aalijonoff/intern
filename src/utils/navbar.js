import Generic from "../pages/Generic";
import Home from "../components/Home";
import Properties from "../components/properties";
import Contacts from "../components/contacts";
import { LogIn } from "../components/login";
export const navbar = [
  { id: 1, element: <Home />, title: "Home", path: "/home", hidden: false },
  {
    id: 2,
    element: <Properties />,
    title: "Properties",
    path: "/properties",
    hidden: false,
  },
  {
    id: 3,
    element: <Contacts />,
    title: "Favorites",
    path: "/contacts",
    hidden: false,
  },
  {
    id: 4,
    element: <LogIn />,
    title: "Singin",
    path: "/singin",
    hidden: true,
  },
  {
    id: 5,
    element: <LogIn />,
    title: "Sing Up",
    path: "/singup",
    hidden: true,
  },
];
