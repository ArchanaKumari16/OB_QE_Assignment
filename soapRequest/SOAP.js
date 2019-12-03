var http_post = require('http-post');
var xml2js = require('xml2js');
var parseString = require('xml2js').parseString;

var headers = {"Content-Type": "application/soap+xml", "Content-Length": "nnn"};
var body = '<?xml version="1.0"?><soap:Envelope xmlns:soap="http://www.w3.org/2001/12/soap-envelope"soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding"><soap:Body xmlns:m="http://www.example.org/stock"><m:GetStockPrice><m:StockName>IBM</m:StockName></m:GetStockPrice></soap:Body></soap:Envelope>';

http_post('http://jsonplaceholder.typicode.com/posts', headers, body, function(res){
    res.on('data', data => {
        console.log(res);
        console.log(data);
        console.log(res.statusCode);
        function verifyStatusCode() {
            return res.statusCode === 201;
        }
        console.log(verifyStatusCode());
        let xmlResInfo = res.body;
		console.log(xmlResInfo);
        let jsonResInfo = parseString(xmlResInfo, function(err, jsonObj){
            if(err) console.log(err);
		console.log(jsonObj);
        });
        function verifyStockPrice() {
            return jsonResInfo.Envelope.Body.GetStockPriceResponse.price._text !== null && typeof jsonResInfo.Envelope.Body.GetStockPriceResponse.price._text === 'string';
        }
        console.log(verifyStockPrice());
    });
});