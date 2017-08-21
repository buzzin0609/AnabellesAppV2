/**
 * Created by will0 on 14/08/2017.
 */

import React from 'react';
import {ScrollView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LatestFeed from './Feeds/LatestFeed';
import FooterNavView from './FooterNav/FooterNavView';
import events from './shared/events';
import feedService from './FeedService/FeedService';


let ticker = void 0;
export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			latestFeed: void 0
		};

		this.listener = void 0;
		this.addLatestFeed();
	}

	async addLatestFeed() {
		const latestFeed = await feedService().latestFeed();
		this.setState({ latestFeed });
	}

	componentWillMount() {
		if (ticker && ticker.remove) {
			ticker.remove();
			ticker  = void 0;
		}
		ticker = events().addListener('check-latest-feed', this.addLatestFeed.bind(this));
	}

	componentWillUnmount() {
		if (ticker && ticker.remove) {
			ticker.remove();
			ticker = void 0;
		}
	}

	render() {
		return (
			<View style={styles.outer}>
				{
					this.state.latestFeed &&
						<LatestFeed feed={this.state.latestFeed}/>
				}
				<View style={styles.content}>
					<KeyboardAwareScrollView style={styles.contentInner}>
						{this.props.children}
						<View style={{paddingBottom: 20}}/>
					</KeyboardAwareScrollView>
				</View>
				
				<FooterNavView {...this.props} />
			</View>
		)
	}
}

const styles = {
	outer: {
		flex: 1
	},
	content: {
		flex: 0.8,
		paddingBottom: 60
	},
	contentInner: {
		flex: 1,
	}
};