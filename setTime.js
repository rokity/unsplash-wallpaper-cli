module.exports=function setTime(time)
{
  setTimeout(function()
  {
    var wallpaper=require("./wallpaper.js");
    var getImages=require("./getImages.js");
    getImages("https://source.unsplash.com/random",wallpaper);
    setTime(time);
  }, time);
}
