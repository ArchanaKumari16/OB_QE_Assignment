var fs = require('fs');

fs.readFile('input.json', function(err, data){
   if(err) throw err;
   let info = JSON.parse(data);
   console.log(info);
   info.company = 'Wipro Ltd.';
   let newData = JSON.stringify(info);
   fs.writeFileSync('output.json', newData);
   console.log(newData);
   }
);