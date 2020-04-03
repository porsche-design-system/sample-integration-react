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

export function App() {

    return (
        <Router>
            <div className="App">
                <div className={'pageLayout'}>
                    <PGrid>
                        <PGridItem size={12}>
                            <PHeadline variant={"headline-2"}>Example Projekt to display usage of Porsche Design
                                System</PHeadline>
                        </PGridItem>
                        <PGridItem size={12}>
                            <PDivider className={'divider'}/>
                        </PGridItem>
                        <PGridItem size={12}>
                            <Link to="/componentsCollection" className={'removeLinkStyle'}>
                                {/*To call props of PLinkPure use the spread operator*/}
                                <PLinkPure {...{icon: 'globe'}}>Components Collection</PLinkPure>
                            </Link>
                            <Link to="/forms" className={'removeLinkStyle'}>
                                <PLinkPure {...{icon: 'document'}}>Forms</PLinkPure>
                            </Link>
                        </PGridItem>
                        <PGridItem size={12}>
                            <PDivider className={'divider'}/>
                        </PGridItem>
                    </PGrid>
                    <Switch>
                        <Route path="/componentsCollection">
                            <ComponentsCollection/>
                        </Route>
                        <Route path="/forms">
                            <Forms/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
