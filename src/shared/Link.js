/**
 * Created by will0 on 14/08/2017.
 */

import React from 'react';
import {Button} from 'react-native';
import styleVariables from './styleVariables';

export default class Link extends React.Component {
	render() {
		return (
			<Button title={this.props.title} color="#fff" style={this.props.style || {}} onPress={this.goTo.bind(this)} />
		)
	}

	goTo() {
		this.props.navigation.navigate(this.props.href);
	}
}
