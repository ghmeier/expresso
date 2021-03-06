import React, {Component, PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import Loading from '../../../Loading';
import moment from 'moment';

class RoasterSubscriptionDetails extends Component {
    render() {
        if(!this.props.user.id) {
            return (<Loading fetching={true} />);
        }   

        const linkClass = 'pointer dim br1 ba bw1 tc pa2 black no-underline';
        const rowClass = 'pa2';
        const inputClass = 'input-reset center ba b--silver pa3 mv2 db br3 mh3';

        const user = this.props.user;
        const subscription = this.props.subscription;
        const bean = this.props.bean;

        const name = user.firstName + ' ' + user.lastName;
        const date = new moment(subscription.nextOrder);
        const frequency = subscription.frequency.charAt(0) + subscription.frequency.slice(1).toLowerCase();
        const active = subscription.status.charAt(0) + subscription.status.slice(1).toLowerCase();
        
        return (
            <div className="content-h-100 min-h-100 overflow-y-auto">
                <div className="mw7 center pa4">
                    <h1 className="tc">Subscription for {name}</h1>
                    <div className={rowClass}><strong>Frequency:</strong> {frequency}</div>
                    <div className={rowClass}><strong>Next order:</strong> {date.format('MM/DD/YYYY')}</div>
                    <div className={rowClass}><strong>Status:</strong> {active}</div>
                    <div className={rowClass}><strong>Quantity:</strong> {subscription.quantity}</div>
                    <div className={rowClass}>
                        <strong>Item:</strong> {bean.name}
                        <span className="pl2">
                            <Link to={'/dashboard/browse/' + bean.id} className={linkClass}>
                                View this item
                            </Link>
                        </span>
                    </div>
                    <div className={rowClass}>
                        <form className="mw7 center w-100 h-100" onSubmit={this.props.handleSubmit}>
                            <div className="center flex flex-column">
                                <div className="mv2 w-100">
                                    <input className={inputClass + ' w-90'} ref={this.props.message} placeholder="Message" required/>
                                    <div className="flex">
                                        <button type="submit" className="f4 center w-50 link pointer dim br1 ba bw1 pv3 white bg-green">
                                            Contact {name}
                                        </button>
                                        <div className="tc f4 w-50 center link pointer dim br1 ba bw1 pv3 white bg-gray"  onClick={browserHistory.goBack}>
                                            Go Back
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

RoasterSubscriptionDetails.propTypes = {
    subscription: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    bean: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    message: PropTypes.func.isRequired
};

export default RoasterSubscriptionDetails;