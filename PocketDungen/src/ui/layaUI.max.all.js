var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var lobbyViewUI=(function(_super){
		function lobbyViewUI(){
			
		    this.Icon=null;
		    this.game1=null;
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
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":65,"x":415,"var":"Icon","skin":"res/lobby/lobbyIcon.png"}},{"type":"Button","props":{"y":6,"x":8,"var":"game1","skin":"res/lobby/money.png"}},{"type":"Button","props":{"y":9,"x":1045,"skin":"res/lobby/home.png"}},{"type":"Button","props":{"y":477,"x":8,"var":"priate","skin":"res/lobby/pairate.png"}},{"type":"Button","props":{"y":476,"x":1037,"var":"warcraft","skin":"res/lobby/king.png"}},{"type":"Button","props":{"y":244,"x":917,"var":"gold","skin":"res/lobby/gold.png"}},{"type":"Button","props":{"y":236,"x":132,"skin":"res/lobby/arc.png"}}]};}
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
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":186,"width":947,"skin":"res/loading/logo.png","height":723}},{"type":"Label","props":{"y":57,"x":91,"width":423,"var":"title","text":"Dyson","height":118,"fontSize":50,"color":"#d1cccc","align":"center"}},{"type":"Button","props":{"y":605,"x":939,"width":342,"var":"oneTouch_btn","skin":"res/share/Btn_bg.png","height":85},"child":[{"type":"Label","props":{"y":11.999999999999886,"x":54.00000000000006,"width":238,"text":"一鍵登入","height":118,"fontSize":50,"color":"#f6eaea","align":"center"}}]},{"type":"Label","props":{"y":62,"x":805,"width":423,"var":"casino","text":"Casino","height":118,"fontSize":50,"color":"#d1cccc","align":"center"}},{"type":"Box","props":{"y":456,"x":12,"var":"loginZone"},"child":[{"type":"TextInput","props":{"x":37,"width":283,"var":"password","text":"22","promptColor":"#f6eeee","prompt":"password","height":47,"fontSize":20,"color":"#f4ecec"}},{"type":"TextInput","props":{"y":65,"x":36,"width":283,"var":"name","text":"11","promptColor":"#f6eeee","prompt":"TextInput","height":47,"fontSize":20,"color":"#f4ecec"}},{"type":"Button","props":{"y":147,"width":342,"var":"Login_btn","skin":"res/share/Btn_bg.png","height":85},"child":[{"type":"Label","props":{"y":14,"x":48.00000000000006,"width":238,"text":"登入","height":118,"fontSize":50,"color":"#f6eaea","align":"center"}}]}]},{"type":"FillTexture","props":{"y":0,"x":0,"width":1280,"skin":"res/loading/wall.png","height":720}}]};}
		]);
		return loginViewUI;
	})(View);
var warcraftViewUI=(function(_super){
		function warcraftViewUI(){
			
		    this.Winpoint=null;
		    this.betScore=null;
		    this.myCoin=null;
		    this.mycash=null;
		    this.back_to_lobby=null;
		    this.spinBtn=null;
		    this.betAddBtn=null;
		    this.paytableBtn=null;

			warcraftViewUI.__super.call(this);
		}

		CLASS$(warcraftViewUI,'ui.warcraftViewUI',_super);
		var __proto__=warcraftViewUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(warcraftViewUI.uiView);
		}

		STATICATTR$(warcraftViewUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"res/game/0.png"}},{"type":"Label","props":{"y":665,"x":707,"width":206,"var":"Winpoint","text":"123,456,789","height":55,"fontSize":30,"color":"#ecdede","align":"center"}},{"type":"Label","props":{"y":667,"x":232,"width":101,"var":"betScore","text":"1","height":55,"fontSize":30,"color":"#ecdede","align":"center"}},{"type":"Label","props":{"y":20,"x":1089,"width":173,"var":"myCoin","text":"999,999,999","height":34,"fontSize":30,"color":"#ecdede","align":"center"}},{"type":"Label","props":{"y":57,"x":1083,"width":193,"var":"mycash","text":"999,999,999","height":33,"fontSize":30,"color":"#ecdede","align":"center"}},{"type":"Button","props":{"y":118,"x":20,"var":"back_to_lobby","skin":"res/share/backLobbyBtn.png"}},{"type":"Button","props":{"y":632,"x":950,"width":215,"var":"spinBtn","skin":"res/share/Btn_bg.png","height":82},"child":[{"type":"Label","props":{"y":26,"x":78,"text":"開始","fontSize":30,"color":"#fbe6e5"}}]},{"type":"Button","props":{"y":661,"x":353,"var":"betAddBtn","skin":"res/share/CarryIn.png"}},{"type":"Button","props":{"y":646,"x":120,"var":"paytableBtn","skin":"res/share/helpBtn.png"}}]};}
		]);
		return warcraftViewUI;
	})(View);