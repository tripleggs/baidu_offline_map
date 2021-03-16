var bmapcfg = {
  'imgext'      : '.png',   //瓦片图的后缀 ------ 根据需要修改，一般是 .png .jpg 瓦片下载工具在github可以找到，找不到可以给我留言或加QQ:643218902
  // 'tiles_dir'   : 'http://localhost:15678/download/bmap',       //普通瓦片图的地址，为空默认在 offlinemap/tiles/ 目录
  'tiles_hybrid': '',       //卫星瓦片图的地址，为空默认在 offlinemap/tiles_hybrid/ 目录
  'tiles_self'  : ''        //自定义图层的地址，为空默认在 offlinemap/tiles_self/ 目录
};

var scripts = document.getElementsByTagName("script");
var JS__FILE__ = scripts[scripts.length - 1].getAttribute("src");  //获得当前js文件路径
bmapcfg.home = JS__FILE__.substr(0, JS__FILE__.lastIndexOf("/")+1); //地图API主目录
(function(){
  window.BMap_loadScriptTime = (new Date).getTime()
  window.BMap.apiLoad = function() {
    delete window.BMap.apiLoad
    if (typeof _initBaiduMap == 'function') {
      _initBaiduMap()
    }
  }
  var a = document.createElement('script')
  a.src = '/offline_map/bmap_original_api_v3.0_min.js'
  document.body.appendChild(a);
})();
