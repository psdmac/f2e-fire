/*!CK:3329312358!*//*1428307410,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["LUd0O"]); }

__d("LtgPostTranslation",["Arbiter","AsyncRequest","cx","DOM","Event","fbt","highlight","LoadingIndicator.react","React","XLtgPostTranslationController"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();function q(s,t){var u=j.create('div',{'class':"_49k0"},t||l._("\u6c92\u6709\u7ffb\u8b6f\u8cc7\u6599"));j.replace(s,u);if(t)m(u);}var r={bindListener:function(s,t){k.listen(s,'click',function(){o.render(o.createElement(n,{size:"small",color:"white"}),s);var u=p.getURIBuilder().setString('ftid',t).getURI();new h().setURI(u).setHandler(function(v){var w=v.getPayload();q(s,w&&w.text);g.inform('ufi/translationRendered');}).setErrorHandler(function(){q(s,null);}).send();});}};e.exports=r;},null);