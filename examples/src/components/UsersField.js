import GravatarOption from './CustomOption';
import GravatarValue from './CustomSingleValue';
import React from 'react';
import Select from 'react-select';

const USERS = require('../data/users');

var UsersField = React.createClass({
	propTypes: {
		hint: React.PropTypes.string,
		label: React.PropTypes.string,
	},
	getInitialState () {
		return {selection: []};
	},
	onChange (selection) {
		this.setState({selection: selection});
	},
	renderHint () {
		if (!this.props.hint) return null;
		return (
			<div className="hint">{this.props.hint}</div>
		);
	},
	render () {
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select
					onChange={this.onChange}
					value={this.state.selection}
					placeholder="Select user"
					optionComponent={GravatarOption}
					singleValueComponent={GravatarValue}
					options={USERS.users}/>
				{this.renderHint()}
			</div>
		);
	}
});

module.exports = UsersField;
