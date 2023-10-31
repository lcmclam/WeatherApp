(function(g){var window=this;'use strict';var fpb=function(a,b){g.T.call(this,{I:"button",Na:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],Y:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},X:[{I:"svg",Y:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},X:[{I:"g",Y:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},X:[{I:"g",Y:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
X:[{I:"path",Y:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.J=a;this.Ua("click",this.onClick,this);this.updateValue("title",g.RU(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});g.ub(this,g.LU(b.Ec(),this.element))},gpb=function(a){g.T.call(this,{I:"div",
T:"ytp-miniplayer-ui"});this.wg=!1;this.player=a;this.V(a,"minimized",this.Eh);this.V(a,"onStateChange",this.sR)},hpb=function(a){g.yV.call(this,a);
this.B=new g.ZK(this);this.j=new gpb(this.player);this.j.hide();g.wU(this.player,this.j.element,4);a.yg()&&(this.load(),g.mu(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(fpb,g.T);fpb.prototype.onClick=function(){this.J.Ta("onExpandMiniplayer")};g.w(gpb,g.T);g.k=gpb.prototype;
g.k.dO=function(){this.tooltip=new g.XX(this.player,this);g.L(this,this.tooltip);g.wU(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.hd=new g.eW(this.player);g.L(this,this.hd);this.rk=new g.T({I:"div",T:"ytp-miniplayer-scrim"});g.L(this,this.rk);this.rk.Ga(this.element);this.V(this.rk.element,"click",this.XI);var a=new g.T({I:"button",Na:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.AG()]});g.L(this,a);a.Ga(this.rk.element);this.V(a.element,"click",this.Gp);
a=new fpb(this.player,this);g.L(this,a);a.Ga(this.rk.element);this.tv=new g.T({I:"div",T:"ytp-miniplayer-controls"});g.L(this,this.tv);this.tv.Ga(this.rk.element);this.V(this.tv.element,"click",this.XI);var b=new g.T({I:"div",T:"ytp-miniplayer-button-container"});g.L(this,b);b.Ga(this.tv.element);a=new g.T({I:"div",T:"ytp-miniplayer-play-button-container"});g.L(this,a);a.Ga(this.tv.element);var c=new g.T({I:"div",T:"ytp-miniplayer-button-container"});g.L(this,c);c.Ga(this.tv.element);this.SY=new g.jX(this.player,
this,!1);g.L(this,this.SY);this.SY.Ga(b.element);b=new g.iX(this.player,this);g.L(this,b);b.Ga(a.element);this.nextButton=new g.jX(this.player,this,!0);g.L(this,this.nextButton);this.nextButton.Ga(c.element);this.Gj=new g.QX(this.player,this);g.L(this,this.Gj);this.Gj.Ga(this.rk.element);this.Tc=new g.oX(this.player,this);g.L(this,this.Tc);g.wU(this.player,this.Tc.element,4);this.DI=new g.T({I:"div",T:"ytp-miniplayer-buttons"});g.L(this,this.DI);g.wU(this.player,this.DI.element,4);a=new g.T({I:"button",
Na:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.AG()]});g.L(this,a);a.Ga(this.DI.element);this.V(a.element,"click",this.Gp);a=new g.T({I:"button",Na:["ytp-miniplayer-replay-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.Gua()]});g.L(this,a);a.Ga(this.DI.element);this.V(a.element,"click",this.G8);this.V(this.player,"presentingplayerstatechange",this.Xd);this.V(this.player,"appresize",this.Nb);this.V(this.player,"fullscreentoggled",this.Nb);this.Nb()};
g.k.show=function(){this.Af=new g.Zt(this.xw,null,this);this.Af.start();this.wg||(this.dO(),this.wg=!0);0!==this.player.getPlayerState()&&g.T.prototype.show.call(this);this.Tc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Af&&(this.Af.dispose(),this.Af=void 0);g.T.prototype.hide.call(this);this.player.yg()||(this.wg&&this.Tc.hide(),this.player.loadModule("annotations_module"))};
g.k.Ba=function(){this.Af&&(this.Af.dispose(),this.Af=void 0);g.T.prototype.Ba.call(this)};
g.k.Gp=function(){this.player.stopVideo();this.player.Ta("onCloseMiniplayer")};
g.k.G8=function(){this.player.playVideo()};
g.k.XI=function(a){if(a.target===this.rk.element||a.target===this.tv.element)g.WL(this.player.Tb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Eh=function(){g.mu(this.player.getRootNode(),"ytp-player-minimized",this.player.yg())};
g.k.df=function(){this.Tc.Ic();this.Gj.Ic()};
g.k.xw=function(){this.df();this.Af&&this.Af.start()};
g.k.Xd=function(a){g.aH(a.state,32)&&this.tooltip.hide()};
g.k.Nb=function(){g.AX(this.Tc,0,this.player.tb().getPlayerSize().width,!1);g.pX(this.Tc)};
g.k.sR=function(a){this.player.yg()&&(0===a?this.hide():this.show())};
g.k.Ec=function(){return this.tooltip};
g.k.Ng=function(){return!1};
g.k.zg=function(){return!1};
g.k.ym=function(){return!1};
g.k.UJ=function(){};
g.k.mq=function(){};
g.k.Zy=function(){};
g.k.qn=function(){return null};
g.k.qH=function(){return null};
g.k.uN=function(){return new g.we(0,0)};
g.k.Pk=function(){return new g.vr(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Hw=function(a,b,c,d,e){var f=0,h=d=0,l=g.Jr(a);if(b){c=g.hu(b,"ytp-prev-button")||g.hu(b,"ytp-next-button");var m=g.hu(b,"ytp-play-button"),n=g.hu(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Hr(b,this.element),h=b.x,f=b.y-12):n&&(h=g.hu(b,"ytp-miniplayer-button-top-left"),f=g.Hr(b,this.element),b=g.Jr(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.tb().getPlayerSize().width;e=f+(e||0);l=g.ne(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Vp=function(){};
g.k.nm=function(){return!1};
g.k.oF=function(){};
g.k.XA=function(){};
g.k.Hr=function(){};
g.k.Gr=function(){};
g.k.By=function(){};
g.k.Rs=function(){};
g.k.XE=function(){};g.w(hpb,g.yV);g.k=hpb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.mu(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.yV.prototype.create.call(this);this.B.V(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.xl=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.xV("miniplayer",hpb);})(_yt_player);
