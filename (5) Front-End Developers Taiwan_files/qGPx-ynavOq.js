/*!CK:3219784875!*//*1426000693,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["q\/e1t"]); }

__d("PageStars",["Event","Locale","Style","copyProperties"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=5;function l(m,n,o,p,q,r,s,t){this.myRating=q;this.avgRating=p;this.avgStars=n;this.myStars=o;this.margin=t;this.width=r;this.height=s;for(var u=0;u<m.length;u++){var v=m[u],w=u+1;for(var x=0;x<v.length;x++){if(!v[x])continue;g.listen(v[x],'mouseenter',this._hover.bind(this,w));g.listen(v[x],'mouseleave',this._mouseout.bind(this,w));g.listen(v[x],'click',this._click.bind(this,w));}}}j(l.prototype,{onClick:function(m){this.callback=m;},_updateUI:function(){if(this.hovered||this.myRating){this.avgStars&&this._setClip(this.avgStars,0);this.myStars&&this._setClip(this.myStars,this.hovered||this.myRating);}else{this.myStars&&this._setClip(this.myStars,0);this.avgStars&&this._setClip(this.avgStars,this.avgRating||0);}},_setClip:function(m,n){var o=Math.round(n*this.width+Math.floor(n)*this.margin),p=0;if(h.isRTL()){p=Math.round((k-n)*this.width+Math.floor(k-n)*this.margin);o+=p;}var q='rect(0px, '+o+'px, '+this.height+'px, '+p+'px)';i.set(m,'clip',q);},_click:function(m){this.myRating=m;this._updateUI();return this.callback&&this.callback(m);},_hover:function(m){this.hovered=m;this._updateUI();},_mouseout:function(m){if(this.hovered===m){this.hovered=null;this._updateUI();}},setAverageRating:function(m){this.avgRating=m;this._updateUI();},setMyRating:function(m){this.myRating=m;this._updateUI();}});e.exports=l;},null);
__d("PlaceStarSurvey",["AsyncRequest","copyProperties"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={};h(i,{register:function(j,k,l){j.onClick(function(m){(new g(l[m])).setMethod('POST').setRelativeTo(k).send();});}});e.exports=i;},null);