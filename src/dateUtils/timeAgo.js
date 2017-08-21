/**
 * Created by Will Busby on 19/08/2017.
 * Description:
 */

const templates = {
	suffix: " ago",
	seconds: "less than a minute",
	minute: "%d minute",
	minutes: "%d minutes",
	hour: "%d hour",
	hours: "%d hours",
	day: "a day",
	days: "%d days",
	month: "about a month",
	months: "%d months",
	year: "about a year",
	years: "%d years"
};
const template = function(t, n) {
	return templates[t] && templates[t].replace(/%d/i, Math.floor(n));
};

export default function timeAgo(date) {
	const time = new Date(date);

	const now = new Date();
	const seconds = ((now.getTime() - time) * .001) >> 0;
	const minutes = (seconds / 60) % 60;
	const hours = (seconds / 3600) % 24;
	const days = hours / 24;
	const years = days / 365;

	return seconds < 60 && template('seconds', seconds) || (
		hours > 0 && hours < 2 && template('hour', hours) ||
		hours >= 2 && template('hours', hours) ||
		''
	) + ' ' + (
		minutes > 0 && minutes < 2 && template('minute', minutes) ||
		minutes >= 2 && template('minutes', minutes) ||
		''
	) + templates.suffix;
}