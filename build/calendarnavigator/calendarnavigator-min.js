YUI.add("calendarnavigator",function(e,t){function m(e){m.superclass.constructor.apply(this,arguments)}var n="contentBox",r="host",i="rendered",s=e.ClassNameManager.getClassName,o=e.substitute,u=e.Node,a=u.create,f="calendar",l="calendarnav",c=s(f,"header"),h=s(l,"prevmonth"),p=s(l,"nextmonth"),d=s(l,"month-disabled"),v=e.DataType.Date;m.NS="navigator",m.NAME="pluginCalendarNavigator",m.ATTRS={shiftByMonths:{value:1}},m.CALENDARNAV_STRINGS={prev_month_class:h,next_month_class:p},m.PREV_MONTH_CONTROL_TEMPLATE='<a class="yui3-u {prev_month_class}" role="button" aria-label="{prev_month_arialabel}" tabindex="{control_tabindex}"><span>&lt;</span></a>',m.NEXT_MONTH_CONTROL_TEMPLATE='<a class="yui3-u {next_month_class}" role="button" aria-label="{next_month_arialabel}" tabindex="{control_tabindex}"><span>&gt;</span></a>',e.extend(m,e.Plugin.Base,{_eventAttachments:{},_controls:{},initializer:function(e){this._controls={},this._eventAttachments={},this.afterHostMethod("renderUI",this._initNavigationControls)},destructor:function(){},_focusNavigation:function(e){e.currentTarget.focus()},_subtractMonths:function(e){if(e.type==="click"||e.type==="keydown"&&(e.keyCode==13||e.keyCode==32)){var t=this.get(r),n=t.get("date");t.set("date",v.addMonths(n,-1*this.get("shiftByMonths"))),e.preventDefault()}},_addMonths:function(e){if(e.type==="click"||e.type==="keydown"&&(e.keyCode==13||e.keyCode==32)){var t=this.get(r),n=t.get("date");t.set("date",v.addMonths(n,this.get("shiftByMonths"))),e.preventDefault()}},_updateControlState:function(){var e=this.get(r);v.areEqual(e.get("minimumDate"),e.get("date"))?(this._eventAttachments.prevMonth&&(this._eventAttachments.prevMonth.detach(),this._eventAttachments.prevMonth=!1),this._controls.prevMonth.hasClass(d)||this._controls.prevMonth.addClass(d).setAttribute("aria-disabled","true")):(this._eventAttachments.prevMonth||(this._eventAttachments.prevMonth=this._controls.prevMonth.on(["click","keydown"],this._subtractMonths,this)),this._controls.prevMonth.hasClass(d)&&this._controls.prevMonth.removeClass(d).setAttribute("aria-disabled","false")),v.areEqual(e.get("maximumDate"),v.addMonths(e.get("date"),e._paneNumber-1))?(this._eventAttachments.nextMonth&&(this._eventAttachments.nextMonth.detach(),this._eventAttachments.nextMonth=!1),this._controls.nextMonth.hasClass(d)||this._controls.nextMonth.addClass(d).setAttribute("aria-disabled","true")):(this._eventAttachments.nextMonth||(this._eventAttachments.nextMonth=this._controls.nextMonth.on(["click","keydown"],this._addMonths,this)),this._controls.nextMonth.hasClass(d)&&this._controls.nextMonth.removeClass(d).setAttribute("aria-disabled","false")),this._controls.prevMonth.on(["click","keydown"],this._focusNavigation,this),this._controls.nextMonth.on(["click","keydown"],this._focusNavigation,this)},_renderPrevControls:function(){var e=a(o(m.PREV_MONTH_CONTROL_TEMPLATE,m.CALENDARNAV_STRINGS));return e.on("selectstart",this.get(r)._preventSelectionStart),e},_renderNextControls:function(){var e=a(o(m.NEXT_MONTH_CONTROL_TEMPLATE,m.CALENDARNAV_STRINGS));return e.on("selectstart",this.get(r)._preventSelectionStart),e},_initNavigationControls:function(){var e=this.get(r);m.CALENDARNAV_STRINGS.control_tabindex=e.get("tabIndex"),m.CALENDARNAV_STRINGS.prev_month_arialabel="Go to previous month",m.CALENDARNAV_STRINGS.next_month_arialabel="Go to next month";var t=e.get(n).one("."+c);this._controls.prevMonth=this._renderPrevControls(),this._controls.nextMonth=this._renderNextControls(),this._updateControlState(),e.after("dateChange",this._updateControlState,this),t.prepend(this._controls.prevMonth),t.append(this._controls.nextMonth)}}),e.namespace("Plugin").CalendarNavigator=m},"@VERSION@",{requires:["plugin","classnamemanager","datatype-date","node","substitute"],skinnable:!0});
