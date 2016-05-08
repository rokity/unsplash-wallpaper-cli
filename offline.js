module.exports=function offline(callback)
{
  var dlDir = __dirname+"/images/";
  var fs = require('fs');
  fs.readdir(dlDir, function(err, items)
  {
    var i=Math.floor(Math.random() * (items.length  + 1)) ;
    callback(dlDir+items[i]);
  });
}
