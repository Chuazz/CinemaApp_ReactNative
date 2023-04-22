// Component
import {Download, Home, Likes, Profile} from '../screens';

// Config
import {routes} from '../config';

const publicRoutes = [
  {
    path: routes.home,
    component: Home,
  },
  {
    path: routes.download,
    component: Download,
  },
  {
    path: routes.likes,
    component: Likes,
  },
  {
    path: routes.profile,
    component: Profile,
  },
];

const privateRoutes = [];

export {publicRoutes, privateRoutes};
