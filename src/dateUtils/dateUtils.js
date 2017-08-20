/**
 * Created by Will Busby on 17/08/2017.
 * Description:
 */

const service = {
	isDay,
	isToday,
	isYesterday,
	dayText
};

export default service;

function isDay(day1, day2) {
	return day1.setHours(0, 0, 0, 0) === day2.setHours(0, 0, 0, 0);
}

function isToday(date) {
	return isDay(date, new Date());
}

function isYesterday(date) {
	const d = new Date();
	d.setDate(d.getDate() - 1);

	return isDay(date, d);
}

function dayText(date) {
	return isToday(date) ? 'Today' : isYesterday(date) ? 'Yesterday' : date.toDateString();
}