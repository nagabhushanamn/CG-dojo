
define([ 'dojo/_base/declare',
         'dijit/_WidgetBase',
         'dijit/_TemplatedMixin',
         'dojo/text!./templates/ProductWidget.html'],
		
         function(declare,_WidgetBase,_TemplatedMixin,template) {
	
			 var ProductWidget=declare([_WidgetBase,_TemplatedMixin],{
				 
				 name:'',
				 price:0,
				 desc:'',
				 canBuy:false,
				 notAvailable:false,
				 images:null,
				 
				 templateString:template,
				 
				 constructor:function(){
					 this.images=[]
				 },
				 postMixInProperties:function(){
					 this.inherited(arguments);
				 },
				 _setNameAttr:function(name){
					 this.name=name;
				 },
				 _setPriceAttr:function(price){
					 this.price=price
				 },
				 _setDescAttr:function(desc){
					 this.desc=desc;
				 },
				 _setCanBuyAttr:function(canBuy){
					 this.canBuy=canBuy;
				 },
				 _setNotAvailableAttr:function(notAvailable){
					 this.notAvailable=notAvailable;
				 },
				 postCreate:function(){
					 this.inherited(arguments);
				 },
				 
				 destroy:function(){
					 this.inherited(arguments);
				 }
				 
			 });	
		
			 return ProductWidget;
		 
	
		 });