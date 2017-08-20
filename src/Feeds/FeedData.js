/**
 * Created by will0 on 16/08/2017.
 */

import model from './feedModel';
import props from './feedProps';

export default class FeedData {
	constructor(args = {}) {
		Object.assign(this, model, args);
		if (!this.feedTime) {
			const date = new Date();
			this.feedTime = date.toISOString();
			this.timestamp = date.getTime();
		}
	}
}

export function prepareFeed(args = {}) {
	const feedDataArgs = {};

	props.forEach(prop => {
		if (args[prop]) {
			feedDataArgs[prop] = args[prop];
		}
	});

	return new FeedData(feedDataArgs);

}