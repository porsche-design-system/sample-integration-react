import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { PGrid, PGridItem, PHeadline, PDivider, PLinkPure, PToast } from '@porsche-design-system/components-react';
import './pages/vanilla-extract.css';
import { routes } from './routes';

export const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <div className="pageLayout">
          <PGrid>
            <PGridItem size={12}>
              <PHeadline variant="headline-2" align="center">
                Example usage of the Porsche-Design-System React
              </PHeadline>
            </PGridItem>
            <PGridItem size={12}>
              <PDivider className="divider" />
            </PGridItem>
            <PGridItem size={12}>
              {routes.map((route) => (
                <PLinkPure key={route.path}>
                  <Link to={route.path} children={route.name} />
                </PLinkPure>
              ))}
            </PGridItem>
            <PGridItem size={12}>
              <PDivider className="divider" />
            </PGridItem>
          </PGrid>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
            <Route path="/" element={<Navigate replace to={routes.find((x) => x.name === 'Collection')?.path!} />} />
          </Routes>
        </div>
      </Router>
      <PToast />
    </>
  );
};
