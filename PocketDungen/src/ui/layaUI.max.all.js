var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var loadingUI=(function(_super){
		function loadingUI(){
			

			loadingUI.__super.call(this);
		}

		CLASS$(loadingUI,'ui.loadingUI',_super);
		var __proto__=loadingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loadingUI.uiView);
		}

		STATICATTR$(loadingUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Label","props":{"y":124,"x":162,"width":137,"text":"loading","height":87,"color":"#f1e1e1"}},{"type":"Image","props":{"y":243,"x":142,"skin":"chip_1.png"}}]};}
		]);
		return loadingUI;
	})(View);