var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var loginViewUI=(function(_super){
		function loginViewUI(){
			
		    this.password=null;
		    this.name=null;
		    this.Login_btn=null;
		    this.oneTouch_btn=null;

			loginViewUI.__super.call(this);
		}

		CLASS$(loginViewUI,'ui.loginViewUI',_super);
		var __proto__=loginViewUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loginViewUI.uiView);
		}

		STATICATTR$(loginViewUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":600,"height":800},"child":[{"type":"Label","props":{"y":67,"x":189,"width":238,"text":"9198棋牌","height":118,"fontSize":50,"color":"#0f0e0e"}},{"type":"TextInput","props":{"y":328.99999999999994,"x":166.00000000000006,"width":283,"var":"password","promptColor":"#f6eeee","prompt":"password","height":47,"fontSize":20,"color":"#f4ecec"}},{"type":"TextInput","props":{"y":251,"x":162,"width":283,"var":"name","promptColor":"#f6eeee","prompt":"TextInput","height":47,"fontSize":20,"color":"#f4ecec"}},{"type":"Button","props":{"y":408,"x":143,"width":342,"var":"Login_btn","skin":"res/loading/Btn_bg.png","height":85},"child":[{"type":"Label","props":{"y":14,"x":48.00000000000006,"width":238,"text":"登入","height":118,"fontSize":50,"color":"#f6eaea","align":"center"}}]},{"type":"Button","props":{"y":551,"x":147,"width":342,"var":"oneTouch_btn","skin":"res/loading/Btn_bg.png","height":85},"child":[{"type":"Label","props":{"y":11.999999999999886,"x":54.00000000000006,"width":238,"text":"一鍵登入","height":118,"fontSize":50,"color":"#f6eaea","align":"center"}}]}]};}
		]);
		return loginViewUI;
	})(View);
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