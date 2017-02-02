import React, { Component } from 'react';
import Sidebar from 'react-sidebar';

import Bloodlines from './bloodlines/Bloodlines';
import Roasters from './roasters/Roasters';
import SidebarContent from './SidebarContent';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            itemToRender: 0
        };
    }

    onRoastersClick(e) {
        e.preventDefault();

        this.setState({
            itemToRender: 0
        })
    }

    onBloodlinesClick(e) {
        e.preventDefault();

        this.setState({
            itemToRender: 1
        })
    }

    render() {
        const sidebar = <SidebarContent
            onRoastersClick={this.onRoastersClick.bind(this)}
            onBloodlinesClick={this.onBloodlinesClick.bind(this)} />;
        let children = <div></div>;

        switch (this.state.itemToRender) {
            case 0:
                children = <Roasters />;
                break;
            case 1:
                children = <Bloodlines />;
                break;
            default:
                children = <Roasters />;
        }

        return (
            <Sidebar
                sidebar={sidebar}
                children={children}
                docked={true}
                shadow={true}>
            </Sidebar>
        );
    }
}

export default Dashboard;
