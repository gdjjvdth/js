const jo={};!function JetThemeScript(){var J=window,aE=document,a=setTimeout,bU=clearTimeout,bW=Date,bM=Math,j=parseInt,bA=encodeURIComponent,Y=RegExp,bJ=XMLHttpRequest,bj=localStorage,ao=JSON,aO=Image,au="forEach",aY="innerHTML",by="tagName",q="getElementById",bb="querySelector",ci="querySelectorAll",b4="childNodes",bv="createElement",v="className",B="replace",bI="indexOf",f="lastIndexOf",aP="EventListener",bX="add",aB="remove",b5="id",a9="key",aa="parse",ck="length",bp="slice",y="reset",aj="push",V="Date",aT="Month",aQ="FullYear",X="onreadystatechange",b2="readyState",aN="Attribute",a3="set",bh="get",an="post",D="checked",ak="focus",bO="height",bY="offsetWidth",b7="offsetHeight",ap="toFixed",av="pageYOffset",cl="appendChild",bg="firstChild",b6="insert",bz="Before",ar="value",ay="match",S="href",a2="src",Q="onload",af="onerror",I="target",bG="closest",aZ="location",aU="split",aS="trim",bK="open",a0="send",a4="random",cs="status",a6="toString",aJ="parentElement",bV="preventDefault",aV="substr",cd="setRequestHeader",at="responseText",b8="response",aH="title",ad="test",aI="ceil",ae="floor",ba="round",ab="min",cg="map",R="contains",bC="textContent",aG="Item",br="nextSibling",cq="load",r="false",bH="scroll",E="click",aK="submit",bx="mousemove",T="touchstart",aM="change",cr="undefined",a7="function",bc="Content-Type",M="text/html",bT="application/x-www-form-urlencoded",c="pagination",ce="loadCustomPosts",e="custom_posts",L="config",cp="adsbygoogle",bn="analytics",cn=typeof isPreview!==cr?isPreview:false,aw=typeof siteUrl!==cr?siteUrl:"",aC=typeof currentUrl!==cr?currentUrl:"",k=typeof blogId!==cr?blogId:"",b9=typeof blogTitle!==cr?blogTitle:"",a8=typeof titleSeparator!==cr?titleSeparator:" - ",bR=typeof pageTitle!==cr?pageTitle:"Page",p=typeof analyticId!==cr?analyticId:false,m=typeof caPubAdsense!==cr?caPubAdsense[B](/^\D+/g,""):false,aF=m?"ca-pub-"+m:false,bw=typeof innerAdsDelimiter!==cr?innerAdsDelimiter:"p,br,div",bu=typeof ignoreAdsDelimiter!==cr?ignoreAdsDelimiter:"pre,ul,ol,table,blockquote",a5=typeof autoTOC!==cr?autoTOC:false,ag=typeof toc_temp===a7?toc_temp:false,g=typeof positionTOC!==cr?positionTOC:false,aW=typeof jtCallback===a7?jtCallback:false,b0="https://",U="www.blogger.com/",am="-rw";function H(i,h){return -1<(" "+i[v]+" ")[bI](" "+h+" ")}function G(n,i){var h;H(n,i)||(""!=(h=n[v])&&(i=" "+i),n[v]=h+i)}function bf(i,h){i[v]=i[v][B](new Y("(?:^|\\s)"+h+"(?!\\S)"),"")[aS]()}function bd(i,h){(H(i,h)?bf:G)(i,h)}function aA(i,h){G(i,"d-block"),a(function(){G(i,h)},100)}function bS(n,i,h){bf(n,i),a(function(){bf(n,"d-block")},h||300)}function w(n,i){for(var h=0;h<n[ck];h++){if(n[h]===i){return !0}}return !1}function ax(){return(bM[a4]()+1)[a6](36)[aV](7)}function ca(i,h){return !!(i=new Y("[?&]"+i+"=([^&#=]*)"))[ad](h)&&h[ay](i)[1]}function O(cu,cy,cw,cx){cu=j(cu),cy=j(cy),cw=j(cw),cx=j(cx);var ct,h,i=bM[aI](cu/cw);cy<1?cy=1:i<cy&&(cy=i),h=i<=cx?(ct=1,i):(cu=bM[ae](cx/2),cw=bM[aI](cx/2)-1,cy<=cu?(ct=1,cx):i<=cy+cw?(ct=i-cx+1,i):(ct=cy-cu,cy+cw));for(var x=(cy-1)*cw,cx=bM[ab](x+cw-1,cu-1),cz=[],cv=0;cv<h+1-ct;cv++){cz[aj](cv)}return cz=cz[cg](function(n){return ct+n}),{totalItems:cu,currentPage:cy,pageSize:cw,totalPages:i,startPage:ct,endPage:h,startIndex:x,endIndex:cx,pages:cz}}function cf(x){for(var o=x.slice(),i=o[ck]-1;0<i;i--){var n=bM[ae](bM[a4]()*(i+1)),h=o[i];o[i]=o[n],o[n]=h}return o}function ai(h){try{return ao[aa](h)}catch(h){return !1}}!function(i){var h=new aO;h[Q]=h[af]=function(){i(2==h[bO])},h[a2]="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}(function(h){h||(am="")});var ch=aE[q]("header"),bF=aE[q]("search-toggle"),P=aE[q]("search-header"),d=aE[q]("navbar-toggle"),aR=aE[q]("navbar"),al=aE[q]("back-to-top"),cm=aE[q]("dark-toggler"),aL=aE[bb]("html"),bE=aE[q]("comment-button"),W=aE[q]("threaded-comment-form"),cc=aE[q]("comment-editor"),cb=aE[q]("comment-editor-src"),K=aE[q]("comment-script"),be=aE[ci](".comment-reply"),F=aE[ci](".entry-text noscript"),bL=aE[ci](".contact-form-blogger"),aq=aE[q]("ads-post"),b3=aE[q]("post-body"),az=aE[bb](".related-posts"),aD=aE[bb](".related-inline"),Z=ca("page",aC);!function(h){J[bX+aP](bH,function(){var n,i=this[av];i<h&&H(ch,"header-hidden")?n=a(function(){bf(ch,"header-hidden")},500):h<i&&H(ch,"header-animate")&&(bU(n),G(ch,"header-hidden")),h=i},!1)}(0);var C=function(cu){var cx,cv,cw,ct,h,i,x,cy;"IMG"==cu[by]&&((cy=cu[bh+aN]("data-src"))[ay](/(bp.blogspot|googleusercontent)/)?(cx=cu[bY][ap](0),cv=cu[aJ][bY][ap](0),cw=cu[aJ][aJ][bY][ap](0),ct=cu[b7][ap](0),h=cy[aU]("/"),i=cy[f]("=")+1,x="",x=H(cu[aJ],"ratio")?"w"+cx+am+"-h"+ct+"-c":"s"+(x=cx<10?cv<10?cw:cv:cx)+am,cy=cy[ay](/(blogger.googleusercontent|proxy)/)?i?cy[bp](0,i)+x:cy+"="+x:cy[B](h[h[ck]-2],x),cu[a3+aN]("data-src",cy)):cy[ay](/(img.youtube|i.ytimg)/)&&(cy=cy[aV](0,cy[f]("/"))+"/mqdefault.jpg",cu[a3+aN]("data-src",cy)))};if(0<F[ck]){for(var bs=0;bs<F[ck];++bs){var bQ=F[bs],bZ=bQ[aY],bD='src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"',b1=aE[bv]("textarea");b1[aY]=bZ[B](/src="(.*?)"/g,bD);var aX=aE[bv]("div");aX[aY]=b1.value,0==bs&&G(aX,"feature-image full-width"),bQ[aJ][b6+bz](aX,bQ)}Defer.dom('[lazyload="true"]',1,"loaded",C,null,{rootMargin:"200%"})}if(null!==b3){if(null!==az&&null!==aD&&(aD[aY]=az[aY],aD[a3+aN]("data-no-item",az[bh+aN]("data-no-item"))),null!==aq){for(var bN=b3[ci](bw+","+bu),bB=aq[b4],ah=bB[ck],z=[],bs=0;bs<bN[ck];bs++){var cj=bN[bs][bG](bu);cj&&bN[bs]!=cj||z[aj](bN[bs])}for(var bk,bi,bs=0;bs<ah;bs++){bs==ah-1?b3[cl](bB[0]):(bk=bs==ah-1?z[ck]-1:bM[ba](z[ck]/ah)*bs,(bi=0==bs?z[0]:z[bk][br])&&bi[aJ][b6+bz](bB[0],bi))}}if(a5&&a5!=r&&ag&&null!==b3[bg]){for(var A=b3[ci]("h2,h3,h4,h5,h6"),bm=aE[bv]("div"),l=b3[bb](g),bo=[],bs=0;bs<A[ck];bs++){var bt=A[bs],bl=bt[bC][B](/[^\w!?]/g,"_")[B](/__/g,"_"),bq=j(bt[by][B]("H",""));bt[b5]=bl,bo[aj]({level:bq,title:bt[bC],id:bl})}null===l&&(l=b3[bg]),0<bo[ck]&&(bm[aY]=ag(bo)[aS](),l&&l[aJ][b6+bz](bm,l))}}var co=function(x){var ct,h,cA,cx,cw,cz,cv,cy;function cu(cC,cB,n){var o=aE[bv]("li"),i=aE[bv]("span");return G(i,"btn btn-sm rounded-pill jt-icon-center"),i[aY]=n||cC,i[a3+aN]("data-page",cC),cC==cB?G(i,"jt-btn-primary"):(G(i,"jt-btn-light hover-btn-primary"),i[bX+aP](E,function(cE){var cD;cE[bV](),1==(cy=i[bh+aN]("data-page"))?(cD=h?aw+"search"+cx+"?max-results="+ct+"&page="+cy:aw,J[aZ][S]=cD):(cD=(cy-1)*ct,Defer.js(aw+"feeds/posts/summary/"+cA+"?start-index="+cD+"&alt=json&callback=jo."+c+"_date&max-results=1"))})),o[cl](i),o}x[bh+aN]("data-pagination")!=r?(ct=x[bh+aN]("data-posts"),h=x[bh+aN]("data-label"),cA=(h=bA(h))?"-/"+h+"/":"",cx=h?"/label/"+h:"",Defer.js(aw+"feeds/posts/summary/"+cA+"?alt=json&callback=jo."+c+"_"+a9+"&max-results=1"),cw=ca("max-results",aC),cz=ca("page",aC),cv=cw||ct,cy=cz||1,jo[c+"_"+a9]=function(cD){var cB=cD.feed,n=j(cB.openSearch$totalResults.$t);if(ct<n){var cD=O(n,cy,cv,5),o=aE[bv]("ul"),cB=cD.totalPages;1!=cD.currentPage&&(n=cu(cD.currentPage-1,"",'<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>'),o[cl](n)),w(cD.pages,1)||(cC=cu(1,cD.currentPage,"1 . ."),o[cl](cC));for(var i=0;i<cD.pages[ck];i++){var cC=cu(cD.pages[i],cD.currentPage);o[cl](cC)}w(cD.pages,cB)||(cC=cu(cB,cD.currentPage,". . "+cB),o[cl](cC)),cD.currentPage!=cB&&(cB=cu(cD.currentPage+1,"",'<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>'),o[cl](cB)),x[aY]="",G(o,"pagination mb-0"),x[cl](o),bf(x,"visually-hidden")}},jo[c+"_date"]=function(i){i=i.feed.entry[0],i=(i=i.published.$t[aV](0,19)+i.published.$t[aV](23,29))[B]("+","%2B"),i=aw+"search"+cx+"?updated-max="+i+"&max-results="+cv+"&page="+cy;J[aZ][S]=i}):bf(x,"visually-hidden")};function bP(n,i){var h=new bJ;h[bK](bh,n),h[cd](bc,M),h[a0](null),h[bX+aP](cq,function(){var o=h[at][ay](/<title>(.*?)<\/title>/);i[aY]=o[1][B](a8+b9,"")})}jo[ce]=function(cv){var n=ax(),cu=cv[bh+aN]("data-label"),x=cv[bh+aN]("data-title"),o=cv[bh+aN]("data-items"),cz=cv[bh+aN]("data-shuffle"),i=cv[bh+aN]("data-no-item"),ct=cv[bh+aN]("data-func"),cy=cv[bh+aN]("data-callback"),cA=i?j(o)+1:o,cw=cu||cv[aY],cx=cw[aU](","),cu="",cu=1<cx[ck]?cw?"-/"+bA(cx[bM[ae](bM[a4]()*cx[ck])])+"/?":"?":cw&&cw!=r?"-/"+bA(cw[aS]())+"/?":"?";Defer.js(aw+"feeds/posts/summary/"+cu+"alt=json&callback=jo."+e+"_"+a9+"_"+n+"&max-results="+cA),jo[e+"_"+a9+"_"+n]=function(cF){var cJ=j(cF.feed.openSearch$totalResults.$t),cH=cF.feed.category;if(0<cJ){for(var cI={title:x,posts:[],categories:cH},cD=cF.feed.entry,h=0,cB=0;cB<cD[ck];++cB){var cC,cK,cG=cD[cB],cE=cG.link[cG.link[ck]-1][S];if(h==o){break}cE!=i&&(h++,(cC={}).grup_id=n,cC.url=cE,cC.title=cG[aH].$t,cC.summary=cG.summary.$t[aS](),cC.img=cG.media$thumbnail&&cG.media$thumbnail.url,cC.author=cG.author[0].name.$t,cC.comment=cG.thr$total&&cG.thr$total.$t,cC.label=cG.category,cK=cG.published.$t,cG=(cE=new bW(cK))[bh+V](),cK=cE[bh+aT]()+1,cE=cE[bh+aQ](),cC.date=cE+"/"+cK+"/"+cG,cI.posts[aj](cC))}cF=J[ct];typeof cF===a7&&0<cI.posts[ck]&&(cz&&(cI.posts=cf(cI.posts)[bp](0,cz)),cv[aY]=cF(cI)[aS](),bf(cv,"visually-hidden"),Defer.dom(".lazy-"+n,1,"loaded",C),!cy||typeof(cF=J[cy])===a7&&cF())}}};var s=function(ct){for(var o=ct[ci]("a"),i=0;i<o[ck];++i){var n=o[i],h=n[S],x=aE[bv]("span");G(x,"d-block fw-bold pt-2 jt-text-primary"),n[cl](x),bP(h,x)}};function ac(){(bF&&bF[D]||d&&d[D]?bf:G)(ch,"header-animate")}function u(n,h){function o(t){n[R](t[I])||(h(),i())}var i=function(){aE[aB+aP](E,o)};aE[bX+aP](E,o)}function N(h){h!=cb[S]&&(G(W,"loader"),cb[S]=h,cc[a2]=h),H(W,"d-none")&&(bf(W,"d-none"),h=K[ar][ay](/<script.*?src='(.*?)'/)[1],Defer.js(h,"comment-js",500,function(){BLOG_CMT_createIframe(b0+U+"rpc_relay.html")}))}bF&&bF[bX+aP](aM,function(){ac(),this[D]&&a(function(){aE[q]("search-input")[ak]()},100),u(P,function(){bF[D]=!1,ac()})}),d&&d[bX+aP](aM,function(){ac(),this[D]?(aA(aR,"show"),u(aR,function(){d[D]=!1,ac(),bS(aR,"show")})):bS(aR,"show")}),cm&&cm[bX+aP](E,function(h){h[bV](),bd(aL,"dark-mode"),null!==bj&&bj[a3+aG]("theme",H(aL,"dark-mode")?"dark":"light")}),J[bX+aP](bH,function(){(1<=this[av]&&null!==ch?G:bf)(ch,"shadow-sm"),(1000<=this[av]&&null!==al?bf:G)(al,"d-none")},!1),cc&&cc[bX+aP](cq,function(h){bf(W,"loader")}),bE&&bE[bX+aP](E,function(h){h[bV](),N(this[S]),"add-comment"!=W[aJ][b5]&&aE[q]("add-comment")[cl](W)});for(bs=0;bs<be[ck];++bs){be[bs][bX+aP](E,function(h){h[bV]();h=this[bh+aN]("data-comment-id");N(this[S]),W[aJ][b5]!="c"+h&&aE[q]("c"+h)[cl](W)})}for(bs=0;bs<bL[ck];++bs){var a1=bL[bs];a1[bX+aP](aK,function(o){o[bV]();var n=o[I];G(n,"loading");var h=new FormData(n),i="blogID="+k;h[au](function(ct,x){i+="&"+bA(x)+"="+bA(ct)});o=b0+U+"contact-form.do",h=new bJ;h[bK](an,o),h[cd](bc,bT),h[a0](i),h[X]=function(){var t;bf(n,"loading"),4===this[b2]&&200===this[cs]&&""!=this[b8]&&((t=ai(this[at][aS]()))&&"true"==t.details.emailSentStatus?(n[y](),bf(n,"send-error"),G(n,"send-success")):(bf(n,"send-success"),G(n,"send-error")))}})}function b(){aE[aB+aP](bx,b),aE[aB+aP](T,b),aE[aB+aP](bH,b),cn||(aF&&((adsbygoogle=J[cp]||[])[aj]({google_ad_client:aF,enable_page_level_ads:!0,overlays:{bottom:!0}}),Defer.js(b0+"pagead2.googlesyndication.com/pagead/js/"+cp+".js?client="+aF,cp,100)),p&&p!=r&&Defer.js(b0+"www.googletagmanager.com/gtag/js?id="+p,bn,100,function(){function h(){dataLayer[aj](arguments)}h("js",new Date),h(L,p)}),aW&&aW()),k&&Defer.css(b0+U+"dyn-css/authorization.css?targetBlogID="+k)}Z&&(aE[aH]=aE[aH][B](a8,a8+bR+" "+Z+a8)),Defer.dom(".lazyload",1,"loaded",C),Defer.dom("#post-pager",1,null,s,null,{rootMargin:"200%"}),Defer.dom("#pagination",1,null,co,null,{rootMargin:"200%"}),Defer.dom(".custom-posts",1,null,jo[ce],null,{rootMargin:"200%"}),aE[bX+aP](bx,b),aE[bX+aP](T,b),aE[bX+aP](bH,b)}();
