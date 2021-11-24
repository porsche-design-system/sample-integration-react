import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { PGrid, PGridItem, PHeadline, PDivider, PLinkPure, PToast } from '@porsche-design-system/components-react';
import './App.css';
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
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
            <Route path="/" exact>
              <Redirect to={routes.find((x) => x.name === 'Collection')?.path!} />
            </Route>
          </Switch>
        </div>
      </Router>
      <PToast />
    </>
  );
};
