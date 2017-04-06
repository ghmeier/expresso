import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import SidebarSelector from './SidebarSelector';
import BloodlinesSidebar from './BloodlinesSidebar';
import RoasterSidebar from './RoasterSidebar';
import TiUserOutline from 'react-icons/lib/ti/user-outline';
import FaSearch from 'react-icons/lib/fa/search';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';
import FaRssSquare from 'react-icons/lib/fa/rss-square';
import FaShoppingBag from 'react-icons/lib/fa/shopping-bag';
import FaHome from 'react-icons/lib/fa/home';
import FaSignOut from 'react-icons/lib/fa/sign-out';

class SidebarContent extends Component {
    render() {
        const bottomTextClass = "b dim pt3 white";
        const bottomLinkClass = "no-underline ph2";

        const bloodlines = <BloodlinesSidebar location={this.props.location}/>;
        const roaster = <RoasterSidebar location={this.props.location}/>;

        var profileImage = null;
        if(this.props.user != undefined && this.props.user.profileUrl != '') {
            profileImage = this.props.user.profileUrl;
        }

        const b = this.props.location;
        const d = '/dashboard/';
        return (
            <div className="relative h-100 overflow-hidden flex justify-between flex-column bg-blue white">
                <div>
                    <SidebarSelector name="Browse Beans" to={d + 'browse'} location={b} icon={<FaSearch className="mr2 pb1" />}/>
                    <SidebarSelector name="Bloodlines" to={d + 'bloodlines'} location={b} icon={<FaEnvelopeO className="mr2 pb1" />}>
                        {bloodlines}
                    </SidebarSelector>
                    <SidebarSelector name="Subscriptions" to={d + 'subscriptions'} location={b} icon={<FaRssSquare className="mr2 pb1" />} />
                    {this.props.roaster && <SidebarSelector name="Roaster" to={d + 'roaster'} location={b} icon={<FaShoppingBag className="mr2 pb1" />}>
                        {roaster}
                    </SidebarSelector>}
                </div>
                <div className="flex h4 justify-between ph3 pv4 bt ">
                     {profileImage != null &&
                        <img src={profileImage} className="br-100 h3 w3 dib" alt="" />
                     }
                     <Link to={'/'} className={bottomLinkClass}><div className={bottomTextClass}><FaHome className="pl2 pb1 white f3" /> Home</div></Link>
                     <Link to={d + 'settings'} className={bottomLinkClass}><div className={bottomTextClass}><TiUserOutline className="pl3 pb1 white f3" /> Account</div></Link>
                     <Link to={'/logout'} className={bottomLinkClass}><div className={bottomTextClass}><FaSignOut className="pl3 pb1 white f3" /> Logout</div></Link>
                </div>
            </div>
        );
    }
}

SidebarContent.propTypes = {
    location: PropTypes.string.isRequired,
    roaster: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps)(SidebarContent);
