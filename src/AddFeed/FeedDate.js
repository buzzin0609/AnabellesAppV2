/**
 * Created by will0 on 15/08/2017.
 */

import React from 'react';
import {DatePickerIOS, View} from 'react-native';

export default class FeedDate extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			selectedDate: new Date()
		}
	}

	render() {
		return (
			<View>
				<DatePickerIOS date={this.state.selectedDate} onDateChange={this.handleDateChange.bind(this)} mode="datetime" />
			</View>

		)
	}

	handleDateChange(newDate) {
		if (this.props.parent) {
			this.props.parent.setState({
				feedTime: newDate.toISOString(),
				timestamp: newDate.getTime()
			});
		}

		this.setState({
			selectedDate: newDate
		});
	}
}