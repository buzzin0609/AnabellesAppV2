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