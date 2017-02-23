var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var lobbyViewUI=(function(_super){
		function lobbyViewUI(){
			
		    this.Icon=null;
		    this.game1=null;
		    this.game2=null;
		    this.priate=null;
		    this.warcraft=null;
		    this.gold=null;

			lobbyViewUI.__super.call(this);
		}

		CLASS$(lobbyViewUI,'ui.lobbyViewUI',_super);
		var __proto__=lobbyViewUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(lobbyViewUI.uiView);
		}

		STATICATTR$(lobbyViewUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":65,"x":415,"var":"Icon","skin":"res/lobby/lobbyIcon.png"}},{"type":"Button","props":{"y":6,"x":8,"var":"game1","skin":"res/game/money.png"}},{"type":"Button","props":{"y":9,"x":1045,"var":"game2","skin":"res/game/home.png"}},{"type":"Button","props":{"y":477,"x":8,"var":"priate","skin":"res/game/pairate.png"}},{"type":"Button","props":{"y":476,"x":1037,"var":"warcraft","skin":"res/game/king.png"}},{"type":"Button","props":{"y":244,"x":917,"var":"gold","skin":"res/game/gold.png"}},{"type":"Button","props":{"y":236,"x":132,"skin":"res/game/arc.png"}}]};}
		]);
		return lobbyViewUI;
	})(View);
var loginViewUI=(function(_super){
		function loginViewUI(){
			
		    this.title=null;
		    this.oneTouch_btn=null;
		    this.casino=null;
		    this.loginZone=null;
		    this.password=null;
		    this.name=null;
		    this.Login_btn=null;

			loginViewUI.__super.call(this);
		}

		CLASS$(loginViewUI,'ui.loginViewUI',_super);
		var __proto__=loginViewUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loginViewUI.uiView);
		}

		STATICATTR$(loginViewUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":186,"width":947,"skin":"res/share/logo.png","height":723,"sizeGrid":"5,5,5,5"}},{"type":"Label","props":{"y":57,"x":91,"width":423,"var":"title","text":"Dyson","height":118,"fontSize":50,"color":"#d1cccc","align":"center"}},{"type":"Button","props":{"y":605,"x":939,"width":342,"var":"oneTouch_btn","skin":"res/loading/Btn_bg.png","height":85},"child":[{"type":"Label","props":{"y":11.999999999999886,"x":54.00000000000006,"width":238,"text":"一鍵登入","height":118,"fontSize":50,"color":"#f6eaea","align":"center"}}]},{"type":"Label","props":{"y":62,"x":805,"width":423,"var":"casino","text":"Casino","height":118,"fontSize":50,"color":"#d1cccc","align":"center"}},{"type":"Box","props":{"y":456,"x":12,"var":"loginZone"},"child":[{"type":"TextInput","props":{"x":37,"width":283,"var":"password","text":"22","promptColor":"#f6eeee","prompt":"password","height":47,"fontSize":20,"color":"#f4ecec"}},{"type":"TextInput","props":{"y":65,"x":36,"width":283,"var":"name","text":"11","promptColor":"#f6eeee","prompt":"TextInput","height":47,"fontSize":20,"color":"#f4ecec"}},{"type":"Button","props":{"y":147,"width":342,"var":"Login_btn","skin":"res/loading/Btn_bg.png","height":85},"child":[{"type":"Label","props":{"y":14,"x":48.00000000000006,"width":238,"text":"登入","height":118,"fontSize":50,"color":"#f6eaea","align":"center"}}]}]},{"type":"FillTexture","props":{"y":0,"x":0,"width":1280,"skin":"res/loading/wall.png","height":720}}]};}
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
		['uiView',function(){return this.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Label","props":{"y":124,"x":162,"width":137,"var":"showText","text":"loading","height":87,"color":"#f1e1e1"}},{"type":"Image","props":{"y":243,"x":142,"skin":"res/loading/chip_1.png"}},{"type":"Button","props":{"y":23,"x":41,"var":"btn_ok","skin":"res/loading/Btn_bg.png","labelStrokeColor":"#f6f6f6","label":"test"}},{"type":"Button","props":{"y":25,"x":220,"var":"btn_cancel","skin":"res/loading/Btn_bg.png","labelStrokeColor":"#f6f6f6","label":"cancel"}}]};}
		]);
		return TestPageUI;
	})(View);