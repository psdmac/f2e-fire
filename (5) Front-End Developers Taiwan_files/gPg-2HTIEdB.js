/*!CK:2334663751!*//*1425870038,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["p9t8T"]); }

__d("XPubcontentPhotoPivotsChainingController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pubcontent\/inline_photo_pivots_chaining\/",{search_query:{type:"String",required:true},storyid:{type:"String",required:true},photoid:{type:"String",required:true},position:{type:"Int",required:true}});},null);
__d("PubcontentPhotoPivotsChaining",["AsyncRequest","XPubcontentPhotoPivotsChainingController","Event","ge"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k={logPhotoChainingClick:function(l,m,n,o,p){var q=j(l);if(!q)return;var r=i.listen(q,'click',function(){r.remove();var s=(h.getURIBuilder()).setString('search_query',m).setString('storyid',n).setString('photoid',o).setInt('position',p),t=new g().setURI(s.getURI());t.send();return true;});}};e.exports=k;},null);