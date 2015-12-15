/**
 * 
 */

// "use strict";

define(['dojo/_base/declare',
        'dijit/_WidgetBase',
        'dijit/_TemplatedMixin',
		'dojo/on',
		'dojo/_base/lang',
		'dojo/text!./template/HitCounter.html',
		'app/dialog/HelloDialog',
		'dojo/dom-attr'],

function(declare,
		_WidgetBase,
		_TemplatedMixin,
		on,
		lang,
		template,
		HelloDialog,
		domAttr) {

	var HitCounter = declare('app.counter.HitCounter',[ _WidgetBase, _TemplatedMixin ],{
				
				_count : 0,
				templateString : template,

				constructor : function() {
					console.log('constructor() invoked..');
				},
				postMixInProperties : function() {
					this.inherited(arguments);
					console.log('postMixInProperties() invoked..');
					//this._count = 10;
				},
				// buildRendering:function(){
				// console.log('buildRendering() invoked..');
				// this.hitBtn=domConstruct.create('button',{innerHTML:'Hit Me',class:'btn btn-primary'});
				// this.domNode=this.hitBtn;
				// },
				_setCountAttr:function(count){
					console.log('_setCountAttr()-'+count);
					this._count=count;
					this.countEle.innerHTML = this._count;
				},
				_getCountAttr:function(){
					console.log('_getCountAttr()-'+this._count);
					return this._count;
				},
				postCreate : function() {
					this.inherited(arguments);
					console.log('postCreate() invoked..');
					// on(this.btn,'click',this.hitCount.bind(this));
					// on(this.hitBtn,'click',lang.hitch(this,this.hitCount));
					this.own(on(this.hitBtn, 'click', lang.hitch(this,this.hitCount)));
				},

				// service
				hitCount : function() {
					this._count += 1;
					//this.countEle.innerHTML = this._count;
					if(this._count===101){
						domAttr.set(this.hitBtn,{disabled:'disabled'});
						var dialog=new HelloDialog();
						dialog.set('title','Warning!');
						dialog.set('content','Pls, Dont hit me');
						dialog.show();
					}
					this.set('count',this._count);
				},

				// destroy
				destroyRecursive : function() {
					console.log('destroy()');
					this.inherited(arguments);
				}

			});

	return HitCounter;

});