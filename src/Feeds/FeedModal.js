/**
 * Created by Will Busby on 17/08/2017.
 * Description:
 */

import React from 'react';
import {Modal, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import PageHeader from '../shared/PageHeader';
import FeedAmount from '../AddFeed/FeedAmount';
import Title from '../shared/Title';
import dateUtils from '../dateUtils/dateUtils';
import vars from '../shared/styleVariables';
import feedService from '../FeedService/FeedService';
import {prepareFeed} from "./FeedData";
import events from '../shared/events';
import timeout from '../shared/timeout';

export default class FeedModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = this.props.feed;
		this.state.changing = false;

	}
	render() {
		const feed = this.state;
		const date = new Date(feed.timestamp);
		const time = date.toLocaleTimeString()
		return (
			<Modal
				animationType={"slide"}
				transparent={false}
			>
				{
					this.state.changing &&
					(<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Title>Updating</Title></View>) ||
					(<View style={{marginTop: 22}}>
						<PageHeader title="Feed"/>
						<Title>{dateUtils.dayText(date)} - {time.substr(0, time.length - 3)}</Title>
						<View style={styles.wrapper}>
							<View style={styles.section}>
								<FeedAmount title="Amount Made" amount={feed.feedAmountAdded} parent={this} toUpdate="feedAmountAdded" />
								<FeedAmount title="Amount Drunk" amount={feed.feedAmountDrunk} parent={this} toUpdate="feedAmountDrunk" />
								{
									feed.feedMedicine &&
									<Title>Medicine Taken</Title>
								}
								{
									feed.feedSolids &&
									<Title style={{fontSize: 18}}>Solids eaten: {feed.feedSolidsType}</Title>
								}
							</View>
							<View style={styles.section}>
								<Button
									raised
									title="Update"
									backgroundColor="green"
									buttonStyle={{marginBottom: 10}}
									onPress={this.handleFeedUpdate.bind(this, 'update')}
								/>
								<Button
									raised
									title="Delete"
									backgroundColor="red"
									onPress={this.handleFeedUpdate.bind(this, 'delete')}

								/>
							</View>
						</View>

						<View>
							<Button
								title="Close"
								raised
								backgroundColor={vars.colors.blue}
								onPress={this.props.parent.hideModal.bind(this.props.parent)}/>
						</View>
					</View>)
				}
			</Modal>
		);
	}

	async handleFeedUpdate(action) {
		await this.setState({
			changing: true
		});
		let request = void 0;
		if (action === 'update') {
			request = feedService().putFeed;
		} else {
			request = feedService().deleteFeed;
		}

		const feed = prepareFeed(this.state);
		const {parent} = this.props;

		await request(feed);
		await timeout(500);
		await parent.addFeeds.call(parent);
		parent.hideModal.call(parent);
		events().emit('check-latest-feed');
	}
}

const styles = {
	wrapper: {
		flexDirection: 'row'
	},
	section: {
		flex: 1
	}
}