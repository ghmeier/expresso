import React, {Component} from 'react';
import FaArchive from 'react-icons/lib/fa/archive';
import FaRssSquare from 'react-icons/lib/fa/rss-square';
import TiUserOutline from 'react-icons/lib/ti/user-outline';
import SidebarSelector from './SidebarSelector';

class RoasterSidebar extends Component {
    render() {
        const b = this.props.location;
        const d = '/dashboard/roaster/';

        return (
            <div>
                <SidebarSelector subSelector name="Subscriptions" to={d + 'subscriptions'} location={b} icon={<FaRssSquare className="mr2 pb1"/>}/>
                <SidebarSelector subSelector name="Inventory" to={d + 'inventory'} location={b} icon={<FaArchive className="mr2 pb1"/>}/>
                <SidebarSelector subSelector name="Roaster Account" to={d + 'account'} location={b} icon={<TiUserOutline className="mr2 pb1 f3" />}/>
            </div>
        );
    }
}

export default RoasterSidebar;
