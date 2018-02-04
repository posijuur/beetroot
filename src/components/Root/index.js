import React, { Component } from 'react';
import WrapperForm from '../WrapperForm';
import WrapperTable from '../WrapperTable';
import Menu from '../Menu';

import { Switch } from 'react-router-dom';
import Route from 'react-router-hooks';

import "./style.scss";

class Root extends Component {

    render() {

        return (
            <div>
                <Menu />

                <Switch>
                    <Route path = "/beetroot/signin" component = { WrapperForm } />
                    <Route path = "/beetroot/table" component = { WrapperTable } />
                </Switch>
            </div>
        )
    }
}

export default Root;