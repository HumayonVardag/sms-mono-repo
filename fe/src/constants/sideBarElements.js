import Attendance from "@Pages/Attendance";
import Reports from "@Pages/Reports";
import Dashboard from "@Pages/Dashboard";

const SIDEBAR_COMPONENTS = [
  {
    id: 0,
    component: Dashboard,
    icon: "dashboard",
    pathName: "/dashboard",
    label: "Dashboard",
  },
  {
    id: 1,
    component: Reports,
    icon: "reports",
    pathName: "/reports",
    label: "Reports",
  },
  {
    id: 2,
    component: Attendance,
    icon: "attendance",
    pathName: "/attendance",
    label: "Attendance",
  },
];

export default SIDEBAR_COMPONENTS;
