const assert = require('assert');
const http_post = require('http-post');

module.exports = function () {
	let requestURL = '';

	this.Given(/^I launch the request url$/, function () {
		requestURL = 'http://jsonplaceholder.typicode.com/posts';
		http_post(requestURL, { title: 'foo', body: 'bar', userId: 1 });
    });

	this.Then(/^I verify the "(.*)" (statuscode|userid) in the post call response$/, function (expectedValue,inputValue) {
		if(inputValue === "statuscode"){
			http_post('http://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 }, function(res){
				res.on('data', data => {
					console.log(res.statusCode);
					function verifystatuscode() {
					return res.statusCode === expectedValue;
					}
					console.log(verifystatuscode());
				})
			})	
		}
		else if(inputValue === "userid"){
			http_post('http://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 }, function(res){
				res.on('data', data => {
					let info = JSON.parse(data);
					data = JSON.stringify(info);
					console.log(data);
					function verifyuserid() {
						return info.userId === expectedValue;
					}
					console.log(verifyuserid());
				})
			})
		}			
	});
}