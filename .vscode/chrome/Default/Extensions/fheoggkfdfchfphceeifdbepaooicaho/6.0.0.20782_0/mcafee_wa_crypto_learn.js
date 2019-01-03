/*!
 * MCAFEE RESTRICTED CONFIDENTIAL
 * Copyright (c) 2018 McAfee, LLC
 * 
 * The source code contained or described herein and all documents related
 * to the source code ("Material") are owned by McAfee or its
 * suppliers or licensors. Title to the Material remains with McAfee
 * or its suppliers and licensors. The Material contains trade
 * secrets and proprietary and confidential information of McAfee or its
 * suppliers and licensors. The Material is protected by worldwide copyright
 * and trade secret laws and treaty provisions. No part of the Material may
 * be used, copied, reproduced, modified, published, uploaded, posted,
 * transmitted, distributed, or disclosed in any way without McAfee's prior
 * express written permission.
 * 
 * No license under any patent, copyright, trade secret or other intellectual
 * property right is granted to or conferred upon you by disclosure or
 * delivery of the Materials, either expressly, by implication, inducement,
 * estoppel or otherwise. Any license under such intellectual property rights
 * must be expressed and approved by McAfee in writing.
 * 
 * 
 */!function(e){var t={};function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=30)}([function(e,t,s){"use strict";s.d(t,"a",function(){return o});var n=s(18),a=s(6);const o={uid:"{0DE9E47C-871A-4F90-8440-B190C216800A}",resourceReq:null,gtiRequestor:null,resourceRootURI:null,annotationProperties:null,balloonProperties:null,reputationReqCount:5,annotationEvents:null,activeBalloonElement:null,debugMode:!1,logger:new n.a(a.a.loglevel),activeURI:null,mapSelectors:new Map,cacheStats:{},imageCounter:0,eventHandler:null,debugTitle:"",onlyShowMcAfeeSecure:!1,bkGlobals:null,isSearchPage:!1}},function(e,t,s){"use strict";s.d(t,"a",function(){return o});var n=s(6),a=s(7);const o={browser:n.a.browsertype==a.b.Edge?browser:chrome}},,function(e,t,s){"use strict";var n=s(5),a=s(15);var o=s(16),r=s(8);var i=s(19);s.d(t,"a",function(){return c});const c={messageDispatcher:null,useNativeLogger:!1,logger:null,cache:new class{constructor(){this._reputationCache=new Map,this._GTIRequestsInProgress=new Set,this.setCleanUpTimer()}setCleanUpTimer(){setInterval(()=>{this._reputationCache.size>.5*n.a.maxCacheRecords&&this.cleanReputationCache()},36e5)}cleanReputationCache(){this._reputationCache.forEach((e,t,s)=>{Date.now()>a.b.reputationTTL+e.timeCached&&s.delete(t)})}addInProgress(e){this._GTIRequestsInProgress.add(e)}deleteInProgress(e){this._GTIRequestsInProgress.delete(e)}isInProgress(e){return this._GTIRequestsInProgress.has(e)}setReputation(e,t){this._reputationCache.size>n.a.maxCacheRecords||this._reputationCache.set(e,{timeCached:Date.now(),value:t})}getReputation(e){const t=this._reputationCache.get(e);return null!=t&&Date.now()>a.b.reputationTTL+t.timeCached?(this._reputationCache.delete(e),null):t}},options:new Map,blockPageMap:new Map,annotationOption:o.a.All,lastUrl:null,featureStats:new class{constructor(){this.Type=Object.freeze({PagesScanned:0,PagesBlocked:1,ItemsBlocked:2}),this.data={pagesScanned:0,pagesBlocked:0,itemsBlocked:0},this.read()}add(e){switch(e){case this.Type.PagesScanned:this.data.pagesScanned++;break;case this.Type.PagesBlocked:this.data.pagesBlocked++;break;case this.Type.ItemsBlocked:this.data.itemsBlocked++}this.save()}read(){r.a.get(r.a.storeVariables.POPUP_STATS,e=>{void 0!==e&&(this.data.pagesScanned=e.pagesScanned,this.data.pagesBlocked=e.pagesBlocked,this.data.itemsBlocked=e.itemsBlocked)})}save(){r.a.set(r.a.storeVariables.POPUP_STATS,this.data)}getData(){return this.data}},secureSearchProvider:-1,webadvisorSupportedFeatures:null,origUrlMap:new Map,ffViewports:null,tabIdToColourMap:new Map,externalExtns:new i.a,autoPlayNotificationRequired:!1,cryptojackingDisabled:!0,tabIdToLastClickTime:new Map,affid:"0",binaryVersion:"0.0.0.0",TabData:new Map,MsgQueue:new Map}},function(e,t,s){"use strict";s.d(t,"a",function(){return n});const n={gtirequest:"gtirequest",reportstat:"reportstat",sendTelemetry:"sendTelemetry",executecommand:"executecommand",ondoccomplete:"ondoccomplete",onredirectiframe:"onredirectiframe",onnavigate:"onnavigate",onoptionreceived:"onoptionreceived",getsupportedfeatures:"getsupportedfeatures",isframeblocked:"isframeblocked",whitelistediframe:"whitelistediframe",ispageblocked:"ispageblocked",logmsg:"logmsg",getres:"getres",showoptions:"showoptions",addpagescanstat:"addpagescanstat",whitelist:"whitelist",getbkglobals:"getbkglobals",setViewport:"setViewport",installExtension:"installExtension",getExtensionStatus:"getExtensionStatus",updateTopFrame:"updateTopFrame",autorunvideosite:"autorunvideosite",saveclickeventtime:"saveclickeventtime",getclickeventtime:"getclickeventtime",getValues:"getValues",cryptoBlock:"cryptoBlock"}},function(e,t,s){"use strict";s.d(t,"a",function(){return n});const n={uninstallUrl:"https://home.mcafee.com/root/landingpage.aspx?lpname=get-it-now",siteAdvisorUrl:"http://www.siteadvisor.com/",siteAdvisorUrlSecure:"https://www.siteadvisor.com/",siteReportUrl:"https://www.siteadvisor.com/sitereport.html",blockPageUrl:"https://www.siteadvisor.com/restricted.html",phishingPageUrl:"https://www.siteadvisor.com/phishing.html",maxCacheRecords:1e3,browsertype:"browsertype",useragent:"useragent",whitelistUrl:"about:blank?command=whitelist&token=1",domain:"domain",redirectURL:"redirectURL",originalURL:"originalURL",chromeExtensionVersion:"chromeExtVer",disabled:"disabled",viewport:"viewport",annonlyonssearch:"*OnlyShowAnnotationsOnSecureSearch",showicons:"*Icons",pnaclenabled:"Pnaclenabled",phishingcategory:169,SystemGEO:"SystemGEO",BingCountrySet:"BingCountrySet",ProviderForced:"ProviderForced",BingPartnerCode:"PC=MC",BingProvider:23,BingCountrySetString:"AU,DE",cookie:"Cookie",maxreservedcallbackid:5,WBUpsellDisabled:"WBUpsellDisabled",autoplaynotificationrequired:"AutoPlayNotificationRequired",CryptojackingDisabled:"CryptojackingDisabled",Affid:"*Affid",UseNativeLogger:"UseNativeLogger"}},function(e,t,s){"use strict";s.d(t,"a",function(){return n});const n={loglevel:0,debugmode:!1,browsertype:2,extnversion:"6.0.0.20782"}},function(e,t,s){"use strict";s.d(t,"b",function(){return n}),s.d(t,"a",function(){return a});const n={Unknown:-1,Firefox:1,Chrome:2,IronSource:3,Edge:4},a=function(e){switch(e){case n.Firefox:return"FF";case n.Chrome:return"CH";case n.Edge:return"ED";case n.IronSource:return"ISB"}return"Unknown"}},function(e,t,s){"use strict";s.d(t,"a",function(){return o});var n=s(1),a=s(11);const o={storeVariables:{TRUSTED_SITES:"trustedSites",SEARCH_OPTION:"searchOption",INSTALLED_DATE:"installedDate",DAILY_PING_LAST_SENT_TIME:"dailyPingLastSentTime",POPUP_STATS:"popupStats",CRYPTO_WHITELIST:"cryptoWhitelist"},set:function(e,t){const s={};s[e]=t,n.a.browser.storage.local.set(s)},get:function(e,t){n.a.browser.storage.local.get(e,s=>{t(s[e])})},remove:function(e){n.a.browser.storage.local.remove(e)},getTrustedSites:function(e){o.get(o.storeVariables.TRUSTED_SITES,e)},isSiteInTrustedSites:function(e,t){if(void 0===t)return!1;for(let s=0;s<t.length;++s)if(e.toLowerCase().includes(t[s].toLowerCase()))return!0;return!1},isSiteTrusted:function(e,t){const s=a.a.getCleanURI(e);o.getTrustedSites(e=>{void 0!==e&&o.isSiteInTrustedSites(s,e)?t({trusted:!0}):t({trusted:!1})})},addTrustedSite:function(e,t){o.getTrustedSites(s=>{const n=void 0===s?[]:s;o.isSiteInTrustedSites(e,n)||(n.push(e),o.set(o.storeVariables.TRUSTED_SITES,n)),t({added:!0})})},removeTrustedSite:function(e){let t=e;t=a.a.getCleanURI(t),o.getTrustedSites(e=>{if(void 0===e)return;const s=[];for(let n=0;n<e.length;++n)e[n].toUpperCase()!=t.toUpperCase()&&s.push(e[n]);o.set(o.storeVariables.TRUSTED_SITES,s)})}}},,function(e,t,s){"use strict";s.d(t,"a",function(){return o});var n=s(1),a=s(4);class o{static logMsg(e){n.a.browser.runtime.sendMessage({command:a.a.logmsg,logDetails:e})}static saveLastClickedTime(){n.a.browser.runtime.sendMessage({action:a.a.saveclickeventtime,last_event:Date.now()})}static getLastClickedTime(e){n.a.browser.runtime.sendMessage({action:a.a.getclickeventtime},e)}static autoRunVideo(e){n.a.browser.runtime.sendMessage({command:a.a.autorunvideosite,Url:e})}static isPageBlocked(e,t){n.a.browser.runtime.sendMessage({command:a.a.ispageblocked,Url:e},t)}static isFrameBlocked(e,t){n.a.browser.runtime.sendMessage({command:a.a.isframeblocked,Url:e},t)}static getSupportedFeatures(e){n.a.browser.runtime.sendMessage({command:a.a.getsupportedfeatures},e)}static reportStat(e,t){n.a.browser.runtime.sendMessage({command:a.a.reportstat,Name:e,Value:t})}static makeGTIRequest(e,t,s,o,r){return n.a.browser.runtime.sendMessage({command:a.a.gtirequest,searchEngineType:t,Url:e,isSecureSearch:s,requestData:o},r),!0}static onNavigate(e,t){n.a.browser.runtime.sendMessage({command:a.a.onnavigate,Url:e,FrameId:t})}static executeCommand(e,t){n.a.browser.runtime.sendMessage({command:a.a.executecommand,commandId:e,params:t})}static addPageScanStat(){n.a.browser.runtime.sendMessage({command:a.a.addpagescanstat})}static whitelist(e,t,s,o){n.a.browser.runtime.sendMessage({command:a.a.whitelist,type:e,url:t,redirect_token:s,frame_id:o})}static getBkGlobals(e){n.a.browser.runtime.sendMessage({command:a.a.getbkglobals},e)}static domContentLoaded(){n.a.browser.runtime.sendMessage({command:a.a.ondoccomplete})}}},function(e,t,s){"use strict";s.d(t,"a",function(){return n});class n{static getURI(e){let t=e.split("?");return t.length>1?t[0]:(t=e.split("#")).length>1?t[0]:e}static getCleanURI(e){let t=e;return t.endsWith("/")&&(t=t.slice(0,-1)),t.startsWith("http://")?t=t.slice(7):t.startsWith("https://")&&(t=t.slice(8)),this.getURI(t)}static getParam(e,t){const s=e.indexOf("?");if(-1==s)return null;const n=e.substring(s+1).split("&");for(let e=0;e<n.length;++e){const s=n[e].indexOf("=");if(-1!=s&&n[e].substring(0,s)==t){return n[e].substring(s+1)}}return null}static getDomain(e){if(void 0===e||!/^https?:\/\//.test(e))return"";return new URL(e).hostname}}},,,,function(e,t,s){"use strict";s.d(t,"b",function(){return n}),s.d(t,"c",function(){return o}),s.d(t,"a",function(){return r});const n={reputationTTL:36e5,maxGTIQuestionLength:16384,globalSafeModeFlag:536870912,contentType:"application/json; charset=utf-8",clientId:"87d8d1082c2f2f821f438b2359b7a5b4",prn:"McAfee WebAdvisor",sdkv:"1.0",pv:s(6).a.extnversion,pev:1},a=64,o=function(){this.op=null,this.uop=a,this.url=null,this.catset=4},r=function(e){this.ci=new function(e){this.cliid=n.clientId,this.prn=n.prn,this.sdkv=n.sdkv,this.pv=n.pv,this.pev=n.pev,this.rid=e,this.affid="0"}(e),this.q=[]}},function(e,t,s){"use strict";s.d(t,"a",function(){return n});const n={Unknown:-1,None:1,OnlySecureSearch:2,All:4}},function(e,t,s){"use strict";s.d(t,"a",function(){return o});var n=s(0),a=s(1);class o{constructor(){this._messages=null}geti18nRes(e){return a.a.browser.i18n.getMessage(e)}getURI(e){let t=null;return t=null!=n.a.resourceRootURI?n.a.resourceRootURI+e:a.a.browser.runtime.getURL(e)}getImage(e,t){try{const s=new XMLHttpRequest,a=this.getURI("images/"+e);s.open("GET",a,!0),s.responseType="blob",s.onload=function(e){if(4==s.readyState&&200==s.status){const e=new FileReader;e.onloadend=function(){e.result;t(e.result)},e.readAsDataURL(s.response)}},s.onerror=function(t){n.a.logger.error("Failed in requesting html: "+e+t)},s.send(null)}catch(e){n.a.logger.error(e.message)}}getContent(e,t,s){try{const a=new XMLHttpRequest,o=this.getURI(t+e);a.open("GET",o,!0),"json/"==t&&a.overrideMimeType("application/json"),a.onload=function(e){4==a.readyState&&200==a.status&&s(a.responseText)},a.onerror=function(t){n.a.logger.error("Failed in requesting :"+e+t)},a.send(null)}catch(e){n.a.logger.error(e.message)}}getJSON(e,t){this.getContent(e,"json/",t)}getHtml(e,t){this.getContent(e,"html/",t)}getResStr(e,t){if(null!=n.a.resourceRootURI)if(null==this._messages){const s=window.navigator.language;this.getContent("messages.json","_locales/"+s,s=>{if(null!=s&&(this._messages=JSON.parse(s),null!=this._messages)){const s=this._messages[e];t(s.message)}})}else{const s=this._messages[e];t(s.message)}else{let s=a.a.browser.i18n.getMessage(e);"??"==s&&(s=""),t(s)}}}},function(e,t,s){"use strict";const n={None:0,Info:1,Err:2,All:3};var a=s(10),o=s(3),r=s(6),i=s(8);s.d(t,"a",function(){return c});class c{constructor(e){this.logLevel=e,this.nativeLoggingEnabled=!1,this.processType=-1,this.browserType=r.a.browsertype,this.extensionType="wa",i.a.get("ExtensionLogging",e=>{void 0!==e&&Number.isInteger(e)&&e>=0&&e<=3&&(this.logLevel=e)})}setNativeLoggingEnabled(e,t){void 0!==t&&(this.processType=t),this.nativeLoggingEnabled=e}log(e){if(this.nativeLoggingEnabled){const t={processType:this.processType,browserType:this.browserType,extensionType:this.extensionType,logLevel:n.Info,msg:e};0===this.processType?a.a.logMsg(t):o.a.messageDispatcher.CallFunction("logMsg",{logDetails:t})}if(n.Info&this.logLevel){const t=new Date;console.log(t.toLocaleString()+" "+e)}}error(e){if(this.nativeLoggingEnabled){const t={processType:this.processType,browserType:this.browserType,extensionType:this.extensionType,logLevel:n.Err,msg:e};0===this.processType?a.a.logMsg(t):o.a.messageDispatcher.CallFunction("logMsg",{logDetails:t})}if(n.Err&this.logLevel){const t=new Date;console.error(t.toLocaleString()+" "+e)}}}},function(e,t,s){"use strict";s.d(t,"a",function(){return n});class n{constructor(){this._extensionMap=new Map,this._extensionMap.set("WebBoost","klekeajafkkpokaofllcadenjdckhinm")}isWhiteListed(e){const t=this._extensionMap.values();for(const s of t)if(s===e)return!0;return!1}get(e){return this._extensionMap.get(e)}}},,,,,,,,,,,function(e,t,s){"use strict";s.r(t);var n=s(17);(new class{constructor(){this.resourcerequestor=new n.a}localeData(e){return this.resourcerequestor.geti18nRes(e)}fillText(e,t){const s=document.getElementById(e);null!==s&&void 0!==s&&(s.textContent=t)}init(){document.title=this.localeData("res_CRYPTO_TITLE");const e={crypto_header_title:this.localeData("res_CRYPTO_HEADER_TITLE"),crypto_header_subtitle:this.localeData("res_CRYPTO_HEADER_SUBTITLE"),crypto_whatis_title:this.localeData("res_CRYPTO_WHATIS_TITLE"),crypto_whatis_point1:this.localeData("res_CRYPTO_WHATIS_POINT1"),crypto_whatis_point2:this.localeData("res_CRYPTO_WHATIS_POINT2"),crypto_whatis_point3:this.localeData("res_CRYPTO_WHATIS_POINT3"),crypto_signs_title:this.localeData("res_CRYPTO_SIGNS_TITLE"),crypto_signs_desc1:this.localeData("res_CRYPTO_SIGNS_DESC1"),crypto_signs_desc2:this.localeData("res_CRYPTO_SIGNS_DESC2"),crypto_signs_desc3:this.localeData("res_CRYPTO_SIGNS_DESC3"),crypto_signs_desc4:this.localeData("res_CRYPTO_SIGNS_DESC4"),crypto_protect_title:this.localeData("res_CRYPTO_PROTECT_TITLE"),crypto_protect_desc:this.localeData("res_CRYPTO_PROTECT_DESC"),crypto_own_title:this.localeData("res_CRYPTO_OWN_TITLE"),crypto_own_desc:this.localeData("res_CRYPTO_OWN_DESC"),crypto_allow_title:this.localeData("res_CRYPTO_ALLOW_TITLE"),crypto_allow_desc:this.localeData("res_CRYPTO_ALLOW_DESC"),crypto_footer_message1:this.localeData("res_CRYPTO_FOOTER_MESSAGE1"),crypto_footer_message2:this.localeData("res_CRYPTO_FOOTER_MESSAGE2")};for(const t in e)this.fillText(t,e[t])}}).init()}]);
//# sourceMappingURL=../sourceMap/chrome/mcafee_wa_crypto_learn.map