import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getSubscription} from '../../../../actions/covenantActions';
import {createContent, createTrigger, activateTrigger} from '../../../../actions/bloodlinesActions';

import BackButton from '../../BackButton';
import SuccessMessage from '../../../SuccessMessage';
import RoasterSubscriptionDetails from './RoasterSubscriptionDetails';

class RoasterSubscriptionDetailsContainer extends Component {
    constructor(props) {
        super(props);

        this.contactUserBind = this.onHandleSubmit.bind(this);
    }

    componentWillMount() {
        const {dispatch, params} = this.props;
        dispatch(getSubscription(params.id));
    }

    onHandleSubmit(e) {
        e.preventDefault();

        const {dispatch} = this.props;
        const user = this.props.user;
        const roaster = this.props.roaster;
        const message = this.message.value;

        const triggerBody = {
            userId: user.id,
            values: {
                first_name: user.firstName,
                 last_name: user.lastName,
                roaster: roaster.name,
                message: message
            }
        };

        console.log(triggerBody);
        dispatch(activateTrigger('roaster_message', triggerBody)).then(() => {

        });
    }

    _addRef(name) {
        return (i => {
            this[name] = i;
        });
    }

    render() {        
        return (
            <div>
                <BackButton />
                <SuccessMessage success={this.props.modify.success} message={'Message sent'}/>
                <RoasterSubscriptionDetails
                    subscription={this.props.subscription}
                    user={this.props.user}
                    bean={this.props.bean}
                    message={this._addRef('message')}
                    handleSubmit={this.contactUserBind}
                    />
            </div>
        );
    }
}

RoasterSubscriptionDetailsContainer.propTypes = {
    subscription: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    bean: PropTypes.object.isRequired,
    response: PropTypes.object.isRequired,
    roaster: PropTypes.object.isRequired,
    modify: PropTypes.object
};

function mapStateToProps(state) {
    return {
        subscription: state.subscription.item,
        user: state.userReducer.secondaryUser,
        bean: state.bean.item,
        response: state.modify.data,
        roaster: state.roaster.roaster,
        modify: state.modify
    };
}

export default connect(mapStateToProps)(RoasterSubscriptionDetailsContainer);