/**
 * Created by will0 on 16/08/2017.
 */

import React from 'react';
import {Alert, View, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import styles from '../shared/elementStyles';
import {prepareFeed} from '../Feeds/FeedData';
import events from '../shared/events';

export default class SubmitFeed extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			value: this.props.value
		};
	}

    render() {
		console.log(this.props.data);

		return (
			<View style={styles.btnSpace}>
				<Button
					containerStyle={styles.btnContainer}
					style={styles.btn}
					onPress={this.handleSubmit.bind(this)}
				>
					{this.state.value}
				</Button>
			</View>
		);
    }

	async handleSubmit() {
		const feedData = prepareFeed(this.props.data);
		await this.props.request(feedData);

		Alert.alert('Success!', this.props.successMsg);
		events().emit('check-latest-feed');
	}
}