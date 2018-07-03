webpackJsonp([10],{0:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__.p=function(){function make_url(){for(var seg,len,output="",i=0,l=arguments.length;i<l;i++)seg=arguments[i].toString(),len=seg.length,len>1&&"/"==seg.charAt(len-1)&&(seg=seg.substring(0,len-1)),output+="/"!=seg.charAt(0)?"/"+seg:seg;if("/"!=output){var segments=output.split("/"),firstseg=segments[1];if("static"==firstseg||"modules"==firstseg){var postfix=output.substring(firstseg.length+2,output.length);output="/"+firstseg,window.$C.BUILD_NUMBER&&(output+="/@"+window.$C.BUILD_NUMBER),window.$C.BUILD_PUSH_NUMBER&&(output+="."+window.$C.BUILD_PUSH_NUMBER),"app"==segments[2]&&(output+=":"+getConfigValue("APP_BUILD",0)),output+="/"+postfix}}var root=getConfigValue("MRSPARKLE_ROOT_PATH","/"),djangoRoot=getConfigValue("DJANGO_ROOT_PATH",""),locale=getConfigValue("LOCALE","en-US"),combinedPath="";return combinedPath=djangoRoot&&output.substring(0,djangoRoot.length)===djangoRoot?output.replace(djangoRoot,djangoRoot+"/"+locale.toLowerCase()):"/"+locale+output,""==root||"/"==root?combinedPath:root+combinedPath}function getConfigValue(key,defaultValue){if(window.$C&&window.$C.hasOwnProperty(key))return window.$C[key];if(void 0!==defaultValue)return defaultValue;throw new Error("getConfigValue - "+key+" not set, no default provided")}return make_url("/static/app/splunk_monitoring_console/build/pages/lite")+"/"}(),__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("splunk_monitoring_console-routers/MonitoringConsoleForwarderSetup"),__webpack_require__("util/router_utils")],__WEBPACK_AMD_DEFINE_RESULT__=function(MonitoringConsoleForwarderSetupRouter,router_utils){new MonitoringConsoleForwarderSetupRouter;router_utils.start_backbone_history()}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},481:function(module,exports){module.exports='<div class="alert alert-warning"><i class="icon-alert" /><%= _(\'This action deletes the existing assets table and can be resource-intensive on indexers.\').t() %></div>\n<p><%= _(\'Select the time range for the new forwarder assets table.\').t() %></p>\n<div class="form form-horizontal form-rebuild-time-range-picker"></div>\n'},482:function(module,exports){module.exports='\n<div class="section-header section-padded">\n\t<h2 class="section-title"><%= _("Forwarder Monitoring Setup").t() %></h2>\n\t<div class="section-description">\n\t\t<p><%= _(\'Forwarder monitoring dashboards provide information on forwarder activity and throughput. If you turn on forwarder monitoring, Splunk Enterprise enables a scheduled search named \').t() %><a href="<%- savedSearchLink %>" class="external" target="_blank">"DMC Forwarder - Build Asset Table"</a><%= _(\' that relies on internal network input metrics that your indexers record. If you have many forwarders, this search can significantly affect the search workload of the indexers.\').t() %></p>\n\t\t<p><%= _(\'To mitigate the cost of this search, increase the data collection interval so that the search runs less frequently. \').t() %><a href="<%- learnMoreLink %>" class="external" target="_blank"><%= _(\'Learn More\').t() %></a></p>\n\t</div>\n</div>\n\n<div class="section-padded">\n\t<div class="form form-horizontal forwarder-monitoring-settings"></div>\n\n\t<div class="dmc-forwarder-setup-button-section">\n\t\t<a class="btn btn-restore-forwarder-setup disabled" title="restore to previous settings"><%= _(\'Cancel\').t() %></a>\n\t\t<a class="btn btn-primary btn-save-forwarder-setup disabled"><%= _(\'Save\').t() %></a>\n\t</div>\n\n\t<div class="divider"></div>\n\t<div class="rebuild-forwarder-section">\n\t\t<a class="btn btn-rebuild-dmc-forwarder-assets"><%= _(\'Rebuild forwarder assets ...\').t() %></a>\n\t\t<div class="rebuild-dmc-forwarder-assets-explanation">\n\t\t\t<p><%= _(\'The Monitoring Console tags as “missing” any forwarders that do not report status within 15 minutes. This includes forwarders you might have decommissioned. \').t() %></p>\n\t\t\t<p><%= _(\'You can rebuild the list of forwarder assets to remove decommissioned forwarders from the status page. Click "Rebuild forwarder assets" and select the time range from which you want to rebuild the asset table. The Monitoring Console deletes the existing table and uses input metrics from indexers to create a new table.\').t() %></p>\n\t\t\t<p style="font-weight: bold;"><%= _(\'Caution: Rebuilding forwarder assets can affect performance on indexers and can take a significant amount of time, depending on the number of forwarders you have in your deployment.\').t() %></p>\n\t\t</div>\n\t</div>\n</div>\n'},483:function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(262)(),exports.push([module.id,".dmc-forwarder-setup-button-section{padding-bottom:30px}.forwarder-monitoring-settings{padding:15px 0}.rebuild-forwarder-section{padding-top:30px}.rebuild-forwarder-section .rebuild-dmc-forwarder-assets-explanation{padding-top:5px}.section-header{padding-bottom:0}.splunkmonitoringconsole-views-settings-forwardersetup{max-width:inherit}.section-header{padding:0}.section-header .section-title{padding:15px 20px;font-size:24px;margin:0;background:#eee;border-bottom:1px solid #ccc;font-weight:200}.main-section-body{background:#fff}.data-collection-interval .control-label{width:auto;margin-right:10px}.data-collection-interval .controls{margin-left:0}",""])},"splunkjs/mvc/savedsearchmanager":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){var mvc=__webpack_require__("splunkjs/mvc/mvc"),SearchManager=__webpack_require__("splunkjs/mvc/searchmanager"),_=__webpack_require__("require/underscore"),console=__webpack_require__("util/console"),Messages=__webpack_require__("splunkjs/mvc/messages"),GeneralUtils=__webpack_require__("util/general_utils"),Report=__webpack_require__("models/search/Report"),Job=__webpack_require__("models/search/Job"),DispatchJob=__webpack_require__("models/search/DispatchJob"),utils=__webpack_require__("splunkjs/mvc/utils"),splunkDUtils=__webpack_require__("util/splunkd_utils"),splunkConfig=__webpack_require__("stubs/splunk.config"),TokenUtils=__webpack_require__("splunkjs/mvc/tokenutils"),DISPATCHABLE_PROPERTIES=DispatchJob.DISPATCHABLE_PROPERTIES,registry=mvc.Components,ENDPOINT_PROPERTIES={trigger_actions:!0},SavedSearchManager=SearchManager.extend({moduleId:module.id,defaults:{autostart:!0,cache:!1,cancelOnUnload:!0,enablePreview:!0,runWhenTimeIsUndefined:!0},handleAutostart:function(){return this.get("autostart")?this.on("change:searchname",this._debouncedStartSearch,this):this.off("change:searchname",this._debouncedStartSearch,this),SearchManager.prototype.handleAutostart.apply(this,arguments)},createManager:function(job){var tokenDependencies=this.settings.get("tokenDependencies",{tokens:!0});return TokenUtils.tokenDependenciesMet(tokenDependencies,registry)?void SearchManager.prototype.createManager.call(this,job):void this.trigger("search:error",Messages.resolve("unresolved-tokens").message)},startSearch:function(options){if("boolean"==typeof options||"refresh"===options?options={refresh:!!options}:options||(options={}),this._refresh=options.refresh,!this.get("searchname"))return void this.trigger("search:error",_("No saved search provided.").t());var cache=this.get("cache")||!1;"scheduled"!==cache&&(cache=_.isBoolean(cache)||GeneralUtils.isBooleanEquivalent(cache)?GeneralUtils.normalizeBoolean(cache)?-1:0:parseInt(cache,10)),_.isNaN(cache)&&(console.warn("Invalid value for cache setting: %o",this.get("cache")),cache=0);var threshold=cache<0?new Date(0).valueOf():(new Date).valueOf()-1e3*cache,tokenDependencies=this.settings.get("tokenDependencies",{tokens:!0});if(!TokenUtils.tokenDependenciesMet(tokenDependencies,registry))return void this.trigger("search:error",Messages.resolve("unresolved-tokens").message);var search=new Report;search.set("id",this.applyModelFullPathToName(search,this.get("searchname")));var that=this;return search.fetch({success:function(){that.settings.set("search",search.entry.content.get("search"),{silent:!0});var cacheDisabled=0===cache||"scheduled"===cache&&!search.entry.content.get("is_scheduled");return cacheDisabled?void that._startSearchWithNewJob(search):void("scheduled"===cache?search.getLatestHistoricJobId().then(function(sid){if(sid){var job=new Job;job.set(job.idAttribute,sid),job.fetch({success:function(){that._startSearchWithExistingJob(job)},error:function(){that._startSearchWithNewJob(search)}})}else that._startSearchWithNewJob(search)}).fail(function(){that._startSearchWithNewJob(search)}):search.fetchJobs({success:function(jobs){var matches=jobs.filter(function(potentialJob){var properties=potentialJob.entry.content,published=new Date(potentialJob.entry.get("published")).valueOf(),isRunningRealTimeSearch=properties.get("isRealTimeSearch")&&!properties.get("isDone");return published>threshold||isRunningRealTimeSearch});if(matches.length){var mostRecentJobMatch=_.max(matches,function(match){return new Date(match.entry.get("published"))});that._startSearchWithExistingJob(mostRecentJobMatch)}else that._startSearchWithNewJob(search)},error:function(){that._startSearchWithNewJob(search)}}))},error:function(model,response){var err=splunkDUtils.convertToSDKResponse(response);if(404===err.status){var message=_("Warning: saved search not found: ").t()+'"'+that.get("searchname")+'"';console.log(message),that.trigger("search:error",message,err)}else console.log("Error fetching saved searches"),that.trigger("search:error",_("Error fetching saved searches").t(),err)}}),this},_startSearchWithExistingJob:function(job){this.createManager(job)},_startSearchWithNewJob:function(search){var that=this,timeRangeIsUnresolved=void 0===this.settings.get("earliest_time",{tokens:!1})&&this.settings.get("earliest_time",{tokens:!0})||void 0===this.settings.get("latest_time",{tokens:!1})&&this.settings.get("latest_time",{tokens:!0});if(timeRangeIsUnresolved&&!this.settings.get("runWhenTimeIsUndefined"))return void this.trigger("search:error",Messages.resolve("unresolved-search").message);var dispatchJob=new DispatchJob,dispatchLink=search.entry.links.get("dispatch"),dispatchUrl=splunkDUtils.fullpath(dispatchLink);dispatchJob.save({},{url:dispatchUrl,data:this._createOptionsForSearchJob(),success:function(){that.createManager(dispatchJob)},error:function(model,response){var err=splunkDUtils.convertToSDKResponse(response);that.trigger("search:error",_("Error dispatching saved search.").t(),err)}})},_createOptionsForSearchJob:function(){return _.reduce(this.settings.toJSON(),function(accum,value,setting){return(_.has(DISPATCHABLE_PROPERTIES,setting)||_.has(ENDPOINT_PROPERTIES,setting))&&(accum[setting]=value),accum},{})},applyModelFullPathToName:function(model,name){return/^\/services.*/i.test(name)||(name=splunkDUtils.fullpath(model.url+"/"+encodeURIComponent(name),{app:this.settings.get("app")||utils.getCurrentApp(),owner:this.settings.get("owner")||splunkConfig.USERNAME})),name}});return SavedSearchManager}.call(exports,__webpack_require__,exports,module),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"models/search/DispatchJob":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("shim/jquery"),__webpack_require__("require/underscore"),__webpack_require__("require/backbone"),__webpack_require__("models/search/Job")],__WEBPACK_AMD_DEFINE_RESULT__=function($,_,Backbone,JobModel){var DISPATCHABLE_PROPERTIES={status_buckets:!0,buckets:!0,earliest_time:!0,indexedRealtime:!0,latest_time:!0,enable_lookups:!0,lookups:!0,max_count:!0,max_time:!0,reduce_freq:!0,rt_backfill:!0,spawn_process:!0,time_format:!0,ttl:!0,auto_cancel:!0,auto_pause:!0,enablePreview:!0,adhoc_search_level:!0,check_risky_command:!0,provenance:!0},DISPATCH_MAPPINGS={status_buckets:"buckets",enable_lookups:"lookups"},Model=JobModel.extend({getCreateOptions:function(options){var createOptions={processData:!0,data:{auto_cancel:Model.DEFAULT_AUTO_CANCEL,status_buckets:300,output_mode:"json"}};return options=options||{},$.extend(!0,createOptions,options),delete createOptions.data.app,delete createOptions.data.owner,delete createOptions.data.sharing,_.each(createOptions.data,function(val,key){_.has(DISPATCHABLE_PROPERTIES,key)&&(createOptions.data["dispatch."+(DISPATCH_MAPPINGS[key]||key)]=val,delete createOptions.data[key])}),createOptions}},{DISPATCHABLE_PROPERTIES:DISPATCHABLE_PROPERTIES,DISPATCH_MAPPINGS:DISPATCH_MAPPINGS});return Model}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"splunk_monitoring_console-routers/MonitoringConsoleForwarderSetup":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("shim/jquery"),__webpack_require__("require/underscore"),__webpack_require__("routers/Base"),__webpack_require__("uri/route"),__webpack_require__("collections/services/saved/Searches"),__webpack_require__("splunk_monitoring_console-views/settings/forwarder_setup/enterprise/Master"),__webpack_require__("splunk_monitoring_console-views/settings/forwarder_setup/lite/Master")],__WEBPACK_AMD_DEFINE_RESULT__=function($,_,BaseRouter,Route,SearchesCollection,MasterView,MasterLightView){return BaseRouter.extend({initialize:function(){BaseRouter.prototype.initialize.apply(this,arguments),this.setPageTitle(_("Forwarder Setup").t()),this.loadingMessage=_("Loading...").t(),this.collection.searchesCollection=new SearchesCollection,this.deferreds.searchesCollectionDfd=$.Deferred(),this.collection.searchesCollection.fetch({data:{app:"splunk_monitoring_console",owner:"-",search:'name="DMC Forwarder - Build Asset Table"'}}).done(function(){this.deferreds.searchesCollectionDfd.resolve()}.bind(this))},page:function(locale,app,page){BaseRouter.prototype.page.apply(this,arguments),$.when(this.deferreds.searchesCollectionDfd,this.deferreds.pageViewRendered).done(function(){this.shouldRender&&($(".preload").replaceWith(this.pageView.el),this.model.serverInfo.isLite()?this.collection.searchesCollection.models[0].entry.content.get("disabled")?$(".main-section-body").html(new MasterLightView({model:{application:this.model.application,savedSearch:this.collection.searchesCollection.models[0]}}).render().$el):document.location.href=Route.page(this.model.application.get("root"),locale,app,"forwarder_overview"):$(".main-section-body").html(new MasterView({model:{application:this.model.application,savedSearch:this.collection.searchesCollection.models[0]}}).render().$el))}.bind(this))}})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},484:function(module,exports){module.exports='<% if (!isModal) { %>\n\t<div class="section-header section-padded">\n\t\t<h2 class="section-title">\n\t\t\t<%= _("Forwarder Monitoring").t() %>\n\t\t</h2>\n\t</div>\n<% } %>\n\n<div class="section-padded">\n\t<div class="section-description">\n\t\t<p><%= _(\'If you enable forwarder monitoring, a scheduled search named \').t() %>"DMC Forwarder - Build Asset Table"<%= _(\' will be enabled. This may affect the search workload.\').t() %></p>\n\t</div>\n\n\t<div class="form form-horizontal forwarder-monitoring-settings"></div>\n\t\t<% if (!isModal) { %>\n\t\t\t<div class="dmc-forwarder-setup-button-section">\n\t\t\t\t<a class="btn btn-primary btn-start-forwarder-monitoring disabled"><%= _(\'Start Monitoring\').t() %></a>\n\t\t\t</div>\n\t\t<% } %>\n</div>\n'},"splunk_monitoring_console-views/settings/forwarder_setup/enterprise/Master":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("shim/jquery"),__webpack_require__("require/underscore"),__webpack_require__("require/backbone"),module,__webpack_require__("views/Base"),__webpack_require__("views/shared/controls/ControlGroup"),__webpack_require__("splunk_monitoring_console-views/settings/forwarder_setup/enterprise/BuildAssetsNowDialog"),__webpack_require__("splunk_monitoring_console-views/settings/forwarder_setup/enterprise/RebuildAssetsDialog"),__webpack_require__("uri/route"),__webpack_require__(482),__webpack_require__("splunk_monitoring_console-views/settings/forwarder_setup/Master.pcss")],__WEBPACK_AMD_DEFINE_RESULT__=function($,_,Backbone,module,BaseView,ControlGroup,BuildAssetsNowDialog,RebuildAssetsDialog,route,Template,css){return BaseView.extend({moduleId:module.id,template:Template,initialize:function(){BaseView.prototype.initialize.apply(this,arguments),this._saveButtonClicked=!1,this.listenTo(this.model.savedSearch,"sync",function(){this.render(),!this.model.savedSearch.entry.content.get("disabled")&&this._saveButtonClicked&&(this.children.buildAssetsNowDialog.show(),this._saveButtonClicked=!1)}),this.listenTo(this.model.savedSearch.entry.content,"change:disabled",this._updateFormStyle),this.listenTo(this.model.savedSearch.entry.content,"change",this._updateSaveButtonStyle)},events:{"click .btn-rebuild-dmc-forwarder-assets:not(.disabled)":"_rebuildForwarderAsset","click .btn-save-forwarder-setup:not(.disabled)":"_saveForwarderSetup","click .btn-restore-forwarder-setup:not(.disabled)":"_restoreForwarderSetup"},_rebuildForwarderAsset:function(){this.children.rebuildAssetsDialog.show()},_saveForwarderSetup:function(){this._saveButtonClicked=!0,this.model.savedSearch.save()},_restoreForwarderSetup:function(){this.model.savedSearch.fetch()},_updateSaveButtonStyle:function(){this.model.savedSearch.entry.content.hasChanged()&&(this.$(".btn-restore-forwarder-setup").removeClass("disabled"),this.$(".btn-save-forwarder-setup").removeClass("disabled"))},_updateFormStyle:function(){this.model.savedSearch.entry.content.get("disabled")?(this.$(".btn-rebuild-dmc-forwarder-assets").addClass("disabled"),this.children.dataCollectionInterval.disable()):(this.$(".btn-rebuild-dmc-forwarder-assets").removeClass("disabled"),this.children.dataCollectionInterval.enable())},render:function(){return this.$el.html(this.compiledTemplate({savedSearchLink:route.manager(this.model.application.get("root"),this.model.application.get("locale"),this.model.application.get("app"),["saved","searches","DMC Forwarder - Build Asset Table"],{data:{uri:"/servicesNS/nobody/splunk_monitoring_console/saved/searches/DMC%20Forwarder%20-%20Build%20Asset%20Table",ns:"splunk_monitoring_console",action:"edit"}}),learnMoreLink:route.docHelp(this.model.application.get("root"),this.model.application.get("locale"),"dmc_forwarder_monitoring_setup")})),this.children.toggleSavedSearch=new ControlGroup({label:_("Forwarder Monitoring").t(),controlType:"SyntheticRadio",controlOptions:{model:this.model.savedSearch.entry.content,modelAttribute:"disabled",items:[{label:_("Disable").t(),value:!0},{label:_("Enable").t(),value:!1}]}}),this.children.dataCollectionInterval=new ControlGroup({label:_("Data Collection Interval").t(),controlType:"SyntheticSelect",controlOptions:{model:this.model.savedSearch.entry.content,modelAttribute:"cron_schedule",items:[{label:_("15 minutes").t(),value:"3,18,33,48 * * * *"},{label:_("30 minutes").t(),value:"18,48 * * * *"},{label:_("1 hour").t(),value:"18 * * * *"},{label:_("2 hours").t(),value:"18 */2 * * *"},{label:_("4 hours").t(),value:"18 */4 * * *"},{label:_("8 hours").t(),value:"18 */8 * * *"},{label:_("12 hours").t(),value:"18 */12 * * *"},{label:_("24 hours").t(),value:"18 5 * * *"}],menuWidth:"narrow",toggleClassName:"btn"}}),this.children.rebuildAssetsDialog=new RebuildAssetsDialog,this.children.buildAssetsNowDialog=new BuildAssetsNowDialog,this.$(".forwarder-monitoring-settings").append(this.children.toggleSavedSearch.render().$el),this.$(".forwarder-monitoring-settings").append(this.children.dataCollectionInterval.render().$el),this.$el.append(this.children.rebuildAssetsDialog.render().$el),this.$el.append(this.children.buildAssetsNowDialog.render().$el),this._updateFormStyle(),this}})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"splunk_monitoring_console-views/settings/forwarder_setup/Master.pcss":function(module,exports,__webpack_require__){var content=__webpack_require__(483);"string"==typeof content&&(content=[[module.id,content,""]]);__webpack_require__(264)(content,{});content.locals&&(module.exports=content.locals)},"splunk_monitoring_console-views/settings/forwarder_setup/enterprise/BuildAssetsNowDialog":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("shim/jquery"),__webpack_require__("require/underscore"),module,__webpack_require__("splunkjs/mvc/savedsearchmanager"),__webpack_require__("views/shared/Modal")],__WEBPACK_AMD_DEFINE_RESULT__=function($,_,module,SavedSearchManager,Modal){var MESSAGES={PROGRESS:_("in progress").t(),CANCEL:_("cancelled").t(),DONE:_("done").t(),ERROR:_("error").t(),FAILED:_("failed").t(),START:_("start").t()},CONTINUE_BUTTON='<a href="#" class="btn btn-primary modal-btn-primary build-now-button">'+_("Continue").t()+"</a>",RUN_AGAIN_BUTTON='<a href="#" class="btn btn-primary modal-btn-primary run-again-button">'+_("Run Again").t()+"</a>",DO_IT_LATER_BUTTON='<a href="#" class="btn modal-btn-cancel cancel pull-left" data-dismiss="modal">'+_("Later").t()+"</a>",EXPLANATION_TXT=_('Forwarder monitoring is active. Do you want to rebuild forwarder assets now? This operation can take time and increase the search workload on your indexers. Click "Later" to run the rebuild at the next scheduled search time.').t();return Modal.extend({moduleId:module.id,initialize:function(){Modal.prototype.initialize.apply(this,arguments),this.compiledProgressBar=_.template(this._progressBarTemplate)},events:$.extend({},Modal.prototype.events,{"click .build-now-button":function(e){e.preventDefault(),this._buildAssets()}}),_buildAssets:function(){this.searchManager?this.searchManager.startSearch():(this.searchManager=new SavedSearchManager({searchname:"DMC Forwarder - Build Asset Table"}),this.searchManager.on({"search:cancelled":function(){this._updateSearchStatus(MESSAGES.CANCEL)},"search:done":function(){this._updateSearchStatus(MESSAGES.DONE)},"search:error":function(){this._updateSearchStatus(MESSAGES.ERROR)},"search:failed":function(){this._updateSearchStatus(MESSAGES.FAILED)},"search:progress":function(){this._updateSearchStatus(MESSAGES.PROGRESS)},"search:start":function(){this._updateSearchStatus(MESSAGES.START)}},this))},_updateSearchStatus:function(message){var $progressBar=this.$(Modal.BODY_SELECTOR).find(".progress-bar");$progressBar.length<=0?this.$(Modal.BODY_SELECTOR).html(this.compiledProgressBar({message:message})):$progressBar.html(message),this.$(Modal.FOOTER_SELECTOR).empty(),_.contains([MESSAGES.CANCEL,MESSAGES.ERROR,MESSAGES.FAILED],message)?this.$(Modal.FOOTER_SELECTOR).append(RUN_AGAIN_BUTTON):MESSAGES.DONE===message&&($progressBar.removeClass("progress-striped active"),this.$(Modal.FOOTER_SELECTOR).html(Modal.BUTTON_DONE),this.$(Modal.FOOTER_SELECTOR).find(".btn-primary").focus())},render:function(){return this.$el.html(Modal.TEMPLATE),this.$(Modal.HEADER_TITLE_SELECTOR).html(_("Build Forwarder Assets Now").t()),this.$(Modal.BODY_SELECTOR).html(EXPLANATION_TXT),this.$(Modal.FOOTER_SELECTOR).append(CONTINUE_BUTTON),this.$(Modal.FOOTER_SELECTOR).append(DO_IT_LATER_BUTTON),this},_progressBarTemplate:'<div class="progress"><div class="progress-bar progress-striped active" style="width: 100%"><%= message %></div></div>'})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"splunk_monitoring_console-views/settings/forwarder_setup/lite/Master":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("shim/jquery"),__webpack_require__("require/underscore"),__webpack_require__("require/backbone"),module,__webpack_require__("views/Base"),__webpack_require__("views/shared/controls/ControlGroup"),__webpack_require__("views/shared/controls/SyntheticCheckboxControl"),__webpack_require__("uri/route"),__webpack_require__("splunkjs/mvc/savedsearchmanager"),__webpack_require__("splunkjs/mvc/searchmanager"),__webpack_require__(484),__webpack_require__("splunk_monitoring_console-views/settings/forwarder_setup/Master.pcss")],__WEBPACK_AMD_DEFINE_RESULT__=function($,_,Backbone,module,BaseView,ControlGroup,SyntheticCheckboxControl,route,SavedSearchManager,SearchManager,Template,css){return BaseView.extend({moduleId:module.id,template:Template,initialize:function(){BaseView.prototype.initialize.apply(this,arguments),this.listenTo(this.model.savedSearch.entry.content,"change:disabled",this._enableOrDisableMonitoring)},events:{"click .checkbox-enable-or-disable-forwarder-monitoring":"_enableOrDisableMonitoring","click .btn-start-forwarder-monitoring:not(.disabled)":"_startMonitoring"},_rebuildForwarderAssets:function(){this._rebuildForwarderAssetsSearch?this._rebuildForwarderAssetsSearch.startSearch():(this._rebuildForwarderAssetsSearch=new SearchManager({earliest_time:"-15m@m",latest_time:"now",search:"`dmc_re_build_forwarder_assets_light(1m)`"}),this._rebuildForwarderAssetsSearch.on({"search:cancelled":function(){this.$(".btn-start-forwarder-monitoring").removeClass("disabled")},"search:done":function(){document.location.href=route.page(this.model.application.get("root"),this.model.application.get("locale"),this.model.application.get("app"),"forwarder_overview")},"search:error":function(){this.$(".btn-start-forwarder-monitoring").removeClass("disabled")},"search:failed":function(){this.$(".btn-start-forwarder-monitoring").removeClass("disabled")},"search:progress":function(){this.$(".btn-start-forwarder-monitoring").addClass("disabled")},"search:start":function(){this.$(".btn-start-forwarder-monitoring").addClass("disabled")}},this))},_enableOrDisableMonitoring:function(){0==this.children.enableForwarderMonitoringCheckbox.getValue()?(this.$(".btn-start-forwarder-monitoring").addClass("disabled"),this.$(".data-collection-interval").removeClass("disabled"),this.$(".dropdown-toggle").addClass("disabled")):(this.$(".btn-start-forwarder-monitoring").removeClass("disabled"),this.children.dataCollectionInterval.enable())},_startMonitoring:function(){this.model.savedSearch.entry.content.set("disabled",0),this.model.savedSearch.save({},{success:function(){this._buildAssets()}.bind(this),fail:function(){document.location.href=route.page(this.model.application.get("root"),this.model.application.get("locale"),this.model.application.get("app"),"forwarder_overview")}})},_buildAssets:function(){return this.$(".btn-start-forwarder-monitoring").addClass("disabled"),this.savedSearchManager?(this.savedSearchManager.startSearch(),void this.$(".btn-start-forwarder-monitoring").removeClass("disabled")):(this.savedSearchManager=new SavedSearchManager({searchname:"DMC Forwarder - Build Asset Table"}),this.savedSearchManager.on({"search:cancelled":function(){this.$(".btn-start-forwarder-monitoring").removeClass("disabled")},"search:done":function(){this._rebuildForwarderAssets()},"search:error":function(){this.$(".btn-start-forwarder-monitoring").removeClass("disabled")},"search:failed":function(){this.$(".btn-start-forwarder-monitoring").removeClass("disabled")}},this),void this.$(".btn-start-forwarder-monitoring").removeClass("disabled"))},render:function(){return this.$el.html(this.compiledTemplate({savedSearchLink:route.manager(this.model.application.get("root"),this.model.application.get("locale"),this.model.application.get("app"),["saved","searches","DMC Forwarder - Build Asset Table"],{data:{uri:"/servicesNS/nobody/splunk_monitoring_console/saved/searches/DMC%20Forwarder%20-%20Build%20Asset%20Table",ns:"splunk_monitoring_console",action:"edit"}}),learnMoreLink:route.docHelp(this.model.application.get("root"),this.model.application.get("locale"),"dmc_forwarder_monitoring_setup"),isModal:!1})),this.children.enableForwarderMonitoringCheckbox=new SyntheticCheckboxControl({label:_("Enable Forwarder Monitoring").t(),defaultValue:!this.model.savedSearch.entry.content.get("disabled")}),this.children.toggleSavedSearch=new ControlGroup({label:_("Forwarder Monitoring").t(),controlType:"SyntheticRadio",controlOptions:{model:this.model.savedSearch.entry.content,modelAttribute:"disabled",items:[{label:_("Disable").t(),value:!0},{label:_("Enable").t(),value:!1}]}}),this.children.dataCollectionInterval=new ControlGroup({label:_("Fetch data every").t(),controlType:"SyntheticSelect",controlOptions:{model:this.model.savedSearch.entry.content,modelAttribute:"cron_schedule",items:[{label:_("15 minutes").t(),value:"3,18,33,48 * * * *"},{label:_("30 minutes").t(),value:"18,48 * * * *"},{label:_("1 hour").t(),value:"18 * * * *"},{label:_("2 hours").t(),value:"18 */2 * * *"},{label:_("4 hours").t(),value:"18 */4 * * *"},{label:_("8 hours").t(),value:"18 */8 * * *"},{label:_("12 hours").t(),value:"18 */12 * * *"},{label:_("24 hours").t(),value:"18 5 * * *"}],menuWidth:"narrow",toggleClassName:"btn"}}),this.$(".section-description").prepend(this.children.enableForwarderMonitoringCheckbox.render().$el),this.children.enableForwarderMonitoringCheckbox.$el.addClass("checkbox-enable-or-disable-forwarder-monitoring"),this.$(".forwarder-monitoring-settings").append(this.children.dataCollectionInterval.render().$el),this.children.dataCollectionInterval.$el.addClass("data-collection-interval"),this._enableOrDisableMonitoring(),this}})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"splunk_monitoring_console-views/settings/forwarder_setup/enterprise/RebuildAssetsDialog":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("shim/jquery"),__webpack_require__("require/underscore"),module,__webpack_require__("require/backbone"),__webpack_require__("splunkjs/mvc/searchmanager"),__webpack_require__("views/shared/Modal"),__webpack_require__("views/shared/controls/ControlGroup"),__webpack_require__(481)],__WEBPACK_AMD_DEFINE_RESULT__=function($,_,module,Backbone,SearchManager,Modal,ControlGroup,Template){var MESSAGES={PROGRESS:_("in progress").t(),CANCEL:_("cancelled").t(),DONE:_("done").t(),ERROR:_("error").t(),FAILED:_("failed").t(),START:_("start").t()},SPARKLINE_SPAN={"-15m@m":"1m","-30m@m":"1m","-1h@m":"2m","-4h@m":"8m","-8h@m":"16m","-12h@m":"24m","-1d@m":"48m"},CONTINUE_BUTTON='<a href="#" class="btn btn-primary modal-btn-primary confirm-rebuild-button">'+_("Start Rebuild").t()+"</a>";return Modal.extend({moduleId:module.id,initialize:function(){Modal.prototype.initialize.apply(this,arguments),this._rebuildIsDone=!1,this._timeRangeModel=new Backbone.Model({earliest:"-1d@m",latest:"now"}),this.compiledProgressBar=_.template(this._progressBarTemplate)},events:$.extend({},Modal.prototype.events,{"click .confirm-rebuild-button":function(e){e.preventDefault(),this._runRebuildSearch()},"click .do-it-again-button":function(e){e.preventDefault(),this.render()}}),_runRebuildSearch:function(){this._rebuildForwarderAssetsSearch?this._rebuildForwarderAssetsSearch.startSearch():(this._rebuildForwarderAssetsSearch=new SearchManager({earliest_time:this._timeRangeModel.get("earliest"),latest_time:this._timeRangeModel.get("latest"),search:this._getSearchString()}),this._rebuildForwarderAssetsSearch.on({"search:cancelled":function(){
this._updateSearchStatus(MESSAGES.CANCEL)},"search:done":function(){this._updateSearchStatus(MESSAGES.DONE)},"search:error":function(){this._updateSearchStatus(MESSAGES.ERROR)},"search:failed":function(){this._updateSearchStatus(MESSAGES.FAILED)},"search:progress":function(){this._updateSearchStatus(MESSAGES.PROGRESS)},"search:start":function(){this._updateSearchStatus(MESSAGES.START)}},this))},_updateSearchStatus:function(message){var $progressBar=this.$(Modal.BODY_SELECTOR).find(".progress-bar");$progressBar.length<=0?this.$(Modal.BODY_SELECTOR).html(this.compiledProgressBar({message:message})):$progressBar.html(message),this.$(Modal.FOOTER_SELECTOR).empty(),_.contains([MESSAGES.CANCEL,MESSAGES.DONE,MESSAGES.ERROR,MESSAGES.FAILED],message)&&($progressBar.removeClass("progress-striped active"),this.$(Modal.FOOTER_SELECTOR).html(Modal.BUTTON_DONE),this.$(Modal.FOOTER_SELECTOR).find(".btn-primary").focus(),this._rebuildIsDone=!0)},show:function(){this._rebuildIsDone&&this.render(),Modal.prototype.show.apply(this,arguments)},_getSearchString:function(){var span=SPARKLINE_SPAN[this._timeRangeModel.get("earliest")];if(!span)throw Error("cannot find right span for `dmc_re_build_forwarder_assets(1)`");return"`dmc_re_build_forwarder_assets("+span+")`"},render:function(){return this.$el.html(Modal.TEMPLATE),this.$(Modal.HEADER_TITLE_SELECTOR).html(_("Rebuild Forwarder Assets").t()),this.$(Modal.BODY_SELECTOR).html(this.compiledTemplate()),this.children.timeRangePicker=new ControlGroup({label:_("Time Range:").t(),controlType:"SyntheticSelect",controlOptions:{model:this._timeRangeModel,modelAttribute:"earliest",items:[{label:_("Last 15 minutes").t(),value:"-15m@m"},{label:_("Last 30 minutes").t(),value:"-30m@m"},{label:_("Last 1 hour").t(),value:"-1h@m"},{label:_("Last 4 hours").t(),value:"-4h@m"},{label:_("Last 8 hours").t(),value:"-8h@m"},{label:_("Last 12 hours").t(),value:"-12h@m"},{label:_("Last 24 hours").t(),value:"-1d@m"}],menuWidth:"narrow",toggleClassName:"btn",popdownOptions:{detachDialog:!0}},help:_("Splunk Enterprise uses logs in this time range to discover forwarders.").t()}),this.$(".form-rebuild-time-range-picker").append(this.children.timeRangePicker.render().$el),this.$(Modal.FOOTER_SELECTOR).append(CONTINUE_BUTTON),this.$(Modal.FOOTER_SELECTOR).append(Modal.BUTTON_CANCEL),this},template:Template,_progressBarTemplate:'<div class="progress"><div class="progress-bar progress-striped active" style="width: 100%"><%= message %></div></div>'})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}});