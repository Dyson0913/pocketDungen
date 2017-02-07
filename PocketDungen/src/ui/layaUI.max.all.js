var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var TestPageUI=(function(_super){
		function TestPageUI(){
			
		    this.showText=null;
		    this.btn_ok=null;
		    this.btn_cancel=null;

			TestPageUI.__super.call(this);
		}

		CLASS$(TestPageUI,'ui.TestPageUI',_super);
		var __proto__=TestPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TestPageUI.uiView);
		}

		STATICATTR$(TestPageUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Label","props":{"y":124,"x":162,"width":137,"var":"showText","text":"loading","height":87,"color":"#f1e1e1"}},{"type":"Image","props":{"y":243,"x":142,"skin":"res/loading/chip_1.png"}},{"type":"Button","props":{"y":35,"x":137,"var":"btn_ok","skin":"res/loading/Btn_bg.png","labelStrokeColor":"#f6f6f6","label":"test"}},{"type":"Button","props":{"y":32,"x":309,"var":"btn_cancel","skin":"res/loading/Btn_bg.png","labelStrokeColor":"#f6f6f6","label":"cancel"}}]};}
		]);
		return TestPageUI;
	})(View);