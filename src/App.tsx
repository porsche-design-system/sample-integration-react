import { CSSProperties, useEffect, useState } from 'react';
import { Switch, Route, Link, Redirect, useLocation } from 'react-router-dom';
import {
  PGrid,
  PGridItem,
  PHeadline,
  PDivider,
  PLinkPure,
  componentsReady,
} from '@porsche-design-system/components-react';
import { Loading } from './components';
import './App.css';
import { routes } from './routes';

export const App = (): JSX.Element => {
  const [isGlobalReady, setIsGlobalReady] = useState(false);
  const [isLocalReady, setIsLocalReady] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('[]');
    // TODO: this is broken until next release
    componentsReady().then(() => {
      console.log('rdy []');
      setIsGlobalReady(true);
    });
  }, []);

  useEffect(() => {
    console.log('pathname');
    setIsLocalReady(false);

    componentsReady().then(() => {
      console.log('rdy pathname', pathname);
      setIsLocalReady(true);
    });
  }, [pathname]);

  const style: { style: CSSProperties } = { style: { visibility: 'hidden' } };

  return (
    <>
      {!isGlobalReady && <Loading isGlobal />}

      <div className="pageLayout" {...(!isGlobalReady && style)}>
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
        <main className="main">
          {!isLocalReady && <Loading />}

          <div {...(!isLocalReady && style)}>
            <Switch>
              {routes.map((route) => (
                <Route key={route.path} {...route} />
              ))}
              <Route path="/" exact>
                <Redirect to={routes.find((x) => x.name === 'Collection')!.path} />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </>
  );
};
