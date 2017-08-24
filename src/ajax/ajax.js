import dataUrl from './dataUrl';

export default {
    request: function (url, method, data) {
        method = method || 'GET';

        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    resolve(this.responseText);
                }
            });

            xhr.open(method, `${dataUrl}/${url}`);

            if (method === 'GET') {
                xhr.send();
            } else {
                xhr.setRequestHeader("content-type", "application/json");
                xhr.send(data);    
            }
            
        });
    },
    get: function (url) {
        return this.request(url, 'GET');
    },
    getJSON: function(url) {
        return this.request(url, 'GET')
            .then(data => {
				return Promise.resolve(JSON.parse(data));
            });
    },
    post: function (url, data) {
        return this.request(url, 'POST', data);
    }
}

// async function populateLocal() {
// 	const feeds = await ajax.getJSON('rest/feeds');
// 	for (let i = 0, l = feeds.length; i < l; i++) {
// 		await ajax3.request('rest/feeds/' + feeds[i].timestamp, 'PUT', JSON.stringify(feeds[i]));
// 	}
// }
//
// populateLocal()