// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import ContentPaste from '@material-ui/icons/ContentPaste';
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from '@material-ui/icons/LocationOn';
import Notifications from '@material-ui/icons/Notifications';
// import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from 'views/Dashboard/Dashboard.jsx';
import UserProfile from 'views/UserProfile/UserProfile.jsx';
import DeviceProfiles from 'views/DeviceProfiles/DeviceProfiles.jsx';
// import Typography from "views/Typography/Typography.jsx";
// import Icons from "views/Icons/Icons.jsx";
import Maps from 'views/Maps/Maps.jsx';
import WidgetsPage from 'views/Widgets/Widgets.jsx';
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Device Dashboard',
    navbarName: 'Device Dashboard',
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    path: '/device_profiles',
    sidebarName: 'Device Profiles',
    navbarName: 'Device Profiles',
    icon: ContentPaste,
    component: DeviceProfiles,
  },
  {
    path: '/widgets',
    sidebarName: 'Widgets Store',
    navbarName: 'Widgets Store',
    icon: Notifications, // Need to change this
    component: WidgetsPage,
  },
  {
    path: '/map',
    sidebarName: 'Device Location',
    navbarName: 'Device Location',
    icon: LocationOn,
    component: Maps,
  },
  {
    path: '/user',
    sidebarName: 'User Profile',
    navbarName: 'Profile',
    icon: Person,
    component: UserProfile,
  },
  {
    redirect: true, path: '/', to: '/dashboard', navbarName: 'Redirect',
  },
  // {
  //   redirect: true, path: '/login', to: '/login', navbarName: 'Login',
  // },
];

export default dashboardRoutes;
