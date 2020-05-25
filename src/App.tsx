import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import {
    PGrid,
    PGridItem,
    PHeadline,
    PLinkPure,
    PDivider,
} from '@porsche-design-system/components-react';
import './App.css';
import { ComponentsCollection } from './pages/ComponentsCollection';
import { Forms } from './pages/Forms';
import { PageWithPhnHeader } from './pages/PageWithPhnHeader';

export function App() {

    return (
        <Router>
            <div className="App">
                <div className={'pageLayout'}>
                    <PGrid>
                        <PGridItem size={12}>
                            <PHeadline variant={"headline-2"}>Example Project to display usage of Porsche Design
                                System</PHeadline>
                        </PGridItem>
                        <PGridItem size={12}>
                            <PDivider className={'divider'}/>
                        </PGridItem>
                        <PGridItem size={12}>
                            <Link to="/componentsCollection" className={'removeLinkStyle'}>
                                <PLinkPure>Components Collection</PLinkPure>
                            </Link>
                            <Link to="/forms" className={'removeLinkStyle'}>
                                <PLinkPure>Forms</PLinkPure>
                            </Link>
                            <Link to="/phn-header" className={'removeLinkStyle'}>
                                <PLinkPure>Phn Header</PLinkPure>
                            </Link>
                        </PGridItem>
                        <PGridItem size={12}>
                            <PDivider className={'divider'}/>
                        </PGridItem>
                    </PGrid>
                    <Switch>
                        <Route path="/" exact>
                            <ComponentsCollection/>
                        </Route>
                        <Route path="/componentsCollection">
                            <ComponentsCollection/>
                        </Route>
                        <Route path="/forms">
                            <Forms/>
                        </Route>
                        <Route path="/phn-header">
                            <PageWithPhnHeader/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
