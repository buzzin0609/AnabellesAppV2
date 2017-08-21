/**
 * Created by Will Busby on 21/08/2017.
 * Description:
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

class FeedStats extends Component {
	render() {
		return (
			<View style={styles}>
				<Text>Drunk: {this.getTotal('feedAmountDrunk')}ml</Text>
			</View>
		);
	}

	getTotal(prop) {
		return this.props.feeds.reduce((total, feed) => {
			return total + parseInt(feed[prop], 10);
		}, 0)
	}

}

FeedStats.propTypes = {
	feeds: PropTypes.arrayOf(PropTypes.object)
};

const styles = {
	padding: 15
}

export default FeedStats;
