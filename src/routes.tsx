import { RouteProps } from 'react-router-dom';
import { CollectionPage, FormsPage, PerformancePage, PhnHeaderPage, PSelectWrapperPage, UtilitiesPage } from './pages';

export type RouteType = RouteProps & {
  name: string;
  path: string; // override string | string[]
};

export const routes: RouteType[] = [
  {
    name: 'Collection',
    path: '/collection',
    element: <CollectionPage />,
  },
  {
    name: 'Forms',
    path: '/forms',
    element: <FormsPage />,
  },
  {
    name: 'Performance',
    path: '/performance',
    element: <PerformancePage />,
  },
  {
    name: 'Phn Header',
    path: '/phn-header',
    element: <PhnHeaderPage />,
  },
  {
    name: 'PSelectWrapper',
    path: '/p-select-wrapper',
    element: <PSelectWrapperPage />,
  },
  {
    name: 'Utilities',
    path: '/utilities',
    element: <UtilitiesPage />,
  },
];
