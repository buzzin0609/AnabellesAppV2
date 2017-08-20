/**
 * Created by will0 on 14/08/2017.
 */

import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default class Title extends React.Component {
	render() {
		return (
			<Text style={StyleSheet.flatten([styles.title, this.props.style || {}])}>{this.props.children}</Text>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		padding: 10
	}
});