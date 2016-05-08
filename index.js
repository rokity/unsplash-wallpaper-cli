var time=(process.argv[2]=="--time" || process.argv[2]=="-t") ? process.argv[3]:null;

if(!time)
{
  var wallpaper=require("./wallpaper.js");
  var getImages=require("./getImages.js");
  getImages("https://source.unsplash.com/random",wallpaper);
}
else
{
  var setTime=require("./setTime.js");
  setTime(time*1000);
}
