webpackJsonp([4],{GTtM:function(t,e,a){(t.exports=a("acE3")(!1)).push([t.i,"\n.mod-menu .menu-list__input > .el-input__inner,\n.mod-menu .icon-list__input > .el-input__inner {\n  cursor: pointer;\n}\n.mod-menu__icon-popover {\n  max-width: 370px;\n}\n.mod-menu__icon-list {\n  max-height: 180px;\n  padding: 0;\n  margin: -8px 0 0 -8px;\n}\n.mod-menu__icon-list > .el-button {\n    padding: 8px;\n    margin: 8px 0 0 8px;\n}\n.mod-menu__icon-list > .el-button > span {\n      display: inline-block;\n      vertical-align: middle;\n      width: 18px;\n      height: 18px;\n      font-size: 18px;\n}\n.mod-menu .icon-list__tips {\n  font-size: 18px;\n  text-align: center;\n  color: #e6a23c;\n  cursor: pointer;\n}\n",""])},NC16:function(t,e,a){var r=a("GTtM");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("XkoO")("03125490",r,!0)},cFZF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("0xDb"),n=a("Q7M0"),o={data:function(){var t=this;return{visible:!1,dataForm:{id:0,type:1,typeList:["目录","菜单","按钮"],name:"",parentId:0,parentName:"",url:"",perms:"",orderNum:0,icon:"",iconList:[]},dataRule:{name:[{required:!0,message:"菜单名称不能为空",trigger:"blur"}],parentName:[{required:!0,message:"上级菜单不能为空",trigger:"change"}],url:[{validator:function(e,a,r){1!==t.dataForm.type||/\S/.test(a)?r():r(new Error("菜单URL不能为空"))},trigger:"blur"}]},menuList:[],menuListTreeProps:{label:"name",children:"children"}}},created:function(){this.iconList=n.a.getNameList()},methods:{init:function(t){var e=this;this.dataForm.id=t||0,this.$http({url:this.$http.adornUrl("/sys/menu/select"),method:"get",params:this.$http.adornParams()}).then(function(t){var a=t.data;e.menuList=Object(r.d)(a.menuList,"menuId")}).then(function(){e.visible=!0,e.$nextTick(function(){e.$refs.dataForm.resetFields()})}).then(function(){e.dataForm.id?e.$http({url:e.$http.adornUrl("/sys/menu/info/"+e.dataForm.id),method:"get",params:e.$http.adornParams()}).then(function(t){var a=t.data;e.dataForm.id=a.menu.menuId,e.dataForm.type=a.menu.type,e.dataForm.name=a.menu.name,e.dataForm.parentId=a.menu.parentId,e.dataForm.url=a.menu.url,e.dataForm.perms=a.menu.perms,e.dataForm.orderNum=a.menu.orderNum,e.dataForm.icon=a.menu.icon,e.menuListTreeSetCurrentNode()}):e.menuListTreeSetCurrentNode()})},menuListTreeCurrentChangeHandle:function(t,e){this.dataForm.parentId=t.menuId,this.dataForm.parentName=t.name},menuListTreeSetCurrentNode:function(){this.$refs.menuListTree.setCurrentKey(this.dataForm.parentId),this.dataForm.parentName=(this.$refs.menuListTree.getCurrentNode()||{}).name},iconActiveHandle:function(t){this.dataForm.icon=t},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&t.$http({url:t.$http.adornUrl("/sys/menu/"+(t.dataForm.id?"update":"save")),method:"post",data:t.$http.adornData({menuId:t.dataForm.id||void 0,type:t.dataForm.type,name:t.dataForm.name,parentId:t.dataForm.parentId,url:t.dataForm.url,perms:t.dataForm.perms,orderNum:t.dataForm.orderNum,icon:t.dataForm.icon})}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(a.msg)})})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"80px"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-radio-group",{model:{value:t.dataForm.type,callback:function(e){t.$set(t.dataForm,"type",e)},expression:"dataForm.type"}},t._l(t.dataForm.typeList,function(e,r){return a("el-radio",{key:r,attrs:{label:r}},[t._v(t._s(e))])}))],1),t._v(" "),a("el-form-item",{attrs:{label:t.dataForm.typeList[t.dataForm.type]+"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:t.dataForm.typeList[t.dataForm.type]+"名称"},model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"上级菜单",prop:"parentName"}},[a("el-popover",{ref:"menuListPopover",attrs:{placement:"bottom-start",trigger:"click"}},[a("el-tree",{ref:"menuListTree",attrs:{data:t.menuList,props:t.menuListTreeProps,"node-key":"menuId","default-expand-all":!0,"highlight-current":!0,"expand-on-click-node":!1},on:{"current-change":t.menuListTreeCurrentChangeHandle}})],1),t._v(" "),a("el-input",{directives:[{name:"popover",rawName:"v-popover:menuListPopover",arg:"menuListPopover"}],staticClass:"menu-list__input",attrs:{readonly:!0,placeholder:"点击选择上级菜单"},model:{value:t.dataForm.parentName,callback:function(e){t.$set(t.dataForm,"parentName",e)},expression:"dataForm.parentName"}})],1),t._v(" "),1===t.dataForm.type?a("el-form-item",{attrs:{label:"菜单路由",prop:"url"}},[a("el-input",{attrs:{placeholder:"菜单路由"},model:{value:t.dataForm.url,callback:function(e){t.$set(t.dataForm,"url",e)},expression:"dataForm.url"}})],1):t._e(),t._v(" "),0!==t.dataForm.type?a("el-form-item",{attrs:{label:"授权标识",prop:"perms"}},[a("el-input",{attrs:{placeholder:"多个用逗号分隔, 如: user:list,user:create"},model:{value:t.dataForm.perms,callback:function(e){t.$set(t.dataForm,"perms",e)},expression:"dataForm.perms"}})],1):t._e(),t._v(" "),2!==t.dataForm.type?a("el-form-item",{attrs:{label:"排序号",prop:"orderNum"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0,label:"排序号"},model:{value:t.dataForm.orderNum,callback:function(e){t.$set(t.dataForm,"orderNum",e)},expression:"dataForm.orderNum"}})],1):t._e(),t._v(" "),2!==t.dataForm.type?a("el-form-item",{attrs:{label:"菜单图标",prop:"icon"}},[a("el-row",[a("el-col",{attrs:{span:22}},[a("el-popover",{ref:"iconListPopover",attrs:{placement:"bottom-start",trigger:"click","popper-class":"mod-menu__icon-popover"}},[a("div",{staticClass:"mod-menu__icon-list"},t._l(t.iconList,function(e,r){return a("el-button",{key:r,class:{"is-active":e===t.dataForm.icon},on:{click:function(a){t.iconActiveHandle(e)}}},[a("icon-svg",{attrs:{name:e}})],1)}))]),t._v(" "),a("el-input",{directives:[{name:"popover",rawName:"v-popover:iconListPopover",arg:"iconListPopover"}],staticClass:"icon-list__input",attrs:{readonly:!0,placeholder:"菜单图标名称"},model:{value:t.dataForm.icon,callback:function(e){t.$set(t.dataForm,"icon",e)},expression:"dataForm.icon"}})],1),t._v(" "),a("el-col",{staticClass:"icon-list__tips",attrs:{span:2}},[a("el-tooltip",{attrs:{placement:"top",effect:"light"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("全站推荐使用SVG Sprite, 详细请参考:"),a("a",{attrs:{href:"//github.com/daxiongYang/renren-fast-vue/blob/master/src/icons/index.js",target:"_blank"}},[t._v("icons/index.js")]),t._v("描述")]),t._v(" "),a("i",{staticClass:"el-icon-warning"})])],1)],1)],1):t._e()],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]};var s=a("46Yf")(o,i,!1,function(t){a("NC16")},null,null);e.default=s.exports}});