/**/_jsload2&&_jsload2('clayer', 'x.extend(ob.prototype,{el:{},Ij:[],Ru:"",rq:"",LG:"",fl:p,Kg:p,Jg:p,Ig:[],KG:0,uz:t(),pz:t(),Lu:t(),Sd:function(){this.TG()},ra:function(a,b){td.prototype.ra.call(this,a,b);this.el={};this.Ij=[];this.D=a;this.TG()},Et:ea(o),remove:function(){td.prototype.remove.call(this);this.YT()},TG:function(){var a=this,b=a.D;b&&(this.uz=function(b){a.qT(b)},this.pz=function(b){a.RS(b)},this.Lu=function(b){a.QS(b)},b.addEventListener("mousemove",this.uz),b.addEventListener("onhotspotover",this.pz),b.addEventListener("onhotspotout", this.Lu),b.addEventListener("onzoomstart",this.Lu))},YT:function(){var a=this.D;a&&(a.removeEventListener("mousemove",this.uz),a.removeEventListener("onhotspotover",this.pz),a.removeEventListener("onhotspotout",this.Lu))},qT:function(a){var b=this,c=b.D,d=c.oa();if(c.ga()<this.fc||c.Wb())b.zB();else if(a=d.kp().ph(a.point),d=d.k.Ob,a=new S(Math.floor(a.x*Math.pow(2,c.ga()-18)),Math.floor(a.y*Math.pow(2,c.ga()-18))),d=new S(Math.floor(a.x/d),Math.floor(a.y/d)),this.rq=c=d.x+"_"+d.y+"_"+c.ga(),this.el[c]){if(this.Ru!= c){b.zB();b.SG(this.el[c]);this.Ru=c;for(var d=-1,a=0,e=this.Ij.length;a<e;a++)if(c==this.Ij[a]){d=a;break}0<=d&&(this.Ij.splice(d,d),this.Ij.push(c))}}else if(this.LG!=c){this.LG=c;d=Dd[parseInt(Math.random()*Dd.length)];a=b.nc;c=d+"/data?grids="+c+"&q="+a.fn+"&tags="+a.tu+"&filter="+a.filter+"&sortby="+a.Xy+"&ak="+a.am+"&page_size="+a.KN+"&age="+a.Gw;b.Bf?c+="&geotable_id="+b.Bf:b.Wn&&(c+="&databox_id="+b.Wn);var f=(1E5*Math.random()).toFixed(0);!z._rd&&(z._rd={});z._rd["_cbk"+f]=function(a){b.JS(a); delete z._rd["_cbk"+f]};pa(c+("&callback=BMap._rd._cbk"+f))}},JS:function(a){var b=this.D,c=a.content;if(!(a.status!=this.KG||!c||1>c.length)){for(var a=[],d=c[0].data,b=b.oa().kp(),e=0,f=d.length;e<f;e++){var g=d[e][2].replace(ob.lU,"").split(","),g=b.th(new H(g[0],g[1]));a.push({pt:g,userdata:{name:d[e][0]||"name",size:d[e][4]?d[e][4].split("|"):[10,13],uid:d[e][1]||"",sO:d[e][3]||"sid1"}})}c=c[0].grid.join("_");this.el[c]=a;this.Ij.push(c);30<this.Ij.length&&(c=this.Ij.shift(),delete this.el[c], delete c);this.Ru!=this.rq&&(this.zB(),this.el[this.rq]&&(this.SG(this.el[this.rq]),this.Ru=this.rq))}},SG:function(a){for(var b=this.D,c=0,d=a.length;c<d;c++){var e=a[c].userdata.size,f=e[0]/2,e=e[1]/2,f=new jb(a[c].pt,{offsets:[e,f,e,f],userData:a[c].userdata});b.Cw(f,this.nc.Gk)}},zB:function(){this.D.km(this.nc.Gk)},RS:function(a){if(a.spots&&!(1>a.spots.length||a.spots[0].tag!=this.nc.Gk)){this.Ig=a.spots;var b=this,a=this.Ig[0].getUserData().size[0],c="",d=b.D,e="",f=b.nc.NY;0<this.Ig.length&& (c=this.Ig[0].getUserData().name);if(this.Kg)this.Kg.ta(this.Ig[0].ha()),this.Jg.bd(c),this.Jg.Ye(new L(a,0)),this.Kg.show(),c?this.Jg.show():this.Jg.U();else{var g=this.Ig[0].getUserData().size,e=this.Ig[0].getUserData().sO,i=this.Bf||this.Wn;this.fl=new $c(F.qa+"blank.gif",new L(g[0],g[1]),{anchor:new L(g[0]/2+1,g[1]/2+1)});this.zS(i,e,function(){b.Kg&&b.Kg.Vb(b.fl)});this.Kg=new V(this.Ig[0].ha(),{icon:this.fl,enableMassClear:q});d.Ja(this.Kg);this.Jg=new dd(c,{offset:new L(a,0)});this.Jg.Nd({backgroundColor:f.backgroundColor, borderColor:f.borderColor});this.Kg.mn(this.Jg);c?this.Jg.show():this.Jg.U();this.Kg.addEventListener("onclick",function(){if(!(b.Ig.length<1)&&b.Ig[0].getUserData().uid){var a=b.nc,c=a.mY;if(b.Bf)c=a.nY;a=c+b.Ig[0].getUserData().uid+"?scope=2&ak="+a.am;b.Bf&&(a=a+("&geotable_id="+b.Bf));var d=(Math.random()*1E5).toFixed(0);!z._rd&&(z._rd={});z._rd["_cbk"+d]=function(a){b.yS(a);delete z._rd["_cbk"+d]};pa(a+("&callback=BMap._rd._cbk"+d))}})}}},yS:function(a){var b=a.content;this.Bf&&(b=a.contents[0]); if(a&&a.status==this.KG&&b){var a={poiId:b.uid||"",databoxId:b.databox_id||"",title:this.Bf?b.title:b.name,address:this.Bf?b.address:b.addr,phoneNumber:b.tel||"",postcode:b.zip||"",provinceCode:1*b.province_id||-1,province:b.province||"",cityCode:1*b.city_id||-1,city:b.city||"",districtCode:1*b.district_id||-1,district:b.district||"",point:this.Bf?new H(b.location[0],b.location[1]):new H(b.longitude,b.latitude),tags:b.tag&&b.tag.replace(ob.oU,"").split(ob.mU),typeId:1*b.cla||-1,extendedData:b.ext|| {}},c=new x.lang.oz("onhotspotclick");c.customPoi=a;c.content=b;this.dispatchEvent(c)}},QS:function(){this.Kg&&this.Kg.U();this.Jg&&this.Jg.U()},zS:function(a,b,c){var d=this,e=Ed+"?method=getstyle&databox="+a+"&sid="+b,f=(1E5*Math.random()).toFixed(0);if(!d.fl||!(d.fl.databoxid==a&&d.fl.sid==b))!z._rd&&(z._rd={}),z._rd["_cbk"+f]=function(a){var b="";0==a.status&&(b="data:image/png;base64,"+a.content.sid1);0<b.length&&(d.fl.fO(b),c&&c(a));delete z._rd["_cbk"+f]},pa(e+("&callback=BMap._rd._cbk"+f))}}); ');