module.exports=function getImages(uri,callback)
 {
  var request = require('request');
  var cheerio = require('cheerio');
  var url = require('url');
  var fs=require("fs");
  var exec = require('child_process').exec;
  var dlDir = __dirname+"/images/";
  request(uri, function(err, resp, body)
  {
    if (err)
    {
      var offline=require('./offline.js');
      var path=offline(callback);
    }
    else
    {
              var fileUrl = resp.request.uri.href;
              var format="."+url.parse(fileUrl).query.split("&")[2].substring(3);
              var fileName = url.parse(fileUrl).pathname.split('/').pop().split('?').shift();

              //in curl we have to escape '&' from fileUrl
              var curl =  'curl ' + fileUrl.replace(/&/g,'\\&') +' -o ' + dlDir+fileName +format+ ' --create-dirs';
              var child = exec(curl, function(err, stdout, stderr)
               {
                  if (err)
                  {
                    var offline=require('./offline.js');
                    var path=offline(callback);
                  }
                  else
                      callback(dlDir+fileName +format);

              });
        }
      });
};
