const http_post = require('https-post');

https_post('https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 }, function(res){
    res.on('data', data => {
        console.log(res.statusCode);
        function verifystatuscode() {
            return res.statusCode === 201;
        }
        console.log(verifystatuscode());
        let info = JSON.parse(data);
        function verifyuserid() {
            return info.userId === '1';
        }
        console.log(verifyuserid());
    });
});