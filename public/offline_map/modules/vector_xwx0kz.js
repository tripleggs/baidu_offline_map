/**/_jsload2&&_jsload2('vector', 'x.extend(Ad.prototype,{ra:function(a,b){td.prototype.ra.call(this,a,b);this.Fg={};this.pr(a);this.Cq();this.Xq()},remove:function(){var a=this.D;td.prototype.remove.call(this);a&&(a.removeEventListener("zoomend",this.dl),a.removeEventListener("moveend",this.Ik),a.removeEventListener("resize",this.Pk),a.removeEventListener("hotspotclick",this.fM),a.km(this.k.Gk))},pr:function(a){this.D=a;this.WB=this.Pb;this.Ac=this.D.B.devicePixelRatio;this.xn=62;a.km(this.k.Gk);for(var b in this.rp)delete this.rp[b]}, Cq:function(){var a=this,b=this.D;a.dl=function(b){a.Xq(b)};a.Ik=function(b){a.Xq(b)};a.Pk=function(b){a.Xq(b)};a.fM=function(b){0<b.spots.length&&a.hU(b.spots[0].getUserData().uid)};b.addEventListener("zoomend",a.dl);b.addEventListener("moveend",a.Ik);b.addEventListener("resize",a.Pk);b.addEventListener("hotspotclick",a.fM)},hU:function(a){var b=this,c=(1E5*Math.random()).toFixed(0);!z._rd&&(z._rd={});z._rd["_cbk"+c]=function(a){b.qR(a);delete z._rd["_cbk"+c]};var d=b.sW;this.k.hh&&(d=b.tW);a=d+ a+"?scope=2&ak="+this.k.am+"&callback=BMap._rd._cbk"+c;this.k.hh&&(a+="&geotable_id="+this.k.hh);pa(a)},qR:function(a){var b=a.content;this.k.hh&&(b=a.contents[0]);if(a&&0==a.status&&b){var a={poiId:b.uid||"",databoxId:b.databox_id||"",title:this.k.hh?b.title:b.name,address:this.k.hh?b.address:b.addr,phoneNumber:b.tel||"",postcode:b.zip||"",provinceCode:1*b.province_id||-1,province:b.province||"",cityCode:1*b.city_id||-1,city:b.city||"",districtCode:1*b.district_id||-1,district:b.district||"",point:this.k.hh? new H(b.location[0],b.location[1]):new H(b.longitude,b.latitude),tags:b.tag&&b.tag.replace(/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g,"").split(/\\s+/),typeId:1*b.cla||-1,extendedData:b.ext||{}},c=new M("onhotspotclick");c.customPoi=a;c.content=b;this.WF&&this.WF.dispatchEvent(c);this.dispatchEvent(c)}},Xq:function(){var a=this.D,b=a.ga(),c=a.gb.Im(this.WB,"yun",this.xn);if(a.Wb()){this.Qm||(this.Qm=o,0<c.length&&(this.Ob=a.oa().k.Ob));this.jn=Math.pow(2,18-b);this.vh=c.length;a=0;for(b=c.length;a<b;a++)this.Er(c[a][0], c[a][1],c[a][2])}},Er:function(a,b,c){var d=this,e=d.map,f=e.wc(),g=new H(f.lng,f.lat),i=e.ga(),e=Dd[Math.abs(a+b)%Dd.length]+"/data?grids="+a+"_"+b+"_"+i+"&q="+this.k.fn+"&tags="+this.k.tu+"&filter="+this.k.filter+"&sortby="+this.k.Xy+"&ak="+this.k.am+"&age="+this.k.Gw,e=this.k.hh?e+("&geotable_id="+this.k.hh):e+("&databox_id="+this.k.NK);c.af=q;pa(e,function(e){var e=0==e.status?e.content[0].data:[],f=d.map,m=f.wc(),f=f.ga();m.ab(g)&&f==i&&(d.Xn(e,c,a,b,i),d.vh--,0==d.vh&&d.WF.dispatchEvent("oncustomlayerloaded"))})}, Xn:function(a,b,c,d,e){var f=b.getContext("2d");1<this.Ac&&!b.lg&&(f.scale(this.Ac,this.Ac),b.lg=o);b.VB||(b.VB=o,f.translate(this.xn/2,this.xn/2));for(var e="hotSpotTile_"+c+"_"+d+"_"+e,g=0,i=a.length;g<i;g++)this.JW(f,a[g],c,d,e,b)},JW:function(a,b,c,d,e,f){var g=this,i=b[0],k=b[1],l=b[2],m=b[3],g=this,n=this.Ob,b=this.jn,c=c*b*n,d=(d+1)*b*n;/^POINT\\((.*)\\)$/.test(l);var l=RegExp.$1.split(","),s=l[0],u=l[1],w=(s-c)/b,y=(d-u)/b,B=new Image;B.onload=function(){var b=this.width,c=this.height;a.drawImage(this, w-b/2,y-c);g.rp[e]||(b={userData:{name:i,uid:k},offsets:[c,b/2,0,b/2]},b=new jb(T.zb(new H(s,u)),b),g.D.Cw(b,g.k.Gk));setTimeout(function(){g.rp[e]=o;f.af=o},1E3);delete this.onload};this.XX(m,function(a){""==m&&(m="sid1");B.src=a&&a.content&&a.content[m]&&""!=a.content[m]?"data:image/png;base64,"+a.content[m]:F.qa+"madian.png"})},o4:function(){if(this.Pb){for(var a=this.Pb,b=0,c=a.childNodes.length;b<c;b++)a.childNodes[b].af=q;this.D.km(this.k.Gk);for(var d in this.rp)delete this.rp[d];this.Xq()}}, XX:function(a,b){var c=this,d=this.k.NK,e=this.k.I_,f=this.k.am;""==a&&(a="sid1");if(this.Fg[a]&&this.Fg[a].data)b(this.Fg[a].data);else{this.Fg[a]||(this.Fg[a]={},this.Fg[a].nC=[]);this.Fg[a].nC.push(b);var g=z.oc+"style/poi/rangestyle?method=getstyle";this.k.hh&&(d=this.k.hh);g+="&databox="+d+"&sid="+a+"&ak="+f;e&&(g+="&self_id="+e);this.Fg[a].GY||(setTimeout(function(){pa(g,function(b){var d=c.Fg[a].nC;c.Fg[a].data=b;for(var e=0;e<d.length;e++)d[e](b);c.Fg[a].nC.length=0})},10),c.Fg[a].GY=o)}}});x.extend(Bd.prototype,{ra:function(a,b){td.prototype.ra.call(this,a,b);this.pr(a);this.Cq();this.mv()},remove:function(){var a=this.D;td.prototype.remove.call(this);a.removeEventListener("zoomend",this.dl);a.removeEventListener("moveend",this.Ik);a.removeEventListener("resize",this.Pk)},pr:function(a){this.D=a;this.WB=this.Pb;this.Ac=this.D.B.devicePixelRatio;this.xn=0},Cq:function(){var a=this,b=this.D;a.dl=function(b){a.mv(b)};a.Ik=function(b){a.mv(b)};a.Pk=function(b){a.mv(b)};b.addEventListener("zoomend", a.dl);b.addEventListener("moveend",a.Ik);b.addEventListener("resize",a.Pk)},mv:function(){var a=this.D,b=a.gb.Im(this.WB,"traffic",this.xn);this.Qm||(this.Qm=o,0<b.length&&(this.Ob=a.oa().k.Ob));for(var a=0,c=b.length;a<c;a++)this.Er(b[a][0],b[a][1],b[a][2])},Er:function(a,b,c){var d=this,e=d.map,f=e.wc(),g=new H(f.lng,f.lat),i=e.ga(),k="_t"+parseInt(a+""+b+""+i).toString(36),e=this.e0+"&x="+a+"&y="+b+"&z="+i+"&fn=BMap."+k+"&t="+(new Date).getTime();c.af=q;z[k]=function(e){var f=d.map,n=f.wc(),f= f.ga();n.ab(g)&&f==i&&e.content&&e.content.tf&&d.Xn(e.content.tf,c,a,b);delete z[k]};pa(e,q)},Xn:function(a,b){var c=b.getContext("2d"),d=this.we,e=this.Cx,f=this.Dx;1<this.Ac&&!b.lg&&(c.scale(this.Ac,this.Ac),b.lg=o);b.VB||(b.VB=o,c.translate(this.xn/2,this.xn/2));for(var g=0,i=a.length;g<i;g++){var k=a[g],l=k[1],m=this.Db[k[3]],k=this.Db[k[4]],n=l[0]/10,s=l[1]/10;c.beginPath();c.moveTo(n,s);for(var u=2,w=l.length;u<w;u+=2)n+=l[u]/10,s+=l[u+1]/10,c.lineTo(n,s);c.strokeStyle=d(m[1]);c.lineWidth=m[2]; c.lineCap=e(m[3]);c.lineJoin=f(m[4]);c.stroke();c.strokeStyle=d(k[1]);c.lineWidth=k[2];c.lineCap=e(k[3]);c.lineJoin=f(k[4]);c.stroke()}b.af=o},we:function(a){a>>>=0;return"rgba("+(a>>24&255)+","+(a>>16&255)+","+(a>>8&255)+","+(a&255)/256+")"},Cx:function(a){return["butt","square","round"][a]},Dx:function(a){return["miter","bevel","round"][a]}});x.extend(db.prototype,{Ee:function(){this.ra(this.D,this.C)},ra:function(a,b){this.D=a;this.C=b;this.D&&this.C&&(this.pr(),this.TS(),this.Cq(),this.Wq())},remove:function(){var a=this.D;this.C.removeChild(this.Xa);a.removeEventListener("zoomend",this.dl);a.removeEventListener("moving",this.iN);a.removeEventListener("moveend",this.Ik);a.removeEventListener("resize",this.Pk)},pr:function(){var a=this.D,b=a.B.devicePixelRatio,c=a.oa().k.Ob,d=a.tb(),a=d.width,d=d.height;this.ci={};this.Ob=c;this.Ac=b; this.TE=a;this.SE=d;this.GC=a*b;this.FC=d*b},TS:function(){var a=this.D,b=this.C,c=document.createElement("canvas"),d=c.style;d.position="absolute";d.zIndex=5;d.left=-a.offsetX+"px";d.top=-a.offsetY+"px";d.width=this.TE+"px";d.height=this.SE+"px";c.setAttribute("width",this.GC);c.setAttribute("height",this.FC);b.appendChild(c);this.Xa=c;this.Nh=c.getContext("2d");a=this.Ac;1<a&&!c.lg&&(this.Nh.scale(a,a),c.lg=o)},Cq:function(){function a(){b.Xa.style.left=-c.offsetX+"px";b.Xa.style.top=-c.offsetY+ "px"}var b=this,c=b.D,d=b.Ac;b.dl=function(c){b.Xa.style.display=18>this.ga()?"none":"block";a();b.Wq(c)};b.iN=function(c){var d=(new Date).getTime();100>d-b.EM||(b.EM=d,a(),b.Wq(c))};b.Ik=function(c){a();b.Wq(c)};b.Pk=function(e){var f=c.tb(),g=f.width,f=f.height,i=g*d,k=f*d;b.Xa.style.width=g+"px";b.Xa.style.height=f+"px";b.Xa.setAttribute("width",i);b.Xa.setAttribute("height",k);b.TE=g;b.SE=f;b.GC=i;b.FC=k;a();b.Wq(e)};c.addEventListener("zoomend",b.dl);c.addEventListener("moving",b.iN);c.addEventListener("moveend", b.Ik);c.addEventListener("resize",b.Pk)},Wq:function(a){var b=this.D,c=b.ga();if(!(18>c)){var d=b.gb.DL(),e=d[0],b=d[1],f=d[2],d=d[3],a=a?q:o,g;for(g in this.ci)for(var i=e;i<f;i++)for(var k=b;k<d;k++)g==i+"_"+k+"_"+c&&(this.ci[g].jI=o);for(g in this.ci)this.ci[g].jI?delete this.ci[g].jI:(this.ci[g]=p,delete this.ci[g]);this.Nh.clearRect(0,0,this.GC,this.FC);for(i=e;i<f;i++)for(k=b;k<d;k++)(g=this.ci[i+"_"+k+"_"+c])?this.Xn(g,i,k,c,a):this.Er(i,k,c,a)}},Er:function(a,b,c,d){var e=this,f=e.D,g=e.EV, i=(a+b)%g.length,k="x="+a+"&y="+b+"&z="+c,l=f.ba.replace(/^TANGRAM_/,"")+"building"+parseInt(a+""+b+""+c).toString(36),g=g[i]+"qt=hjpgvd&"+k+"&styles=pl&layers=bg&features=bd&f=mwebapp&v=001&udt=20130501&fn=BMap."+l,i=f.wc(),m=new H(i.lng,i.lat),n=f.ga();z[l]=function(g){if(g=g.content){var i=f.wc(),k=f.ga();if(!i.ab(m)||k!=n){delete z[l];return}if(g=window.rZ(g))e.Xn(g,a,b,c,d),e.ci[a+"_"+b+"_"+c]=g}delete z[l]};pa(g)},Xn:function(a,b,c,d,e){e&&this.k.pL?this.xR(a,b,c,d):this.yH(a,b,c,d,1)},xR:function(a, b,c,d){var e=this;a.jQ=new tb({Hc:50,duration:200,va:function(f){e.yH(a,b,c,d,f)},finish:function(){a.jQ=p}})},yH:function(a,b,c,d,e){var f=this.D,g=this.TE,i=this.SE,d=f.oa().yc(d),f=f.dc,k=this.Ob,b=b*k-f.lng/d,c=(-1-c)*k+f.lat/d,d=this.Nh,f=a.length,k=0,l=window.Db;d.save();for(d.translate(b+g/2,c+i/2);k<f;k++){var m=a[k],n=l[m[3]];if(4==n[0]){var s=m[7];window.VectorDrawUtils.jD(d,m[1],6*(m[2]*n[3])*e,90*((b+(s[0]+s[2])/2)/(g/2)),90*((c+(s[1]+s[3])/2)/(i/2)),"rgba(212,205,197,1)","rgba(235,233,228,1)", "rgba(170,170,170,1)",1)}}d.restore()}}); ');