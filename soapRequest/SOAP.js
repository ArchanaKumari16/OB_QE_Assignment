var https = require('https');
var https.post = require('https-post');
var xml2js = require('xml2js');
var parseString = require('xml2js').parseString;

var headers = {"Content-Type": "application/soap+xml", "Content-Length": "nnn"};
headers = JSON.parse(headers);
var body = `<?xml version="1.0"?>
<soap:Envelope
xmlns:soap="http://www.w3.org/2001/12/soap-envelope"
soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">
  <soap:Body xmlns:m="http://www.example.org/stock">
    <m:GetStockPrice>
      <m:StockName>IBM</m:StockName>
    </m:GetStockPrice>
  </soap:Body>
</soap:Envelope>`;

https.post(' https://jsonplaceholder.typicode.com/posts', headers, body, function(res){
    res.on('data', data => {
        console.log(res.statusCode);
        function verifyStatusCode() {
            return res.statusCode === 201;
        }
        console.log(verifyStatusCode());
        let xmlResInfo = res.body;
        parseString(xmlResInfo, function(err, jsonResInfo){
            if(err) console.log(err);
		console.log(jsonResInfo);
        });
        function verifyStockPrice() {
            return jsonResInfo.Body.GetStockPriceResponse.price !== null && typeof jsonResInfo.Body.GetStockPriceResponse.price === 'string';
        }
        console.log(verifyStockPrice());
    });
});
