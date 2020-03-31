import React from 'react';
import {
    PGrid,
    PGridItem,
    PHeadline,
    PLinkPure,
} from '@porsche-design-system/components-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import './index.css'
import {ComponentsCollection} from "./pages/componentsCollection";
import {Forms} from "./pages/forms";

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="App" style={{marginRight: '10%', marginLeft: '10%'}}>
                    <PGrid>
                        <PGridItem size={12}>
                            <PHeadline variant={"headline-2"}>Example Projekt to display useage of Porsche Design
                                System</PHeadline>
                        </PGridItem>
                        <PGridItem size={12}>
                            <br/>
                            <hr/>
                            <br/>
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
                            <br/>
                            <hr/>
                            <br/>
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
            </Router>
        );
    }
}

export default App;
