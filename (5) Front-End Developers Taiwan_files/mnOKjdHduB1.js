/*!CK:4256242399!*//*1428288963,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["SbOlI"]); }

__d("TimelineAppSectionConstants",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={collectionTabKeyToAppTabKey:{friends_recent:"friends",friends_all:"friends",friends_mutual:"friends",photos_of:"photos",photos_all:"photos",photos_albums:"photos",likes_recent:null,info_all:"about",music_my_music:"music",music_favs:"music",music_playlists:"music",books_read:"books",books_favorite:"books",books_want:"books",recent_places:null,fitness_overview:"fitness",friends_featured:null,places_want:null,info_contact:null,fitness_running:"fitness",fitness_cycling:"fitness",friends_followers:"friends",friends_following:"friends",music_radio:"music",info_history:null,recent_games:"games",products_want:null,photos_archive:"photos",notes_my_notes:"notes",notes_drafts:"notes",notes_about_me:"notes",likes_other:"likes",video_movies_watch:"movies",video_tv_shows_watch:"tv",music_saved:"music",video_movies_want:"movies",video_tv_shows_want:"tv",video_movies_favorite:"movies",video_tv_shows_favorite:"tv",friends_high_school:"friends",friends_college:"friends",friends_work:"friends",friends_suggested:"friends",apps_like:"games",upcoming_events:"events",past_events:"events",likes_people:"likes",likes_sports:null,fitness_report:null,groups_member:"groups",music_heavy_rotation:"music",photos_album:"photos",photos_untagged:"photos",music_mutual:"music",likes_restaurants:"likes",likes_clothing:null,info_insights:null,apps_used:"games",games_play:"games",games_apps_saved:"games",video_movies_suggestions:null,video_tv_shows_suggestions:null,books_suggestions:null,saved_books:"saved",saved_movies:"saved",saved_tv_shows:"saved",saved_music:"saved",places_saved:"map",saved_links:"saved",sports_teams:"sports",likes_all:"likes",saved_places:"saved",saved_all:"saved",sports_athletes:"sports",sports_activities:null,saved_events:"saved",saved_archived:"saved",places_recent:"map",places_visited:"map",reviews_written:"reviews",likes_section_movies:"likes",likes_section_tv_shows:"likes",likes_section_books:"likes",likes_section_music:"likes",likes_section_sports_teams:"likes",place_visits_by_place_tag:null,places_cities:"map",place_visits_by_city:null,topic_visit_counts:"map",place_visits_by_topic:null,place_visit_stories:null,places_map:"map",likes_section_apps_and_games:"likes",likes_section_sports_athletes:"likes",places_cities_desktop:"map",saved_videos:"saved",saved_pages:"saved",friends_with_upcoming_birthdays:"friends",friends_current_city:"friends",friends_hometown:"friends",at_work_contact:null,place_reviews_written:"reviews",movie_reviews_written:"reviews",tv_show_reviews_written:"reviews",book_reviews_written:"reviews",photos_all_expanded:"photos",videos_by_user:"videos",videos_user_tagged:"videos",external_videos_for_user:"videos",friends_map:"friends",info_about:null,info_all_relationships:null,info_contact_basic:null,info_edu_work:null,info_overview:null,info_places:null,info_at_work:null,info_year_overviews:null,followers:"friends",following:"friends",media_set:"photos",photos_stream:"photos",photos_synced:"photos",apps:"games",videos_by:"videos",videos_of:"videos"}};},null);
__d("FileInputUploader",["ArbiterMixin","DOM","DTSG","FileForm","Form","copyProperties","mixin","submitForm"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o=m(g);for(var p in o)if(o.hasOwnProperty(p))r[p]=o[p];var q=o===null?null:o.prototype;r.prototype=Object.create(q);r.prototype.constructor=r;r.__superConstructor__=o;function r(s){"use strict";this._inputElem=s;this._data={};}r.prototype.setInput=function(s){"use strict";this._inputElem=s;return this;};r.prototype.setURI=function(s){"use strict";this._uri=s;return this;};r.prototype.setData=function(s){"use strict";this._data=s;return this;};r.prototype.setPreprocessHandler=function(s){"use strict";this._preprocessHandler=s;return this;};r.prototype.setNetworkErrorRetryLimit=function(s){"use strict";this._retryLimit=s;return this;};r.prototype.setFiles=function(s){"use strict";this._files=s;return this;};r.prototype.setAllowCrossOrigin=function(s){"use strict";this._allowCrossOrigin=!!s;return this;};r.prototype.setAllowCrossPageTransition=function(s){"use strict";this._allowCrossPageTransition=!!s;return this;};r.prototype.setUploadInParallel=function(s){"use strict";this._uploadInParallel=!!s;return this;};r.prototype.setConcurrentLimit=function(s){"use strict";this._concurrentLimit=s;return this;};r.prototype.abort=function(){"use strict";if(this._fileForm){this._fileForm.abort();this._destroyFileForm();}};r.prototype.send=function(){"use strict";this._createForm();var s=this._inputElem.cloneNode(false);h.replace(this._inputElem,s);h.appendContent(this._formElem,this._inputElem);h.appendContent(document.body,this._formElem);n(this._formElem);h.replace(s,this._inputElem);this._removeFormEl();};r.prototype._onFileFormEvent=function(s,t){"use strict";if(s==='success'||s==='failure')this._destroyFileForm();this.inform(s,t);};r.prototype._createForm=function(){"use strict";this._destroyFileForm();this._formElem=h.create('form',{action:this._uri,method:'post'});this._fileForm=new j(this._formElem,null,{allowCrossOrigin:this._allowCrossOrigin,allowCrossPageTransition:this._allowCrossPageTransition,uploadInParallel:this._uploadInParallel,concurrentLimit:this._concurrentLimit,preprocessHandler:this._preprocessHandler,networkErrorRetryLimit:this._retryLimit});if(this._files)this._fileForm.setFiles(this._files);this._fileForm.subscribe(j.EVENTS,this._onFileFormEvent.bind(this));k.createHiddenInputs(l({fb_dtsg:i.getToken()},this._data),this._formElem);};r.prototype._removeFormEl=function(){"use strict";h.remove(this._formElem);this._formElem=null;};r.prototype._destroyFileForm=function(){"use strict";if(this._fileForm){this._fileForm.destroy();this._fileForm=null;}};e.exports=r;},null);
__d("Optimus",["Event","Parent"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();'use strict';var i={};function j(l,m){var n=m.getTarget();if(!n)return;var o=i[l];for(var p in o){var q=h.byAttribute(n,p);if(q)do{var r=o[p][q.getAttribute(p)];if(r&&r.handleOptimus(l,q,m)===false)break;}while(q=h.byAttribute(q.parentNode,p));}}function k(l,m,n,o){if(!i[l]){i[l]={};g.listen(document.documentElement,l,j.bind(null,l));}if(!i[l][m])i[l][m]={};if(!i[l][m][n])i[l][m][n]=o;}e.exports={addRelClick:function(l,m){k('click','rel',l,m);},addEventListener:k};},null);
__d("PopoverMenuShowOnHover",["Event"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=250;function i(j){"use strict";this._popoverMenu=j;this._listeners=[];}i.prototype.enable=function(){"use strict";this._attachMouseListeners(this._popoverMenu.getTriggerElem());this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',this._onSetMenu.bind(this));};i.prototype.disable=function(){"use strict";while(this._listeners.length)this._listeners.pop().remove();if(this._setMenuSubscription){this._setMenuSubscription.unsubscribe();this._setMenuSubscription=null;}};i.prototype._onSetMenu=function(){"use strict";this._attachMouseListeners(this._popoverMenu.getPopover().getLayer().getRoot());};i.prototype._attachMouseListeners=function(j){"use strict";var k=this._popoverMenu.getPopover(),l=null;this._listeners.push(g.listen(j,'mouseleave',k.hideLayer.bind(k)),g.listen(j,'mouseenter',function(){l=Date.now();k.showLayer();}),g.listen(j,'click',function(m){if(Date.now()<l+h)m.stop();}));};e.exports=i;},null);
__d("ProfileActionBarLogger",["FBJSON","MarauderLogger","Optimus"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(){i.addEventListener('mouseup','data-loggable','ProfileHighQualityLogger',{handleOptimus:function(k,l,m){h.log('profile_high_quality_action',null,g.parse(l.getAttribute('data-store')));return false;}});}f.init=j;},null);
__d("TimelineDrag",["ArbiterMixin","Event","Locale","Style","Vector","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=l(g);for(var n in m)if(m.hasOwnProperty(n))p[n]=m[n];var o=m===null?null:m.prototype;p.prototype=Object.create(o);p.prototype.constructor=p;p.__superConstructor__=m;function p(q,r,s){"use strict";s=s||{};this._listenOn=s.listenOn;this._offsetInput=r;this._defaultOffset=s.default_offset;this._killClicks=s.killClicks;this._vertical=true;this._RTLXSwitch=false;this.setPicture(q,s);}p.prototype.setPicture=function(q,r){"use strict";if(!q)return false;r=r||{};this._picture=q;this._defaultOffset=r.default_offset;if(r.offsetInput)this._offsetInput=r.offsetInput;if(r.vertical!==(void 0))this._vertical=r.vertical;if(r.height)this._containerHeight=r.height;if(r.width)this._containerWidth=r.width;if(this._vertical){this._offsetType='top';this._eventCoord='y';}else{this._RTLXSwitch=i.isRTL();this._offsetType='left';this._eventCoord='x';}if(this._picture.complete){this._initialLoad();}else this._loadListener=h.listen(this._picture,'load',function(){this._loadListener.remove();this._loadListener=null;this._initialLoad();}.bind(this));};p.prototype.destroy=function(){"use strict";this._stopDrag();this._saveOffset();this._mousedown&&this._mousedown.remove();this._mousedown=null;this._onclick&&this._onclick.remove();this._onclick=null;this._loadListener&&this._loadListener.remove();this._loadListener=null;};p.prototype._initialLoad=function(){"use strict";var q=this._listenOn?this._listenOn:this._picture;this._mousedown&&this._mousedown.remove();this._mousedown=h.listen(q,'mousedown',this._onMouseDown.bind(this));if(this._vertical){this._maxOffset=this._containerHeight-this._picture.offsetHeight;}else this._maxOffset=this._containerWidth-this._picture.offsetWidth;if(this._defaultOffset!==(void 0))this._setOffset(this._defaultOffset);this._onclick&&this._onclick.remove();this._onclick=null;if(this._killClicks)this._onclick=h.listen(q,'click',this._onClick.bind(this));this._saveOffset();};p.prototype._onClick=function(event){"use strict";event.kill();};p.prototype._onMouseDown=function(event){"use strict";var q=parseInt(j.get(this._picture,this._offsetType),10)||0;this._pictureStartDragOffset=q-k.getEventPosition(event)[this._eventCoord];this._startDrag();event.kill();};p.prototype._startDrag=function(){"use strict";if(!this._dragStarted){this.inform('startdrag',this);this._dragTokens=[h.listen(document.documentElement,'mouseup',this._onMouseUp.bind(this)),h.listen(document.documentElement,'mousemove',this._onMouseMove.bind(this))];this._dragStarted=true;}};p.prototype._saveOffset=function(){"use strict";var q=parseInt(j.get(this._picture,this._offsetType),10);if(this._RTLXSwitch){this._offsetInput.value=q+this._containerWidth-this._picture.offsetWidth;}else this._offsetInput.value=q;};p.prototype._stopDrag=function(){"use strict";if(this._dragStarted){this.inform('stopdrag',this);this._dragStarted=false;this._dragTokens.forEach(function(q){q.remove();});this._saveOffset();}};p.prototype._onMouseUp=function(event){"use strict";this._stopDrag();event.kill();};p.prototype._setOffset=function(q){"use strict";if(this._RTLXSwitch){q=Math.max(0,Math.min(q,-this._maxOffset));}else q=Math.min(0,Math.max(q,this._maxOffset));j.set(this._picture,this._offsetType,q+'px');};p.prototype._onMouseMove=function(event){"use strict";this._setOffset(this._pictureStartDragOffset+k.getEventPosition(event)[this._eventCoord]);event.kill();};e.exports=p;},null);
__d("TimelineCover",["Arbiter","Button","CSS","DOM","DOMScroll","Event","FileInputUploader","HTML","PageTransitions","Parent","Run","Style","TimelineDrag","$","cx","fbt","ge","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){b.__markCompiled&&b.__markCompiled();function y(z,aa,ba){"use strict";this.root=t('fbProfileCover');if(typeof aa==='object'){this._coverHeight=aa.cover_height;this._coverWidth=aa.cover_width;this.previewing=aa.previewing;this._isLegacy=false;}else{this._isLegacy=true;this._coverHeight=aa;this.previewing=ba;}this._parentSection=p.byClass(this.root,'fbTimelineSection');this.cover=j.find(this.root,'.cover');y.instance=this;this.editing=false;q.onBeforeUnload(this.onBeforeUnload.bind(this));if(!this._parentSection)this._parentSection=p.byClass(this.root,'fbEventHeader');if(this.previewing){this.editMode();this.updateCoverImage(this.previewing);}}y.prototype.showLoadingIndicator=function(){"use strict";var z=w('fbCoverImageContainer');if(z)i.addClass(z,'opaquedLoading');};y.prototype.hideLoadingIndicator=function(){"use strict";var z=w('fbCoverImageContainer');if(z)i.removeClass(z,'opaquedLoading');};y.prototype.onBeforeUnload=function(){"use strict";if(this.isInEditMode())return v._("If you leave this page, your cover photo will not be saved. To save, press the \"save\" button below your cover photo.");};y.prototype.isCoverImageVerticalFlow=function(z){"use strict";return !(z.style.height);};y.prototype.editMode=function(){"use strict";h.setEnabled(j.find(this.root,'button.cancelButton'),true);h.setEnabled(j.find(this.root,'button.saveButton'),true);this.hideLoadingIndicator();this._coverImage=j.scry(this.root,'.coverImage')[0];var z=j.scry(this._coverImage,'.coverWrap')[0];if(z){var aa=j.find(z,'.coverPhotoImg');this._originalIsVertical=this.isCoverImageVerticalFlow(aa);this._originalOffset=r.get(aa,this._originalIsVertical?'top':'left');}i.addClass(this._parentSection,'fbEditCover');k.scrollTo(this.root);if(this.previewing){j.remove(this._coverImage);i.show(this._coverImage);}var ba=j.scry(this._coverImage,'.coverPhotoImg')[0];if(ba)this._createDragger();this.editing=true;g.inform('CoverPhotoEdit',{sender:this,state:"open"});};y.prototype._exitEditMode=function(){"use strict";if(this._timelineDrag){this._timelineDrag.destroy();this._timelineDrag=null;}j.find(this.root,'input.hiddenPhotoID').value=null;h.setEnabled(j.find(this.root,'button.cancelButton'),false);h.setEnabled(j.find(this.root,'button.saveButton'),false);i.removeClass(this._parentSection,'fbEditCover');this.hideLoadingIndicator();this.previewing=false;g.inform('CoverPhotoEdit',{sender:this,state:"closed"});this.editing=false;};y.prototype._createDragger=function(z){"use strict";var aa;if(this._isLegacy){aa=j.find(this.root,'input.photoOffsetInput');this._originalIsVertical=true;}else{var ba=z===(void 0)?this._originalIsVertical:z;aa=ba?j.find(this.root,'input.photoOffsetYInput'):j.find(this.root,'input.photoOffsetXInput');}this._timelineDrag=new s(j.find(this.root,'.coverImage .coverPhotoImg'),aa,{height:this._coverHeight,width:this._coverWidth,listenOn:this.cover,vertical:ba,killClicks:true});};y.prototype.updateCoverImage=function(z,aa){"use strict";if(aa)this.editMode();j.find(this.root,'input.hiddenPhotoID').value=z;h.setEnabled(j.find(this.root,'button.saveButton'),true);if(aa)j.replace(j.find(this.root,'.coverImage'),typeof aa==='string'?n(aa):aa);var ba=j.find(j.find(this.root,'.coverImage'),'.coverPhotoImg'),ca=this.isCoverImageVerticalFlow(ba),da;if(this._isLegacy){da=j.find(this.root,'input.photoOffsetInput');}else da=ca?j.find(this.root,'input.photoOffsetYInput'):j.find(this.root,'input.photoOffsetXInput');if(this._timelineDrag){this._timelineDrag.setPicture(ba,{offsetInput:da,vertical:ca});}else this._createDragger(ca);this._updateHeader();};y.prototype.cancelUpdate=function(){"use strict";this._reloadAfterNextUpdate=false;j.remove(j.scry(this.root,'.coverImage')[0]);j.prependContent(this.cover,this._coverImage);if(this._originalOffset!==(void 0))r.set(j.find(this._coverImage,'.coverPhotoImg'),this._originalIsVertical?'top':'left',this._originalOffset);this._exitEditMode();this._updateHeader();};y.prototype.saveComplete=function(){"use strict";if(this._reloadAfterNextUpdate)a.location.reload();this._coverImage=j.scry(this.root,'.coverImage')[0];var z=p.byClass(this.root,'fbTimelineTopSectionBase');z&&i.removeClass(z,"_6_5");this._exitEditMode();this._updateHeader();o.rewriteCurrentURI(o.getCurrentURI().getUnqualifiedURI(),o.getCurrentURI().removeQueryData('preview_cover'));};y.prototype.isInEditMode=function(){"use strict";return this.editing;};y.prototype._updateHeader=function(){"use strict";var z=j.scry(this.root,'.coverImage')[0];if(!z)return;var aa=i.hasClass(z,'coverNoImage'),ba=i.hasClass(this._parentSection,'noCoverImage');if(aa!==ba)i.conditionClass(this._parentSection,'noCoverImage',aa);};y.getInstance=function(){"use strict";return y.instance;};y.staticUpdateCoverImage=function(z){"use strict";y.getInstance().updateCoverImage(null,z);};y.prototype.setupFileUpload=function(z,aa,ba){"use strict";z.subscribe('change',function(){var ca=new m(z.getInput()).setURI(aa).setAllowCrossOrigin(true);ca.subscribe('failure',function(){y.showErrorDialog(v._("Cover Upload Failed"),v._("Uploading the new cover picture failed. Please try again."));});ca.subscribe(['success','failure'],function(){this.hideLoadingIndicator();z.clear();i.removeClass(z.getControl(),ba);z.getInput().disabled=false;}.bind(this));this.showLoadingIndicator();this._reloadAfterNextUpdate=true;ca.send();i.addClass(z.getControl(),ba);z.getInput().disabled=true;}.bind(this));};y.setupFileUpload=function(z,aa,ba){"use strict";this.getInstance().setupFileUpload(z,aa,ba);};y.imageUploadDone=function(z,aa){"use strict";this.getInstance().updateCoverImage(z,aa);};y.showErrorDialog=function(z,aa){"use strict";new Dialog().setTitle(z).setButtons(Dialog.OK).setBody(aa).show();this.getInstance().hideLoadingIndicator();};y.initFileUploadMenu=function(z){"use strict";y.showLoadingAfterFileUpload(z.getForm());};y.showLoadingAfterFileUpload=function(z){"use strict";x(z.subscribe('submit',function(){y.getInstance().showLoadingIndicator();}));};y.instance=null;e.exports=y;},null);
__d("TimelineNavLight",["CSS","DOM","DOMQuery","Parent","ProfileOverviewDOMID","TimelineAppSectionConstants","TimelineComponentKeys","TimelineController","TimelineSection","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r="_6-7",s="_529n",t="_5215",u="_70k",v="._6-7",w="._6-6";function x(y){"use strict";this.$TimelineNavLight0=i.scry(y,v)[0];this.$TimelineNavLight1=i.scry(y,w);var z=j.byClass(y,u).offsetWidth,aa=this.$TimelineNavLight1[this.$TimelineNavLight1.length-1];if(aa.offsetLeft+aa.offsetWidth>z)g.addClass(y,t);for(var ba=this.$TimelineNavLight1.length-1;ba>1;ba--)if(this.$TimelineNavLight1[ba].offsetLeft+this.$TimelineNavLight1[ba].offsetWidth>z){h.remove(this.$TimelineNavLight1[ba]);}else break;g.removeClass(j.byClass(y,s),s);o.subscribe('Medley/transitionToSection',function(ca,da){this.$TimelineNavLight3(da.slice(k.PREFIX_MEDLEY.length));}.bind(this));n.register(m.COVER_NAV,this);}x.prototype.handleTabChange=function(y){"use strict";this.$TimelineNavLight3(y);};x.prototype.$TimelineNavLight3=function(y){"use strict";this.$TimelineNavLight0&&g.removeClass(this.$TimelineNavLight0,r);this.$TimelineNavLight1.some(function(z){var aa=l.collectionTabKeyToAppTabKey[y]||y;if(z.getAttribute('data-tab-key')===aa){g.addClass(z,r);this.$TimelineNavLight0=z;return true;}}.bind(this));};e.exports=x;},null);
__d("legacy:TimelineCover",["TimelineCover"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.TimelineCover=b('TimelineCover');},3);
__d("XBirthdayMessagePostController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/reminders\/birthday\/message\/",{});},null);