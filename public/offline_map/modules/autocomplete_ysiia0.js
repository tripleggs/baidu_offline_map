/**/_jsload2&&_jsload2('autocomplete', 'x.lang.Da.prototype.li=ia(0,function(){delete window[x.ba]._instances[this.ba];for(var a in this)x.lang.Bt(this[a])||delete this[a]});x.K.getComputedStyle=function(a,b){var a=x.K.Uj(a),c=x.K.UD(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,p))?c[b]||c.getPropertyValue(b):""};x.K.remove=function(a){var a=x.K.Uj(a),b=a.parentNode;b&&b.removeChild(a)};x.lang.isArray=function(a){return"[object Array]"==Object.prototype.toString.call(a)}; x.event=x.event||{};x.event.stopPropagation=function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=o};x.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=q};x.event.stop=function(a){var b=x.event;b.stopPropagation(a);b.preventDefault(a)};x.jc.indexOf=function(a,b,c){var d=a.length,c=c|0;for(0>c&&(c=Math.max(0,d+c));c<d;c++)if(c in a&&a[c]===b)return c;return-1};x.jc.contains=function(a,b){return 0<=x.jc.indexOf(a,b)};x.Qb=x.Qb||{version:"1.3.9"}; x.Qb.cY=function(a){for(var a=a.split("-"),b=x.Qb,c=a.length,d=0;d<c;d++)b=b[a[d].charAt(0).toUpperCase()+a[d].slice(1)];return b};x.Qb.create=function(a,b){x.lang.tg(a)&&(a=x.Qb.cY(a));return new a(b)};x.event.$A=x.event.$A||[]; x.event.M=function(a,b,c){function d(b){c.call(a,b)}var b=b.replace(/^on/i,""),a=x.K.Uj(a),e=x.event.$A,f=x.event.g1,g=b,b=b.toLowerCase();f&&f[b]&&(f=f[b](a,b,d),g=f.type,d=f.F3);a&&a.addEventListener?a.addEventListener(g,d,q):a&&a.attachEvent&&a.attachEvent("on"+g,d);e[e.length]=[a,b,c,d,g];return a};x.M=x.event.M; x.event.cd=function(a,b,c){for(var a=x.K.Uj(a),b=b.replace(/^on/i,"").toLowerCase(),d=x.event.$A,e=d.length,f=!c,g,i;e--;)if(g=d[e],g[1]===b&&g[0]===a&&(f||g[2]===c))i=g[4],g=g[3],a.removeEventListener?a.removeEventListener(i,g,q):a.detachEvent&&a.detachEvent("on"+i,g),d.splice(e,1);return a};x.cd=x.event.cd; x.Qb.tG={id:"",Yb:function(a){var b;b="tangram-"+this.zu+"--"+(this.id?this.id:this.ba);return a?b+"-"+a:b},Zs:function(a){var b=this.vK,c=this.D_;a&&(b+="-"+a,c+="-"+a);this.D_&&(b+=" "+c);return b},qi:function(){return x.$(this.WM)},kX:function(){return x.$(this.Yb())},zu:"",cp:function(){return"window[\'$BAIDU$\']._instances[\'"+this.ba+"\']"},F2:function(a){for(var b=0,c=Array.prototype.slice.call(arguments,1),d=c.length;b<d;b++)"string"==typeof c[b]&&(c[b]="\'"+c[b]+"\'");return this.cp()+"."+a+"("+ c.join(",")+");"},M:function(a,b,c){x.M(a,b,c);this.addEventListener("ondispose",function(){x.cd(a,b,c)})},HZ:function(a){if(!this.qi())return a=x.$(a),a||(a=document.createElement("div"),document.body.appendChild(a),a.style.position="absolute",a.className=this.Zs("main")),a.id||(a.id=this.Yb("main")),this.WM=a.id,a.setAttribute("data-guid",this.ba),a},li:function(){this.dispatchEvent("dispose");x.lang.Da.prototype.li.call(this)}}; x.Qb.kW=function(a){function b(){}function c(b,d){var m=this,b=b||{};e.call(m,!f?b:b.ba||"",o);x.object.extend(m,c.options);x.object.extend(m,b);m.vK=m.vK||"tangram-"+m.zu.toLowerCase();for(g in x.Qb.fm)"undefined"!=typeof m[g]&&m[g]&&(x.object.extend(m,x.Qb.fm[g]),x.lang.Bt(m[g])?m.addEventListener("onload",function(){x.Qb.fm[g].call(m[g].apply(m))}):x.Qb.fm[g].call(m));a.apply(m,arguments);g=0;for(i=c.Dz.length;g<i;g++)c.Dz[g](m);b.parent&&m.r_&&m.r_(b.parent);!d&&b.L1&&m.va(b.element)}var d;d= d||{};var e=d.M_||x.lang.Da,f=e==x.lang.Da?1:0,g,i;b.prototype=e.prototype;d=c.prototype=new b;for(g in x.Qb.tG)d[g]=x.Qb.tG[g];c.extend=function(a){for(g in a)c.prototype[g]=a[g];return c};c.Dz=[];c.Xe=function(a){"function"==typeof a&&c.Dz.push(a)};c.options={};return c};x.K.OD=function(a,b){a=x.K.$(a);if(a===p)return a;if("style"==b)return a.style.cssText;b=x.K.QG[b]||b;return a.getAttribute(b)};x.OD=x.K.OD; x.Qb.get=function(a){var b;if(x.lang.tg(a))return x.lang.Lc(a);do{if(!a||9==a.nodeType)return p;if(b=x.K.OD(a,"data-guid"))return x.lang.Lc(b)}while((a=a.parentNode)!=document.body)}; x.Qb.Ki=x.Qb.kW(function(){var a=this;a.addEventListener("onload",function(){eventName=G()?"touchstart":"mousedown";a.M(document,eventName,a.BW);a.M(window,"blur",a.v0)});a.BW=a.kS();a.v0=a.LS();a.vk=[];a.Yc=-1}).extend({zu:"suggestion",R3:new Function,V3:new Function,S3:new Function,U3:new Function,X3:new Function,T3:new Function,getData:function(){return[]},k4:"",J1:"",rm:{},a0:"<div id=\'#{0}\' class=\'#{1}\' style=\'position:relative; top:0px; left:0px\'></div>",Q4:"<div id=\'#{0}\' class=\'#{1}\'>#{2}</div>", $_:\'<div style="height:22px;line-height:22px;overflow:hidden;zoom:1;border-top:#E7E7E7 solid 1px;background:#F7F7F7;"><span style="float:right;color:#4B4B4B;border-left:1px solid #E7E7E7;padding:0 10px;font-size:14px;" onmousedown="#{0}">\\u5173\\u95ed</span></div>\',Z_:\'<table cellspacing="0" cellpadding="2"><tbody>#{0}</tbody></table>\',b0:\'<tr><td id="#{0}" onmouseover="#{2}" onmouseout="#{3}" onmousedown="#{4}" onclick="#{5}" class="#{6}"><i class="route-icon">#{1}</i></td></tr>\',UX:function(){return x.$o(this.a0, this.Yb(),this.Zs(),this.ba)},va:function(a,b){var c,a=x.$(a);this.iC=b;!this.qi()&&a&&(this.O_=a.id?a.id:a.id=this.Yb("input"),c=this.HZ(),c.style.display="none",c.innerHTML=this.UX(),this.dispatchEvent("onload"))},VA:function(){var a=this.qi();return a&&"none"!=a.style.display},Dj:function(a){var b=this.rm,a={data:{item:(b&&"number"==typeof a&&"undefined"!=typeof b[a]?b[a].value:a)==a?{value:a,content:a}:b[a],index:a}};this.dispatchEvent("onbeforepick",a)&&this.dispatchEvent("onpick",a)},show:function(a, b,c){var a=0,d=b.length;this.vk=[];this.Yc=-1;if(0==d&&!c)this.U();else{for(this.rm=[];a<d;a++)"undefined"!=typeof b[a].value?this.rm.push(b[a]):this.rm.push({value:b[a],content:b[a]}),("undefined"==typeof b[a].disable||b[a].disable==q)&&this.vk.push(a);this.kX().innerHTML=this.fS();this.qi().style.display="block";this.dispatchEvent("onshow")}},U:function(){if(this.VA()){if(0<=this.Yc&&this.lY)for(var a=this.rm,b=-1,c=0,d=a.length;c<d;c++)if("undefined"==typeof a[c].disable||a[c].disable==q)b++,b== this.Yc&&this.Dj(c);this.qi().style.display="none";this.dispatchEvent("onhide")}},nt:function(a){var b=this.vk,c=p;this.qr(a)&&(0<=this.Yc&&this.nH(),c=this.UH(a),x.Ta(c,this.Zs("current")),this.Yc=x.jc.indexOf(b,a),this.dispatchEvent("onhighlight",{index:a,data:this.zm(a)}))},uC:function(){var a=this.vk[this.Yc];this.nH()&&this.dispatchEvent("onclearhighlight",{index:a,data:this.zm(a)})},nH:function(){var a=this.Yc,b=this.vk,c=p;return 0<=a?(c=this.UH(b[a]),x.Tb(c,this.Zs("current")),this.Yc=-1, o):q},confirm:function(a,b){if("keyboard"==b||this.qr(a))this.Dj(a),this.dispatchEvent("onconfirm",{data:this.zm(a)||a,source:b}),this.Yc=-1,this.U()},zm:function(a){return{item:this.rm[a],index:a}},hE:function(){return this.Gm().value},Gm:function(){return x.$(this.O_)},UH:function(a){return x.$(this.Yb("item"+a))},fS:function(){for(var a="",b=[],c=this.rm,d=c.length,e=0;e<d;e++)b.push(x.$o(this.b0,this.Yb("item"+e),c[e].content,this.cp()+"._itemOver(event, "+e+")",this.cp()+"._itemOut(event, "+ e+")",this.cp()+"._itemDown(event, "+e+")",this.cp()+"._itemClick(event, "+e+")","undefined"==typeof c[e].disable||c[e].disable==q?"":this.Zs("disable")));a+=x.$o(this.Z_,b.join(""));G()&&(a+=x.$o(this.$_,this.cp()+"._close(event)"));return a},_close:function(){this.U()},_itemOver:function(a,b){x.event.stop(a||window.event);this.qr(b)&&this.nt(b);this.dispatchEvent("onmouseoveritem",{index:b,data:this.zm(b)})},_itemOut:function(a,b){x.event.stop(a||window.event);this.lY||this.qr(b)&&this.uC();this.dispatchEvent("onmouseoutitem", {index:b,data:this.zm(b)})},_itemDown:function(a,b){x.event.stop(a||window.event);this.dispatchEvent("onmousedownitem",{index:b,data:this.zm(b)})},_itemClick:function(a,b){x.event.stop(a||window.event);this.dispatchEvent("onitemclick",{index:b,data:this.zm(b)});this.qr(b)&&this.confirm(b,"mouse")},qr:function(a){return x.jc.contains(this.vk,a)},kS:function(){var a=this;return function(b){var b=b||window.event,b=b.target||b.srcElement,c=x.Qb.get(b);b==a.Gm()||c&&c.zu==a.zu||a.U()}},LS:function(){var a= this;return function(){a.U()}},li:function(){this.dispatchEvent("dispose");x.K.remove(this.WM);x.lang.Da.prototype.li.call(this)}});x.Qb.fm=x.Qb.fm||{};x.K.children=function(a){a=x.K.$(a);if(a===p)return a;for(var b=[],a=a.firstChild;a;a=a.nextSibling)1==a.nodeType&&b.push(a);return b};x.K.insertBefore=function(a,b){var c;c=x.K.Uj;a=c(a);b=c(b);(c=b.parentNode)&&c.insertBefore(a,b);return a}; x.K.Nd=function(a,b,c){var d=x.K,e,a=d.$(a),b=x.Yk.IO(b);if(e=d.Tl)c=e.filter(b,c,"set");(e=d.RB[b])&&e.set?e.set(a,c):a.style[e||b]=c;return a};x.Nd=x.K.Nd;x.K.Ci=function(a,b){a=x.K.$(a);if(a===p)return a;for(var c in b)x.K.Nd(a,c,b[c]);return a};x.Ci=x.K.Ci;x.K.Tl[x.K.Tl.length]={set:function(a,b){b.constructor==Number&&!/zIndex|fontWeight|opacity|zoom|lineHeight/i.test(a)&&(b+="px");return b}}; x.K.Yt=function(a,b){function c(a,b){return parseFloat(x.xj(a,b))||0}var d={};b.width&&(d.width=parseFloat(b.width));b.height&&(d.height=parseFloat(b.height));if(x.da.GE&&(b.width&&(d.width=parseFloat(b.width)-c(a,"paddingLeft")-c(a,"paddingRight")-c(a,"borderLeftWidth")-c(a,"borderRightWidth"),0>d.width&&(d.width=0)),b.height))d.height=parseFloat(b.height)-c(a,"paddingTop")-c(a,"paddingBottom")-c(a,"borderTopWidth")-c(a,"borderBottomWidth"),0>d.height&&(d.height=0);return x.K.Ci(a,d)}; (function(){var a=x.Qb.fm.HK=t();a.kz=q;a.mq;a.xG;a.yG;a.wP=function(){if(this.mq)this.xP(),x.Nd(this.mq,"display","block");else{var a=this.aW||{},c=this.xG=a.Ua||this.qi(),d=a.opacity||"0",a=a.color||"",e=this.mq=document.createElement("iframe"),f=this.yG=document.createElement("div");0<x.K.children(c).length?x.K.insertBefore(f,c.firstChild):c.appendChild(f);x.Ci(f,{position:"absolute",top:"0px",left:"0px"});x.K.Yt(f,{width:c.offsetWidth,height:c.offsetHeight});x.K.Yt(e,{width:f.offsetWidth});x.K.Ci(e, {zIndex:-1,display:"block",border:0,backgroundColor:a,filter:"progid:DXImageTransform.Microsoft.Alpha(style=0,opacity="+d+")"});f.appendChild(e);e.src="javascript:void(0)";e.frameBorder="0";e.scrolling="no";e.height="97%";this.kz=o}};a.vP=function(){var a=this.mq;this.kz&&(x.Nd(a,"display","none"),this.kz=q)};a.xP=function(){var a;a=a||{};var c=this.xG,d=this.yG,e=this.mq;x.K.Yt(d,{width:c.offsetWidth,height:c.offsetHeight});x.K.Yt(e,x.extend({width:x.xj(d,"width")},a))}})(); x.extend(x.Qb.Ki.prototype,{HK:o,aW:{}});x.Qb.Ki.Xe(function(a){a.HK&&(a.addEventListener("onshow",function(){a.wP()}),a.addEventListener("onhide",function(){a.vP()}))});x.Qb.Ki.extend({setData:function(a,b,c){this.MC[a]=b;c||this.show(a,this.MC[a])}});x.Qb.Ki.Xe(function(a){a.MC={};a.addEventListener("onneeddata",function(b,c){var d=a.MC;"undefined"==typeof d[c]?a.getData(c):a.show(c,d[c])})});x.K.p_=x.K.w4=function(a,b){return x.K.Yt(a,{width:b})}; x.K.fY=function(a){a=x.K.$(a);if(a===p)return a;a=x.K.UD(a);return a.parentWindow||a.defaultView||p};x.K.ta=function(a,b){return x.K.Ci(a,{left:b.left-(parseFloat(x.K.xj(a,"margin-left"))||0),top:b.top-(parseFloat(x.K.xj(a,"margin-top"))||0)})};x.page=x.page||{};x.page.lE=function(){var a=document;return("BackCompat"==a.compatMode?a.body:a.documentElement).clientWidth};x.page.kE=function(){var a=document;return("BackCompat"==a.compatMode?a.body:a.documentElement).clientHeight}; x.page.SX=function(){var a=document;return window.pageYOffset||a.documentElement.scrollTop||a.body.scrollTop};x.page.RX=function(){var a=document;return window.pageXOffset||a.documentElement.scrollLeft||a.body.scrollLeft};x.wm=x.wm||{};x.wm.bind=function(a,b){var c=2<arguments.length?[].slice.call(arguments,2):p;return function(){var d=x.lang.tg(a)?b[a]:a,e=c?c.concat([].slice.call(arguments,0)):arguments;return d.apply(b||d,e)}}; (function(){function a(a){a.x=a[0]||a.x||a.left||0;a.y=a[1]||a.y||a.top||0;return a}var b=x.Qb.fm.yZ=t();b.ta=function(a,b,e){b=x.$(b)||this.qi();e=e||{};this.aQ(b,e.lZ,[b,a,e])};b._positionByCoordinate=function(b,d,e,f){var d=d||[0,0],e=e||{},g={},i=x.page.kE(),k=x.page.lE(),l=x.page.RX(),m=x.page.SX(),n=b.offsetWidth,s=b.offsetHeight,u=b.offsetParent,u=!u||u==document.body?{left:0,top:0}:x.K.ha(u);e.position="undefined"!==typeof e.position?e.position.toLowerCase():"bottomright";d=a(d||[0,0]);e.Aa= a(e.Aa||[0,0]);d.x+=0<=e.position.indexOf("right")?d.width||0:0;d.y+=0<=e.position.indexOf("bottom")?d.height||0:0;g.left=d.x+e.Aa.x-u.left;g.top=d.y+e.Aa.y-u.top;switch(e.x3){case "surround":g.left+=g.left<l?n+(d.width||0):g.left+n>l+k?-n-(d.width||0):0;g.top+=g.top<m?s+(d.height||0):g.top+s>m+i?-s-(d.height||0):0;break;case "fix":g.left=Math.max(0-parseFloat(x.K.xj(b,"marginLeft"))||0,Math.min(g.left,x.page.lE()-n-u.left));g.top=Math.max(0-parseFloat(x.K.xj(b,"marginTop"))||0,Math.min(g.top,x.page.kE()- s-u.top));break;case "verge":var w=-1<e.position.indexOf("right")?d.width:0,y=-1<e.position.indexOf("bottom")?d.height:0,B=-1<e.position.indexOf("bottom")?d.width:0,A=-1<e.position.indexOf("right")?d.height:0;g.left-=0<=e.position.indexOf("right")?d.width||0:0;g.top-=0<=e.position.indexOf("bottom")?d.height||0:0;g.left+=g.left+w+n-l>k-u.left?B-n:w;g.top+=g.top+y+s-m>i-u.top?A-s:y}x.K.ta(b,g);!f&&(i!=x.page.kE()||k!=x.page.lE())&&this._positionByCoordinate(b,d,{},o);f||this.dispatchEvent("onpositionupdate")}; b.aQ=function(a,b,e){("undefined"==typeof b||!b)&&x.event.M(x.K.fY(a),"resize",x.wm.bind.apply(this,["_positionByCoordinate",this].concat([].slice.call(e))));this._positionByCoordinate.apply(this,e)}})(); x.Qb.Ki.extend({yZ:o,WW:o,gY:function(){var a=this;return function(){a.Fw(o)}},Fw:function(a){var b=this.Gm(),c=this.iC,d=this.qi();if(this.VA()||!a)c&&(b=c),a=x.K.ha(b),b={top:a.top+b.offsetHeight-1,left:a.left,width:b.offsetWidth},b="function"==typeof this.view?this.view(b):b,this.ta([b.left,b.top],p,{lZ:o}),x.K.p_(d,b.width)}}); x.Qb.Ki.Xe(function(a){a.w0=a.gY();a.addEventListener("onload",function(){a.Fw();a.WW&&(a.XW=setInterval(function(){var b=a.qi(),c=a.Gm();0!=b.offsetWidth&&(c&&c.offsetWidth!=b.offsetWidth)&&(a.Fw(),b.style.display="block")},100));a.M(window,"resize",a.w0)});a.addEventListener("onshow",function(){a.Fw()});a.addEventListener("ondispose",function(){clearInterval(a.XW)})}); x.Qb.Ki.Xe(function(a){function b(){setTimeout(function(){var b=a.Gm();e=b===p?"":b.value},20)}var c,d="",e,f,g=q,i=q;a.addEventListener("onload",function(){c=this.Gm();b();a.M(window,"onload",b);a.P_=a.YX();a.M(c,"keydown",a.P_);c.setAttribute("autocomplete","off");a.OV=setInterval(function(){if(!i){x.$(c)==p&&a.li();var b=c.value;b==d&&""!=b&&b!=e&&b!=f?0==a.uF&&(a.uF=setTimeout(function(){a.dispatchEvent("onneeddata",b)},100)):(clearTimeout(a.uF),a.uF=0,""==b&&""!=d&&(f="",a.U()),d=b,b!=f&&(a.jx= b),e!=c.value&&(e=""))}},10);a.M(c,"beforedeactivate",a.tV)});a.addEventListener("onitemclick",function(){i=q;a.jx=d=a.hE()});a.addEventListener("onpick",function(a){g&&c.blur();c.value=f=a.data.item.value;g&&c.focus()});a.addEventListener("onmousedownitem",function(){i=g=o;setTimeout(function(){g=i=q},500)});a.addEventListener("ondispose",function(){clearInterval(a.OV)})}); x.Qb.Ki.extend({tV:function(){return function(){mousedownView&&(window.event.cancelBubble=o,window.event.returnValue=q)}},YX:function(){var a=this;return function(b){var c=q,b=b||window.event;switch(b.keyCode){case 9:case 27:a.U();break;case 13:x.event.stop(b);a.confirm(-1==a.Yc?a.Gm().value:a.vk[a.Yc],"keyboard");break;case 38:c=o;case 40:x.event.stop(b);b=c;if(a.VA()){var c=a.vk,d=a.Yc;if(0!=c.length){if(b)switch(d){case -1:d=c.length-1;a.Dj(c[d]);a.nt(c[d]);break;case 0:d=-1;a.Dj(a.jx);a.uC(); break;default:d--,a.Dj(c[d]),a.nt(c[d])}else switch(d){case -1:d=0;a.Dj(c[d]);a.nt(c[d]);break;case c.length-1:d=-1;a.Dj(a.jx);a.uC();break;default:d++,a.Dj(c[d]),a.nt(c[d])}a.Yc=d}}else a.dispatchEvent("onneeddata",a.hE());break;default:a.Yc=-1}}},jx:""});ja.U4=o;var Ei=q,Fi=z.oc+"res/20/bmap_autocomplete.css",Gi={ALL:"0",CITY:"1"}; x.extend(ue.prototype,{Sd:function(){this.Ui()},Ui:function(){this.pl=-1;this.Ga=p;this.mw=[];this.lH=0;this.ka=this.pv();this.nc.input&&(this.GS(),this.dU(),this.Ny(this.lI));var a=p;this.fj&&(a={method:"search"},a.arguments=[this.fj]);this.cI();this.LH(a)},dU:function(){var a=this,b=new x.Qb.Ki({getData:function(b){a.iJ(b)},onhide:function(){a.pl=-1;""===a.mg.hE()&&(a.fj="",a.ka=a.pv())},onhighlight:function(b){if(a.Ga){var d={},e={},e={index:b.data.index,value:a.Ga.Rm[b.data.index].value},d={index:a.pl, value:0<=a.pl?a.Ga.Rm[a.pl].value:{}},f=new M("onhighlight");f.fromitem=f.y2=d;f.toitem=f.N4=e;a.dispatchEvent(f);a.pl=b.data.index}},onbeforepick:function(b){if(a.Ga&&"number"===typeof b.data.index){var d=a.Ga.Rm[b.data.index].value;b.data.item.content=b.data.item.value=d.province+d.city+d.district+d.street+d.business}},onconfirm:function(b){if(a.Ga){Qa(5012);var d={};"number"===typeof b.data.index&&(d={index:b.data.index,value:a.Ga.Rm[b.data.index].value},b=new M("onconfirm"),b.item=b.item=d,a.dispatchEvent(b))}}}); b.va(x.$(this.nc.input),x.$(this.nc.iC));this.mg=b},show:function(){this.mg&&(this.mg.qi().style.display="block")},U:function(){this.mg&&this.mg.U();this.pl=-1},li:function(){this.mg&&this.mg.li();x.lang.Da.prototype.li.call(this)},LF:function(a){this.nc.types=a||[];this.cI()},nn:function(a){this.zd.src=a;this.LH()},search:function(a){this.iJ(a)},Ny:function(a){this.mg&&this.mg.Dj(a)},iJ:function(a){var b=this,c=(1E5*Math.random()).toFixed(0);z._rd["_cbk"+c]=function(a){x.$(b.nc.input)!==p&&b.dS(a); delete z._rd["_cbk"+c]};var d=z.url.proto+z.url.domain.baidumap+"/su?wd="+encodeURIComponent(a)+"&callback=BMap._rd._cbk"+c+"&cid="+b.lH+"&type="+b.mw+"&t="+(new Date).getTime()+"&from=jsapi";b.fj=a;b.pl=-1;b.ka=this.pv();Qa(5010,{tp:b.mw,wd:encodeURIComponent(a)});z.alog("cus.fire","count","z_sug");pa(d)},dS:function(a){a&&a.q&&(this.fj=a.q);this.EU(this.SR(a));this.ka=this.pv(this.Ga);this.nc.vy(this.ka)},SR:function(a){var b=[],c=a.s,d={};d.ub=a.q||"";d.count=a.s.length||0;d.status=0>a.e?7:0;d.Rm= [];var e=0,f=c.length;for(G()&&6<f&&(f=6);e<f;e++){var g=this.oS(c[e],this.mw);d.Rm.push(g.value);b.push(g.hM)}this.Ga=d;return{data:b,e5:a.q}},EU:function(a){if(this.mg){var b=this.mg;b.show(a.word,a.data);1>a.data.length&&b.U()}},oS:function(a,b){switch(b.toString()){case "1":return this.pS(a);default:return this.qS(a)}},qS:function(a){var a=a.split("$"),b=this.fj,c=RegExp(b,"g"),d="<b>"+b+"</b>",e={province:"",city:a[0],district:a[1],street:a[2],streetNumber:"",business:a[3]},f="";7<=a.length&& (e.city=a[5]||e.city,e.district=a[6]||e.city,a[0]=a[5],a[1]=a[6]);for(var g=3;0<=g;g--)if(f=a[g]+f,-1<f.indexOf(b)){for(var b=g-1,i="";-1<b;)i=a[b]+i,b--;f=f.replace(c,d);i&&(f+=\'&nbsp;<span class="tangram-suggestion-grey">\'+i+"</span>");break}if(!i)for(g=3;0<=g;g--)i+=a[g];return{value:{value:e},hM:f}},pS:function(a){var b=a.split("$"),c=this.fj,a={province:b[0],city:b[1],district:"",street:"",streetNumber:"",business:""},b=(b[0]+b[1]).replace(RegExp(c,"g"),"<b>"+c+"</b>");return{value:{value:a}, hM:b}},cI:function(){var a=this.nc.types,b=[];if(x.tg(a))b.push(Gi[a.toUpperCase()]);else if(x.lang.isArray(a))for(var c=0,d=a.length;c<d;c++)b.push(Gi[a[c].toUpperCase()]);this.mw=0<b.length?b.join(","):"0"},LH:function(a){var b=this;b.Ng(b.zd,function(c){b.lH=c;a&&b[a.method].apply(b,a.arguments)})},GS:function(){if(!Ei){var a=document,b=a.createElement("link");b.setAttribute("rel","stylesheet");b.setAttribute("type","text/css");b.setAttribute("href",Fi);var c=a.getElementsByTagName("head");c.length? c[0].appendChild(b):a.documentElement.appendChild(b);Ei=o}},pv:function(a){if(!a)return new Hi({ub:this.fj,total:0,Mk:[]});for(var b=[],c=0,d=a.Rm.length;c<d;c++)b.push(a.Rm[c].value);return new Hi({ub:a.ub,total:a.count,Mk:b})}});U(fg,{show:fg.show,hide:fg.U,setTypes:fg.LF,setLocation:fg.nn,search:fg.search,setInputValue:fg.Ny,dispose:fg.li});function Hi(a){this.keyword=a.ub||"";this.jB=a.total||0;this.Ir=a.Mk&&a.Mk.slice(0)||[]}x.extend(Hi.prototype,{Ck:function(a){if(this.Ir[a])return this.Ir[a]},gt:v("jB"),toString:ea("AutocompleteResult")});var Ii=Hi.prototype;U(Ii,{getPoi:Ii.Ck,getNumPois:Ii.gt}); ');