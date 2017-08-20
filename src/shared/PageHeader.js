/**
 * Created by will0 on 14/08/2017.
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './Title';

export default class PageHeader extends React.Component {
	render() {
		return (
			<View style={styles.header}>
				<Title>{this.props.title}</Title>
				{this.props.children}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		alignItems: 'center',
		justifyContent: 'center'
	}
});