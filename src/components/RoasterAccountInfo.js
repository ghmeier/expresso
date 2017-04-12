import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import FileSelector from './FileSelector';

import Title from './Title';

class RoasterAccountInfo extends Component {
    constructor(props) {
        super(props);

        if(this.props.user != null) {
            this.props.profileImage.src = this.props.user.profileUrl;
        }

        this.profileImageSelectedBind = this.profileImageSelected.bind(this);
	}

    profileImageSelected(file) {
        const fileReader = new FileReader();

        fileReader.onload = (e => {
            this.profile.src = e.target.result;
        });

        fileReader.readAsDataURL(file);

        this.props.profileImage.file = file;
    }

    _addRef(name) {
        return (i => {
            this[name] = i;
        });
    }

	render() {
		const inputClass = 'input-reset ba b--silver pa3 mv2 db br3 mh3';
		const formRowClass = 'mt3 flex flex-row';

        const roaster = this.props.roaster;
        const exists = this.props.roaster;

        const legendText = exists ? 'Update Roaster Account' : 'Register Roaster Account';
        const submitText = exists ? 'Update' : 'Register';

        return (
            <form className="mw7 center w-100 h-100" onSubmit={this.props.handleSubmit}>
                <div className="ba br3 b--light-silver bs1 ph5 pb5 mt2 mb2 bg-white">
                    <Title color="black"/>
                    <legend className="center f2 pb4 blue fw1">{legendText}</legend>
                    <div className={formRowClass}>
                        <input className={inputClass + ' w-100'} ref={this.props.name} placeholder="Name" defaultValue={exists ? roaster.name : ''} required/>
                    </div>
                    <div className={formRowClass}>
                        <input className={inputClass + ' w-100'} ref={this.props.phone} placeholder="Phone Number (##########)" defaultValue={exists ? roaster.phone : ''} required/>
                    </div>
                    <div className={formRowClass}>
                        <input className={inputClass + ' w-100'} ref={this.props.email} placeholder="E-mail" defaultValue={exists ? roaster.email : ''} required/>
                    </div>
                    <div className={formRowClass}>
                        <input className={inputClass + ' w-100'} ref={this.props.addressLine1} placeholder="Address Line 1" defaultValue={exists ? roaster.addressLine1 : ''} required/>
                    </div>
                    <div className={formRowClass}>
                        <input className={inputClass + ' w-100'} ref={this.props.addressLine2} placeholder="Address Line 2 (Optional)" defaultValue={exists ? roaster.addressLine2 : ''}/>
                    </div>
                    <div className={formRowClass}>
                        <input className={inputClass + ' w-100'} ref={this.props.city} placeholder="City or Town" defaultValue={exists ? roaster.addressCity : ''} required/>
                        <input className={inputClass} ref={this.props.zipCode} placeholder="Zip Code" defaultValue={exists ? roaster.addressZip : ''} required/>
                    </div>
                    <div className={formRowClass}>
                        <select className={inputClass + ' w-50 pointer'} ref={this.props.state} defaultValue={exists ? roaster.addressState : ''} required>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        <select className={inputClass + ' w-50 pointer'} ref={this.props.country} defaultValue={exists ? roaster.addressCountry : ''} required>
                            <option value="United States">United States</option>
                        </select>
                    </div>
                    <div className="mt3">
                        <FileSelector
                            buttonText="Upload Profile Picture (Optional)"
                            fileSelected={this.profileImageSelectedBind} />
                    </div>
                    <div className="mt3">
                        <img  className="w-100" height="auto" alt="" ref={this._addRef('profile')} src={this.props.profileImage.src} />
                    </div>
                    <div className="mt3">
                        <button className="f4 w-100 link pointer dim br1 ba bw1 pv3 mb2 white bg-green" type="submit">{submitText}</button>
                    </div>
                </div>
            </form>
        );
    }
}

RoasterAccountInfo.propTypes = {
    roaster: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    profileImage: PropTypes.object.isRequired,
    empty: PropTypes.bool,
    name: PropTypes.func,
    country: PropTypes.func,
    state: PropTypes.func,
    city: PropTypes.func,
    addressLine1: PropTypes.func,
    addressLine2: PropTypes.func,
    zipCode: PropTypes.func,
    password: PropTypes.func,
    confirmPassword: PropTypes.func,
    phone: PropTypes.func,
    email: PropTypes.func
};

export default RoasterAccountInfo;