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
				<View style={styles.linkWrapper}>
					<Link title="Add New Feed"
						  href="AddFeed"
						  large
						  buttonStyle={styles.linkStyle}
						  {...this.props}
						  {...styles.link} />
				</View>
			</View>
		);
	}
}

const styles = {
	footerNav: {
		backgroundColor: 'gray',
		bottom: 0,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		left: 0,
		position: 'absolute',
		right: 0,
		width: '100%'
	},
	linkWrapper: {
		flex: 1,
	},
	linkStyle: {
		flexDirection: 'row',
		marginTop: 5
	},
	link: {
		backgroundColor: 'gray'
	}
}