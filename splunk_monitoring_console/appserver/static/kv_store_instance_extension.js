require(["jquery","underscore","splunkjs/mvc/simplexml/ready!","splunkjs/mvc/searchmanager","splunk.util"],function(__WEBPACK_EXTERNAL_MODULE_1__,__WEBPACK_EXTERNAL_MODULE_2__,__WEBPACK_EXTERNAL_MODULE_5__,__WEBPACK_EXTERNAL_MODULE_12__,__WEBPACK_EXTERNAL_MODULE_18__){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(2),__webpack_require__(1),__webpack_require__(12),__webpack_require__(18),__webpack_require__(5)],__WEBPACK_AMD_DEFINE_RESULT__=function(_,$,SearchManager,utils){var ASSET_TABLE_LOOKUP='|inputlookup dmc_assets where search_group="dmc_group_kv_store"',NO_KVSTORE_MSG="You have no KV Store collections configured.",ERROR_MSG="We were unable to retrieve your KV Store instances. Please try again later.";$(".fieldset").hide(),$(".dashboard-row").hide();var kvStoreSearch=new SearchManager({id:"kv-store-lookup",search:ASSET_TABLE_LOOKUP,autostart:!0,auto_cancel:5,cache:!1,preview:!0});kvStoreSearch.on("search:done",function(properties){var numResults=properties.content.resultCount;0===numResults?$("#kv_store_instance_extension").html("<p>"+_(NO_KVSTORE_MSG).t()+"</p>").show():($(".fieldset").show(),$(".dashboard-row").show(),$("#kv_store_instance_extension").hide())}).on("search:failed search:error search:cancelled",function(){$("#kv_store_instance_extension").html("<p>"+_(ERROR_MSG).t()+"</p>").show()})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_1__},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_2__},,,function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_5__},,,,,,,function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_12__},,,,,,function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_18__}])});