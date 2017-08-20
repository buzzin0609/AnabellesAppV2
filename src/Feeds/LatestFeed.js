/**
 * Created by Will Busby on 19/08/2017.
 * Description:
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import timeAgo from '../dateUtils/timeAgo';

class LatestFeed extends Component {
	render() {
		const {feed} = this.props;
		return (
			<View style={styles.wrapper}>
				<Text style={styles.text}>Last feed: {timeAgo(feed.timestamp)}</Text>
			</View>

		);
	}
}

LatestFeed.propTypes = {
	feed: PropTypes.object
};

const styles = {
	wrapper: {
		alignItems: 'center',
		backgroundColor: '#000',
		justifyContent: 'center',
		padding: 5
	},
	text: {
		color: '#fff',
		fontSize: 18
	}
}

export default LatestFeed;
