/**
 * Created by will0 on 14/08/2017.
 */

import React from 'react';
import {View, DatePickerIOS} from 'react-native';
import Layout from '../Layout';
import PageHeader from '../shared/PageHeader';
import FeedDate from './FeedDate';
import FeedAmount from './FeedAmount';
import Checkbox from '../shared/Checkbox';
import FeedSolidsType from './FeedSolidsType';
import SubmitFeed from '../FeedService/SubmitFeed';
import getFeedService from '../FeedService/FeedService';


import FeedData from '../Feeds/FeedData';

const feedService = getFeedService();

export default class AddFeedView extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = new FeedData();
	}

	render() {
		return (
			<Layout {...this.props}>
				<PageHeader title="Add New Feed" />
				<FeedDate parent={this} />
				<FeedAmount buttons={[120, 150, 180, 200]} parent={this} />
				<View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
					<Checkbox parent={this} toUpdate="feedMedicine" title="Medicine"></Checkbox>
					<Checkbox parent={this} toUpdate="feedSolids" title="Solids"></Checkbox>
				</View>
				{
					this.state.feedSolids &&
					(<FeedSolidsType parent={this} toUpdate="feedSolidsType" />)
				}
				<SubmitFeed
					request={feedService.putFeed}
					data={this.state}
					value="Add Feed"
					successMsg="New Feed Added" />
			</Layout>
		);
	}
}