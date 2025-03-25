import {
  Agree,
  Dashboard,
  Favorite2,
  Gear,
  MaleUser,
  PaidBill,
  Romance,
  Shutdown,
} from "../../../public/icons/iconsExport";

export const sidebar = [
  { title: "Dashboard", icon: Dashboard, link: "/" },
  { title: "My Profile", icon: MaleUser, link: "/profile" },
  { title: "Favourites", icon: Favorite2, link: "#" },
  { title: "My Mutuals", icon: Agree, link: "#" },
  { title: "My Subscribed", icon: PaidBill, link: "#" },
  { title: "Interested in me", icon: Romance, link: "#" },
  { title: "Settings", icon: Gear, link: "#" },
  { title: "Logout", icon: Shutdown, link: "#" },
];
