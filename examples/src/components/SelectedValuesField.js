import React from 'react';
import Select from 'react-select';

function logChange() {
	console.log.apply(console, [].concat(['Select value changed:'], Array.prototype.slice.apply(arguments)));
}

var SelectedValuesField = React.createClass({
	displayName: 'SelectedValuesField',
	propTypes: {
		allowCreate: React.PropTypes.bool,
		hint: React.PropTypes.string,
		label: React.PropTypes.string,
		options: React.PropTypes.array,
	},
	getInitialState() {
		return {selection: this.props.options.slice(1,3)};
	},
	onChange(value) {
		this.setState({selection: value});
	},
	onLabelClick (data, event) {
		console.log(data, event);
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
					allowCreate={this.props.allowCreate}
					onOptionLabelClick={this.onLabelClick}
					value={this.state.selection}
					multi={true}
					placeholder="Select your favourite(s)"
					options={this.props.options}
					onChange={logChange} />
				{this.renderHint()}
			</div>
		);
	}
});

module.exports = SelectedValuesField;
