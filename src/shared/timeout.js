
/**
 * Simple timeout function. Use with async functions to choose-city a simpler async delay in your code
 * @param {Number} time - delay in milliseconds
 * @returns {Promise}
 */
export default function timeout(time) {
	return new Promise(resolve => {
		setTimeout(() => {
			requestAnimationFrame(function() {
				resolve();
			});
		}, time);
	});
}
