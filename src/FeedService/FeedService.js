/**
 * Created by will0 on 14/08/2017.
 */

import ajax from '../ajax/ajax';

export class FeedService {
	latestFeed() {
		return ajax.getJSON('rest/feeds/latest');
	}

	putFeed(feed) {
		return ajax.request('rest/feeds/' + feed.timestamp, 'PUT', JSON.stringify(feed));
	}

	deleteFeed(feed) {
		return ajax.request('rest/feeds/' + feed.timestamp, 'DELETE');
	}

	getFeeds(timestamp) {
		return ajax.getJSON('rest/feeds/' + (timestamp || ''));
	}

	filterFeeds(filter, queryStr) {
		return ajax.getJSON(`rest/feeds?filter=${filter}&${queryStr}`);
	}

	async addFeeds(Component, timestamp) {
		const feeds = await this.getFeeds(timestamp);
		Component.setState({
			feeds
		});
	}

	async addFeedsByDay(Component, timestamp) {
		Component.setState({loading: true});
		const feeds = await this.filterFeeds('byDay', 'timestamp=' + timestamp);
		Component.setState({
			feeds,
			loading: false
		})
	}
}

let feedService = void 0;

export default function getFeedService() {
	if (!feedService) {
		feedService = new FeedService();
	}

	return feedService;
}