/**
 * Created by will0 on 14/08/2017.
 */

import React from 'react';
import {View, Button} from 'react-native';
import Link from '../shared/Link';

export default class FooterNavView extends React.Component {
	render() {
		return (
			<View style={styles.footerNav}>
				<Link title="Feeds" href="Feeds" {...this.props} style={styles.link} />
			</View>
		);
	}
}

const styles = {
	footerNav: {
		backgroundColor: 'gray',
		bottom: 0,
		flex: 0.2,
		flexDirection: 'row',
		height: 60,
		justifyContent: 'space-around',
		left: 0,
		padding: 10,
		position: 'absolute',
		right: 0,
		width: '100%'
	},
	link: {

	}
}