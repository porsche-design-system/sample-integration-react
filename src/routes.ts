import { RouteProps } from 'react-router-dom';
import * as fromPages from './pages';

export type RouteType = RouteProps & {
  name: string;
  path: string; // override string | string[]
};

export const routes: RouteType[] = [
  {
    name: 'Collection',
    path: '/collection',
    component: fromPages.CollectionPage,
  },
  {
    name: 'Forms',
    path: '/forms',
    component: fromPages.FormsPage,
  },
  {
    name: 'Performance',
    path: '/performance',
    component: fromPages.PerformancePage,
  },
  {
    name: 'Phn Header',
    path: '/phn-header',
    component: fromPages.PhnHeaderPage,
  },
  {
    name: 'Utilities',
    path: '/utilities',
    component: fromPages.UtilitiesPage,
  },
];
