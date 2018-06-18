import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Store, Middleware } from 'redux';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Action } from '../Action';
import mainReducer from '../../reducers/mainReducer';
import ShortLink from '../interfaces/ShortLink';
import State from '../../types/State';
import LinkGenerator from './LinkGenerator';
import LinkList from './LinkList';

import './App.less';

const STORAGE_KEY = 'shortLinks';

const initialState: State = {
    linkText: '',
    shortLinks: {
        shortLinks: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
        lastShortLinks: []
    }
};

const linkSaver: Middleware<{}, State> = ({ getState }) => {
    return next => action => {
        const prevShortLinks = getState().shortLinks.shortLinks;
        const returnValue = next(action);
        const nextShortLinks = getState().shortLinks.shortLinks;
        if (nextShortLinks !== prevShortLinks) {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(nextShortLinks));
            } catch (error) {
                console.log(error);
            }
        }
        return returnValue;
    };
}

const store: Store<State> = createStore(mainReducer, initialState as any, applyMiddleware(linkSaver));

const App: React.SFC<{}> = (props) => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path='/' component={LinkGenerator} />
                <Route path='/links' component={LinkList} />
            </Switch>
        </HashRouter>
    </Provider>
);

export default App;
