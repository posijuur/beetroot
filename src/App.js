import React, {Component} from 'react';
import Root from './components/Root/';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './redux';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import history from './history';

class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <ConnectedRouter history={history}>
                	<MuiThemeProvider>
                    	<Root/>
                    </MuiThemeProvider>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App;
