import { RouteProps } from 'react-router-dom';
import { CollectionPage, FormsPage, PerformancePage, PhnHeaderPage, PSelectWrapperPage } from './pages';
import { StylesPage } from './pages/StylesPage';
import { AgGridPage } from './pages/AgGridPage';

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
    name: 'Styles',
    path: '/styles',
    element: <StylesPage />,
  },
  {
    name: 'AG Grid',
    path: '/ag-grid',
    element: <AgGridPage />,
  },
];
