import AboutUs from "./components/AboutUs";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import User from "./components/User";

export const tabsData = [
  {
    title: "User",
    component: <User />,
    id: "0",
  },
  {
    title: "Profile",
    component: <Profile />,
    id: "1",
  },
  {
    title: "Settings",
    component: <Settings />,
    id: "2",
  },
  {
    title: "AboutUs",
    component: <AboutUs />,
    id: "3",
  },
];
