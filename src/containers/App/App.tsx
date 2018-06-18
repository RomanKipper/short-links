import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Store, Middleware } from 'redux';
import { HashRouter, Switch, Route } from 'react-router-dom';

import State from '../../types/State';
import mainReducer from '../../reducers/mainReducer';
import LinkGenerator from '../LinkGenerator';
import LinkList from '../LinkList';

import './App.less';

const STORAGE_KEY = 'short-links:links';

const initialState: State = {
    links: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
    linkText: '',
    isShortLink: false
};

const linkSaver: Middleware<{}, State> = ({ getState }) => {
    return next => action => {
        const prevLinks = getState().links;
        const returnValue = next(action);
        const nextLinks = getState().links;
        if (nextLinks !== prevLinks) {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(nextLinks));
            } catch (error) {
                console.log(error);
            }
        }
        return returnValue;
    };
}

const store: Store<State> = createStore(mainReducer, initialState, applyMiddleware(linkSaver));

const App: React.SFC = () => (
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
