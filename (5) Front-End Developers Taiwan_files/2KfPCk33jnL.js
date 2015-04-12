/*!CK:3750194610!*//*1428289445,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["RQ1Bk"]); }

__d("GroupsMemberCountUpdater",["Arbiter","DOM"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(){}i.subscribeMemberCount=function(j){g.subscribe('GroupsMemberCount/changeText',function(k,l){h.setContent(j,l);});};i.subscribeNewMemberCount=function(j){g.subscribe('GroupsMemberCount/changeNewMembersText',function(k,l){h.setContent(j,l);});};e.exports=i;},null);
__d("NotificationsSelector",["Parent","submitForm","AsyncRequest","Event"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(m,n,o){n.subscribe('change',function(p,q){o.value=q.value;var r=g.byTag(m,'form');r&&h(r);});}function l(m,n,o,p,q,r){n.subscribe('change',function(s,t){new i().setURI('/ajax/groups/notifications/update.php').setData({setting:t.value,group_id:p}).setMethod('POST').send();});if(q)q.subscribe('hide',function(){if(r)new i().setURI(r).setData({group_id:p}).setMethod('POST').send();});j.listen(m,'click',function(){if(q&&q.isShown())q.hide();});}e.exports.bindForm=k;e.exports.updateNotif=l;},null);
__d("XGroupsRHCSuggestionXoutController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/groups\/xout_suggested_group\/",{id:{type:"Int",required:true}});},null);
__d("GroupSuggestionXoutHandler",["AsyncRequest","CSS","csx","DOM","Event","XGroupsRHCSuggestionXoutController"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m={onclick:function(n,o,p){k.listen(n,'click',function(){var q=l.getURIBuilder().setInt('id',o).getURI();new g().setURI(q).send();var r=j.find(document,'#'+p);j.remove(r);var s=j.scry(document,"div._1spx");if(s.length===0){var t=j.find(document,'#GroupsRHCSuggestionSection');if(t!==null)j.remove(t);}});},hide:function(n,o){k.listen(o,'mouseover',function(){h.show(n);});k.listen(o,'mouseleave',function(){h.hide(n);});}};e.exports=m;},null);
__d("GroupsAddTypeaheadView",["Arbiter","ContextualTypeaheadView"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(){"use strict";if(h!==null)h.apply(this,arguments);}k.prototype.select=function(l){"use strict";var m=this.results[this.index];g.inform('GroupsMemberSuggestion/remove',m.uid);if(m.is_member){this.reset();}else j.select.call(this,l);};e.exports=k;},null);
__d("GroupsAddMemberTypeahead",["Arbiter","DOM","Typeahead","copyProperties","ge"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(m,n){if(m&&n)this.init(m,n);}j(l.prototype,{init:function(m,n){m.subscribe('select',function(o,p){g.inform('GroupsAddMemberTypeahead/add',{gid:n,uid:p.selected.uid,name:p.selected.text,photo:p.selected.photo});var q=m.getData().getExclusions();q.push(p.selected.uid);m.getData().setExclusions(q);});g.subscribe('GroupsAddMemberTypeahead/updateGroupToken',this.resetTypeaheadCaches.bind(this));},resetTypeaheadCaches:function(m,n){var o=h.scry(k('pagelet_group_'),'.uiTypeahead:not(.uiPlacesTypeahead)');for(var p=0;p<o.length;p++){var q=i.getInstance(o[p]);if(q){var r=q.getData();r.updateToken(n.token);q.getCore().subscribe('focus',r.bootstrap.bind(r));}}}});e.exports=l;},null);
__d("legacy:GroupsAddMemberTypeahead",["GroupsAddMemberTypeahead"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.GroupsAddMemberTypeahead=b('GroupsAddMemberTypeahead');},3);
__d("LitestandRHCAds",["AdsRefreshHandler","Arbiter","DOM","Event","NavigationMessage","Run","SubscriptionsHandler","csx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p,q,r,s,t;function u(){q&&q.forceLoadIfEnoughTimePassed(0);}function v(){var aa=i.scry(r,"._5f85 a")[0];if(aa)p.addSubscriptions(j.listen(aa,'click',u));}function w(){var aa=o(s);if(aa&&t){aa.appendChild(t);t=null;}}function x(){if(q){q.cleanup();q=null;}if(p){p.release();p=null;}t=null;}function y(aa,ba){t=ba;u();}var z={init:function(aa,ba,ca){r=o(aa);s=aa;q=new g(r,ba,ca).subscribeDefaultEventsForRefresh();p=new m();p.addSubscriptions(h.subscribe(k.NAVIGATION_BEGIN,x),h.subscribe('AdsRefreshHandler/AdsLoaded',v),h.subscribe('AdsRefreshHandler/AdsLoaded',w),h.subscribe('ProfileQuestionAnswered',y));v();l.onLeave(x);}};e.exports=z;},null);
__d("PopoverMenuDynamicIcon",["Button","CSS","DOM","DOMQuery","copyProperties","csx"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();function m(n){"use strict";this._popoverMenu=n;}m.prototype.enable=function(){"use strict";this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',this._onSetMenu.bind(this));};m.prototype.disable=function(){"use strict";this._popoverMenu.unsubscribe(this._setMenuSubscription);this._setMenuSubscription=null;this._removeChangeSubscription();};m.prototype._onSetMenu=function(){"use strict";this._removeChangeSubscription();this._menu=this._popoverMenu.getMenu();this._changeSubscription=this._menu.subscribe('change',function(n,o){var p=o.item;if(o[0])p=o[0].item;if(!p)return;var q=p.getIcon();q=q?q.cloneNode(true):null;var r=this._popoverMenu.getTriggerElem(),s=j.scry(r,"span._55pe")[0];if(s){var t=s.firstChild;if(h.hasClass(t,'img')){i.replace(t,q);}else i.prependContent(s,q);}else g.setIcon(r,q);}.bind(this));};m.prototype._removeChangeSubscription=function(){"use strict";if(this._changeSubscription){this._menu.unsubscribe(this._changeSubscription);this._changeSubscription=null;}};k(m.prototype,{_setMenuSubscription:null,_changeSubscription:null});e.exports=m;},null);
__d("TypeaheadSubmitOnSelect",["Form","copyProperties"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(j){"use strict";this._typeahead=j;}i.prototype.enable=function(){"use strict";this._subscription=this._typeahead.subscribe('select',function(){var j=this._typeahead.getCore().getElement().form;if(j)j.getAttribute('rel')=='async'?g.bootstrap(j):j.submit();}.bind(this));};i.prototype.disable=function(){"use strict";this._typeahead.unsubscribe(this._subscription);this._subscription=null;};h(i.prototype,{_subscription:null});e.exports=i;},null);
__d("legacy:SubmitOnSelectTypeaheadBehavior",["TypeaheadSubmitOnSelect"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.submitOnSelect=function(h){h.enableBehavior(g);};},3);