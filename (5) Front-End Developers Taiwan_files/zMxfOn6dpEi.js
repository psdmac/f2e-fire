/*!CK:2645299713!*//*1427086728,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["V6M4J"]); }

__d("VideoChainingToken",["Base64"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i){"use strict";this.$VideoChainingToken0=i;}h.prototype.decode=function(){"use strict";return JSON.parse(g.decode(this.$VideoChainingToken0));};e.exports=h;},null);
__d("VideoDisplayTimePlayButton",["CSS","Event"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={},j={getClicked:function(k){var l=k.id;if(i.hasOwnProperty(l))return i[l].clicked;return false;},register:function(k,l){var m=k.id;i[m]=h.listen(k,'click',function(){g.hide(k);if(l)g.show(l);i[m].clicked=true;});},unregister:function(k){var l=k.id;if(i.hasOwnProperty(l))i[l].remove();}};e.exports=j;},null);
__d("VideoPlayButton",["CSS","cx","EventListener","VideoDisplayTimePlayButton","VideoPlayerReason","logVideosClickTracking"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=100;function n(o,p,q){"use strict";this.$VideoPlayButton0=p;this.$VideoPlayButton1=o;this.$VideoPlayButton2=q.hiddenAfterFinish;this.$VideoPlayButton3=q.hiddenWhilePaused;this.$VideoPlayButton4=j.getClicked(this.$VideoPlayButton0);j.unregister(this.$VideoPlayButton0);o.addListener('beginPlayback',this.$VideoPlayButton5.bind(this));o.addListener('finishPlayback',this.$VideoPlayButton6.bind(this));o.addListener('pausePlayback',this.$VideoPlayButton7.bind(this));o.addListener('buffering',this.$VideoPlayButton8.bind(this));o.addListener('buffered',this.$VideoPlayButton9.bind(this));o.addListener('stateChange',this.$VideoPlayButtona.bind(this));o.addListener('playRequested',this.$VideoPlayButtonb.bind(this));i.listen(this.$VideoPlayButton0,'click',this.$VideoPlayButtonc.bind(this));if(this.$VideoPlayButton4){this.$VideoPlayButtonc();this.$VideoPlayButton4=false;}g.show(this.$VideoPlayButton0);}n.prototype.$VideoPlayButtona=function(){"use strict";if(this.$VideoPlayButton1.isState('fallback'))g.addClass(this.$VideoPlayButton0,"_24ov");};n.prototype.$VideoPlayButton5=function(){"use strict";g.hide(this.$VideoPlayButton0);};n.prototype.$VideoPlayButton7=function(){"use strict";if(this.$VideoPlayButton3)return;g.show(this.$VideoPlayButton0);};n.prototype.$VideoPlayButtonb=function(){"use strict";g.hide(this.$VideoPlayButton0);};n.prototype.$VideoPlayButton6=function(){"use strict";if(this.$VideoPlayButton2)return;if(this.$VideoPlayButton1.getVideosCount()<=1){g.show(this.$VideoPlayButton0);return;}g.removeClass(this.$VideoPlayButton0,"_24ov");g.removeClass(this.$VideoPlayButton0,"_2ig5");setTimeout(function(){g.addClass(this.$VideoPlayButton0,"_5vov");}.bind(this),m);};n.prototype.$VideoPlayButton8=function(){"use strict";g.hide(this.$VideoPlayButton0);};n.prototype.$VideoPlayButton9=function(){"use strict";g.hide(this.$VideoPlayButton0);};n.prototype.$VideoPlayButtonc=function(){"use strict";g.hide(this.$VideoPlayButton0);this.$VideoPlayButton1.play(k.USER);l(this.$VideoPlayButton1.getVideoNode());};e.exports=n;},null);