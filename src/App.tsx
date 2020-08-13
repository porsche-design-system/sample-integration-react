import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { PGrid, PGridItem, PHeadline, PLinkPure, PDivider } from '@porsche-design-system/components-react';
import './App.css';
import { CollectionPage, FormsPage, PhnHeaderPage, UtilitiesPage } from './pages';
import { TestComponentsPage1 } from './pages/TestComponentsPage1';

export const App = (): JSX.Element => {
  return (
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
            <Link to="/collection" className="removeLinkStyle">
              <PLinkPure>Components Collection</PLinkPure>
            </Link>
            <Link to="/forms" className="removeLinkStyle">
              <PLinkPure>Forms</PLinkPure>
            </Link>
            <Link to="/utilities" className="removeLinkStyle">
              <PLinkPure>Utilities</PLinkPure>
            </Link>
            <Link to="/phn-header" className="removeLinkStyle">
              <PLinkPure>Phn Header</PLinkPure>
            </Link>
            <Link to="/testpage" className="removeLinkStyle">
              <PLinkPure>Test Page</PLinkPure>
            </Link>
          </PGridItem>
          <PGridItem size={12}>
            <PDivider className="divider" />
          </PGridItem>
        </PGrid>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/collection" />
          </Route>
          <Route path="/collection">
            <CollectionPage />
          </Route>
          <Route path="/forms">
            <FormsPage />
          </Route>
          <Route path="/utilities">
            <UtilitiesPage />
          </Route>
          <Route path="/phn-header">
            <PhnHeaderPage />
          </Route>
          <Route path="/testpage">
            <TestComponentsPage1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
