/**
 * Created by will0 on 14/08/2017.
 */

import React from 'react';
import Layout from '../Layout';
import PageHeader from '../shared/PageHeader';
import getFeedService from '../FeedService/FeedService';
import Feed from './Feed';
import dateUtils from '../dateUtils/dateUtils';
import Title from '../shared/Title';
import FeedPagination from './FeedPagination';
import FeedModal from './FeedModal';
import FeedStats from './FeedStats';
import events from '../shared/events';

const feedService = getFeedService();

export default class FeedsView extends React.Component {

	constructor(props) {
		super(props);

		this.event = void 0;

		this.state = {
			date: this.props.date || new Date(),
			feeds: [],
			loading: true,
			modalShowing: false,
			modalFeed: void 0
		};
	}

	componentWillMount() {
		console.log('adding event');
		if (this.event && this.event.remove) {
			this.event.remove();
		}

		this.event = events().addListener('modal', this.showModal.bind(this));
		this.addFeeds();
	}

	addFeeds() {
		return feedService.addFeedsByDay(this, this.state.date.getTime());
	}

    render() {
		const dayText = dateUtils.dayText(this.state.date);
        return (
			<Layout {...this.props}>
				<PageHeader title="Feeds" />
				<Title>{dayText}</Title>
				<FeedStats feeds={this.state.feeds} />
				{
					this.renderFeeds()
				}
				<FeedPagination parent={this} date={this.state.date} />
				{
					this.state.modalShowing &&
						<FeedModal feed={this.state.modalFeed} parent={this} />
				}
			</Layout>
		);
    }

	renderFeeds() {
		if (this.state.loading) {
			return <Title>Loading Feeds</Title>
		} else {
			return (this.state.feeds.length > 0 &&
			this.state.feeds.map((feed, i) => <Feed key={feed.timestamp + i} {...feed} />) ||
			<Title>No Feeds</Title>);
		}
	}

	changeDay(day) {
		this.setState({
			date: day
		});

		feedService.addFeedsByDay(this, day.getTime());
	}

	showModal(feed) {
		this.setState({
			modalShowing: true,
			modalFeed: feed
		})
	}

	hideModal() {
		this.setState({
			modalShowing: false,
			modalFeed: void 0
		});
	}
}