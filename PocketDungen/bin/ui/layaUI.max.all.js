var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var BaccaratViewUI=(function(_super){
		function BaccaratViewUI(){
			
		    this.bg=null;
		    this.poker_0=null;
		    this.poker_1=null;
		    this.poker_2=null;
		    this.poker_3=null;
		    this.poker_4=null;
		    this.poker_5=null;
		    this.betzone_0=null;
		    this.betzone_1=null;
		    this.betzone_2=null;
		    this.coin_0=null;
		    this.coin_2=null;
		    this.coin_4=null;
		    this.coin_1=null;
		    this.coin_3=null;
		    this.coin_5=null;
		    this.back_to_lobby=null;
		    this.betzone_3=null;
		    this.betzone_4=null;
		    this.cancelBtn=null;
		    this.comfirmBtn=null;

			BaccaratViewUI.__super.call(this);
		}

		CLASS$(BaccaratViewUI,'ui.BaccaratViewUI',_super);
		var __proto__=BaccaratViewUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BaccaratViewUI.uiView);
		}

		STATICATTR$(BaccaratViewUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1280,"var":"bg","skin":"res/baccarat/bg.jpg","height":720}},{"type":"Animation","props":{"y":139,"x":114,"var":"poker_0","source":"res/poker/porkerback.png,res/poker/1_c.png,res/poker/1_d.png,res/poker/1_h.png,res/poker/1_s.png,res/poker/2_c.png,res/poker/2_d.png,res/poker/2_h.png,res/poker/2_s.png,res/poker/3_c.png,res/poker/3_d.png,res/poker/3_h.png,res/poker/3_s.png,res/poker/4_c.png,res/poker/4_d.png,res/poker/4_h.png,res/poker/4_s.png,res/poker/5_c.png,res/poker/5_d.png,res/poker/5_h.png,res/poker/5_s.png,res/poker/6_c.png,res/poker/6_d.png,res/poker/6_h.png,res/poker/6_s.png,res/poker/7_c.png,res/poker/7_d.png,res/poker/7_h.png,res/poker/7_s.png,res/poker/8_c.png,res/poker/8_d.png,res/poker/8_h.png,res/poker/8_s.png,res/poker/9_c.png,res/poker/9_d.png,res/poker/9_h.png,res/poker/9_s.png,res/poker/10_c.png,res/poker/10_d.png,res/poker/10_h.png,res/poker/10_s.png,res/poker/11_c.png,res/poker/11_d.png,res/poker/11_h.png,res/poker/11_s.png,res/poker/12_c.png,res/poker/12_d.png,res/poker/12_h.png,res/poker/12_s.png,res/poker/13_c.png,res/poker/13_d.png,res/poker/13_h.png,res/poker/13_s.png"}},{"type":"Animation","props":{"y":138,"x":689,"var":"poker_1","source":"res/poker/porkerback.png,res/poker/1_c.png,res/poker/1_d.png,res/poker/1_h.png,res/poker/1_s.png,res/poker/2_c.png,res/poker/2_d.png,res/poker/2_h.png,res/poker/2_s.png,res/poker/3_c.png,res/poker/3_d.png,res/poker/3_h.png,res/poker/3_s.png,res/poker/4_c.png,res/poker/4_d.png,res/poker/4_h.png,res/poker/4_s.png,res/poker/5_c.png,res/poker/5_d.png,res/poker/5_h.png,res/poker/5_s.png,res/poker/6_c.png,res/poker/6_d.png,res/poker/6_h.png,res/poker/6_s.png,res/poker/7_c.png,res/poker/7_d.png,res/poker/7_h.png,res/poker/7_s.png,res/poker/8_c.png,res/poker/8_d.png,res/poker/8_h.png,res/poker/8_s.png,res/poker/9_c.png,res/poker/9_d.png,res/poker/9_h.png,res/poker/9_s.png,res/poker/10_c.png,res/poker/10_d.png,res/poker/10_h.png,res/poker/10_s.png,res/poker/11_c.png,res/poker/11_d.png,res/poker/11_h.png,res/poker/11_s.png,res/poker/12_c.png,res/poker/12_d.png,res/poker/12_h.png,res/poker/12_s.png,res/poker/13_c.png,res/poker/13_d.png,res/poker/13_h.png,res/poker/13_s.png"}},{"type":"Animation","props":{"y":137,"x":307,"var":"poker_2","source":"res/poker/porkerback.png,res/poker/1_c.png,res/poker/1_d.png,res/poker/1_h.png,res/poker/1_s.png,res/poker/2_c.png,res/poker/2_d.png,res/poker/2_h.png,res/poker/2_s.png,res/poker/3_c.png,res/poker/3_d.png,res/poker/3_h.png,res/poker/3_s.png,res/poker/4_c.png,res/poker/4_d.png,res/poker/4_h.png,res/poker/4_s.png,res/poker/5_c.png,res/poker/5_d.png,res/poker/5_h.png,res/poker/5_s.png,res/poker/6_c.png,res/poker/6_d.png,res/poker/6_h.png,res/poker/6_s.png,res/poker/7_c.png,res/poker/7_d.png,res/poker/7_h.png,res/poker/7_s.png,res/poker/8_c.png,res/poker/8_d.png,res/poker/8_h.png,res/poker/8_s.png,res/poker/9_c.png,res/poker/9_d.png,res/poker/9_h.png,res/poker/9_s.png,res/poker/10_c.png,res/poker/10_d.png,res/poker/10_h.png,res/poker/10_s.png,res/poker/11_c.png,res/poker/11_d.png,res/poker/11_h.png,res/poker/11_s.png,res/poker/12_c.png,res/poker/12_d.png,res/poker/12_h.png,res/poker/12_s.png,res/poker/13_c.png,res/poker/13_d.png,res/poker/13_h.png,res/poker/13_s.png"}},{"type":"Animation","props":{"y":138,"x":884,"var":"poker_3","source":"res/poker/porkerback.png,res/poker/1_c.png,res/poker/1_d.png,res/poker/1_h.png,res/poker/1_s.png,res/poker/2_c.png,res/poker/2_d.png,res/poker/2_h.png,res/poker/2_s.png,res/poker/3_c.png,res/poker/3_d.png,res/poker/3_h.png,res/poker/3_s.png,res/poker/4_c.png,res/poker/4_d.png,res/poker/4_h.png,res/poker/4_s.png,res/poker/5_c.png,res/poker/5_d.png,res/poker/5_h.png,res/poker/5_s.png,res/poker/6_c.png,res/poker/6_d.png,res/poker/6_h.png,res/poker/6_s.png,res/poker/7_c.png,res/poker/7_d.png,res/poker/7_h.png,res/poker/7_s.png,res/poker/8_c.png,res/poker/8_d.png,res/poker/8_h.png,res/poker/8_s.png,res/poker/9_c.png,res/poker/9_d.png,res/poker/9_h.png,res/poker/9_s.png,res/poker/10_c.png,res/poker/10_d.png,res/poker/10_h.png,res/poker/10_s.png,res/poker/11_c.png,res/poker/11_d.png,res/poker/11_h.png,res/poker/11_s.png,res/poker/12_c.png,res/poker/12_d.png,res/poker/12_h.png,res/poker/12_s.png,res/poker/13_c.png,res/poker/13_d.png,res/poker/13_h.png,res/poker/13_s.png"}},{"type":"Animation","props":{"y":133,"x":489,"var":"poker_4","source":"res/poker/porkerback.png,res/poker/1_c.png,res/poker/1_d.png,res/poker/1_h.png,res/poker/1_s.png,res/poker/2_c.png,res/poker/2_d.png,res/poker/2_h.png,res/poker/2_s.png,res/poker/3_c.png,res/poker/3_d.png,res/poker/3_h.png,res/poker/3_s.png,res/poker/4_c.png,res/poker/4_d.png,res/poker/4_h.png,res/poker/4_s.png,res/poker/5_c.png,res/poker/5_d.png,res/poker/5_h.png,res/poker/5_s.png,res/poker/6_c.png,res/poker/6_d.png,res/poker/6_h.png,res/poker/6_s.png,res/poker/7_c.png,res/poker/7_d.png,res/poker/7_h.png,res/poker/7_s.png,res/poker/8_c.png,res/poker/8_d.png,res/poker/8_h.png,res/poker/8_s.png,res/poker/9_c.png,res/poker/9_d.png,res/poker/9_h.png,res/poker/9_s.png,res/poker/10_c.png,res/poker/10_d.png,res/poker/10_h.png,res/poker/10_s.png,res/poker/11_c.png,res/poker/11_d.png,res/poker/11_h.png,res/poker/11_s.png,res/poker/12_c.png,res/poker/12_d.png,res/poker/12_h.png,res/poker/12_s.png,res/poker/13_c.png,res/poker/13_d.png,res/poker/13_h.png,res/poker/13_s.png"}},{"type":"Animation","props":{"y":143,"x":1075,"var":"poker_5","source":"res/poker/porkerback.png,res/poker/1_c.png,res/poker/1_d.png,res/poker/1_h.png,res/poker/1_s.png,res/poker/2_c.png,res/poker/2_d.png,res/poker/2_h.png,res/poker/2_s.png,res/poker/3_c.png,res/poker/3_d.png,res/poker/3_h.png,res/poker/3_s.png,res/poker/4_c.png,res/poker/4_d.png,res/poker/4_h.png,res/poker/4_s.png,res/poker/5_c.png,res/poker/5_d.png,res/poker/5_h.png,res/poker/5_s.png,res/poker/6_c.png,res/poker/6_d.png,res/poker/6_h.png,res/poker/6_s.png,res/poker/7_c.png,res/poker/7_d.png,res/poker/7_h.png,res/poker/7_s.png,res/poker/8_c.png,res/poker/8_d.png,res/poker/8_h.png,res/poker/8_s.png,res/poker/9_c.png,res/poker/9_d.png,res/poker/9_h.png,res/poker/9_s.png,res/poker/10_c.png,res/poker/10_d.png,res/poker/10_h.png,res/poker/10_s.png,res/poker/11_c.png,res/poker/11_d.png,res/poker/11_h.png,res/poker/11_s.png,res/poker/12_c.png,res/poker/12_d.png,res/poker/12_h.png,res/poker/12_s.png,res/poker/13_c.png,res/poker/13_d.png,res/poker/13_h.png,res/poker/13_s.png"}},{"type":"Sprite","props":{"y":437,"x":748,"width":194,"var":"betzone_0","height":190}},{"type":"Sprite","props":{"y":433,"x":338,"width":194,"var":"betzone_1","height":190}},{"type":"Sprite","props":{"y":447,"x":556,"width":171,"var":"betzone_2","height":150}},{"type":"Image","props":{"y":629,"x":244,"var":"coin_0","skin":"res/Coin/coin_10.png"}},{"type":"Image","props":{"y":636,"x":546,"var":"coin_2","skin":"res/Coin/coin_100.png"}},{"type":"Image","props":{"y":636,"x":815,"var":"coin_4","skin":"res/Coin/coin_1k.png"}},{"type":"Image","props":{"y":634,"x":394,"var":"coin_1","skin":"res/Coin/coin_50.png"}},{"type":"Image","props":{"y":632,"x":696,"var":"coin_3","skin":"res/Coin/coin_500.png"}},{"type":"Image","props":{"y":633,"x":974,"var":"coin_5","skin":"res/Coin/coin_5k.png"}},{"type":"Button","props":{"y":15,"x":30,"var":"back_to_lobby","skin":"res/share/backLobbyBtn.png"}},{"type":"Sprite","props":{"y":456,"x":970,"width":150,"var":"betzone_3","height":141}},{"type":"Sprite","props":{"y":462,"x":162,"width":150,"var":"betzone_4","height":141}},{"type":"Button","props":{"y":44,"x":265,"width":310,"var":"cancelBtn","skin":"res/share/Btn_bg.png","height":82},"child":[{"type":"Label","props":{"y":13,"x":37,"width":238,"text":"取消","height":53,"fontSize":50,"color":"#f6eaea","align":"center"}}]},{"type":"Button","props":{"y":45,"x":632,"width":310,"var":"comfirmBtn","skin":"res/share/Btn_bg.png","height":82},"child":[{"type":"Label","props":{"y":14,"x":28,"width":238,"text":"確定","height":53,"fontSize":50,"color":"#f6eaea","align":"center"}}]}]};}
		]);
		return BaccaratViewUI;
	})(View);
var BonusGameUI=(function(_super){
		function BonusGameUI(){
			

			BonusGameUI.__super.call(this);
		}

		CLASS$(BonusGameUI,'ui.BonusGameUI',_super);
		var __proto__=BonusGameUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("BonusGame",BonusGame);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BonusGameUI.uiView);
		}

		STATICATTR$(BonusGameUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"runtime":"BonusGame","height":720},"child":[{"type":"Label","props":{"y":332,"x":489,"width":298,"text":"BounsGame","height":60,"fontSize":30,"color":"#f9f3f3","align":"center"}}]};}
		]);
		return BonusGameUI;
	})(View);
var FreeGameUI=(function(_super){
		function FreeGameUI(){
			

			FreeGameUI.__super.call(this);
		}

		CLASS$(FreeGameUI,'ui.FreeGameUI',_super);
		var __proto__=FreeGameUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("FreeGame",FreeGame);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(FreeGameUI.uiView);
		}

		STATICATTR$(FreeGameUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"runtime":"FreeGame","height":720},"child":[{"type":"Label","props":{"y":322,"x":479,"width":298,"text":"FreeGame","height":60,"fontSize":30,"color":"#f9f3f3","align":"center"}}]};}
		]);
		return FreeGameUI;
	})(View);
var HintViewUI=(function(_super){
		function HintViewUI(){
			
		    this.cancel=null;
		    this.comfirmBtn=null;
		    this.context=null;

			HintViewUI.__super.call(this);
		}

		CLASS$(HintViewUI,'ui.HintViewUI',_super);
		var __proto__=HintViewUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("HintUI",HintUI);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HintViewUI.uiView);
		}

		STATICATTR$(HintViewUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"runtime":"HintUI","height":720},"child":[{"type":"Box","props":{},"child":[{"type":"Image","props":{"y":178,"x":246,"width":755,"skin":"res/share/02.png","height":271,"sizeGrid":"0,1,0,1"}},{"type":"Button","props":{"y":368,"x":655,"width":310,"var":"cancel","skin":"res/share/Btn_bg.png","height":82},"child":[{"type":"Label","props":{"y":13,"x":37,"width":238,"text":"取消","height":53,"fontSize":50,"color":"#f6eaea","align":"center"}}]},{"type":"Button","props":{"y":368,"x":299,"width":310,"var":"comfirmBtn","skin":"res/share/Btn_bg.png","height":82},"child":[{"type":"Label","props":{"y":14,"x":28,"width":238,"text":"確定","height":53,"fontSize":50,"color":"#f6eaea","align":"center"}}]},{"type":"Label","props":{"y":198,"x":287,"width":696,"var":"context","text":"label","height":162,"fontSize":30,"align":"center"}}]}]};}
		]);
		return HintViewUI;
	})(View);
var lobbyViewUI=(function(_super){
		function lobbyViewUI(){
			
		    this.game1=null;
		    this.priate=null;
		    this.warcraft=null;
		    this.gold=null;
		    this.game2=null;

			lobbyViewUI.__super.call(this);
		}

		CLASS$(lobbyViewUI,'ui.lobbyViewUI',_super);
		var __proto__=lobbyViewUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(lobbyViewUI.uiView);
		}

		STATICATTR$(lobbyViewUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Button","props":{"y":6,"x":8,"var":"game1","skin":"res/lobby/money.png"}},{"type":"Button","props":{"y":9,"x":1045,"skin":"res/lobby/home.png"}},{"type":"Button","props":{"y":477,"x":8,"var":"priate","skin":"res/lobby/pairate.png"}},{"type":"Button","props":{"y":476,"x":1037,"var":"warcraft","skin":"res/lobby/king.png"}},{"type":"Button","props":{"y":244,"x":917,"var":"gold","skin":"res/lobby/gold.png"}},{"type":"Button","props":{"y":236,"x":132,"var":"game2","skin":"res/lobby/arc.png"}}]};}
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
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":186,"width":947,"skin":"res/loading/logo.png","height":723}},{"type":"Label","props":{"y":57,"x":91,"width":423,"var":"title","text":"Dyson","height":118,"fontSize":50,"color":"#d1cccc","align":"center"}},{"type":"Button","props":{"y":605,"x":939,"width":342,"var":"oneTouch_btn","skin":"res/share/Btn_bg.png","height":85},"child":[{"type":"Label","props":{"y":11.999999999999886,"x":54.00000000000006,"width":238,"text":"一鍵登入","height":118,"fontSize":50,"color":"#f6eaea","align":"center"}}]},{"type":"Label","props":{"y":62,"x":805,"width":423,"var":"casino","text":"Casino","height":118,"fontSize":50,"color":"#d1cccc","align":"center"}},{"type":"Box","props":{"y":456,"x":12,"var":"loginZone"},"child":[{"type":"TextInput","props":{"x":37,"width":283,"var":"password","text":"22","promptColor":"#f6eeee","prompt":"password","height":47,"fontSize":20,"color":"#f4ecec"}},{"type":"TextInput","props":{"y":65,"x":36,"width":283,"var":"name","text":"11","promptColor":"#f6eeee","prompt":"TextInput","height":47,"fontSize":20,"color":"#f4ecec"}},{"type":"Button","props":{"y":147,"width":342,"var":"Login_btn","skin":"res/share/Btn_bg.png","height":85},"child":[{"type":"Label","props":{"y":14,"x":48.00000000000006,"width":238,"text":"登入","height":118,"fontSize":50,"color":"#f6eaea","align":"center"}}]}]}]};}
		]);
		return loginViewUI;
	})(View);
var rollerUI=(function(_super){
		function rollerUI(){
			
		    this.imgItem=null;
		    this.icon_2=null;
		    this.icon_1=null;
		    this.icon_0=null;
		    this.icon_3=null;
		    this.icon_4=null;

			rollerUI.__super.call(this);
		}

		CLASS$(rollerUI,'ui.rollerUI',_super);
		var __proto__=rollerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(rollerUI.uiView);
		}

		STATICATTR$(rollerUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":140,"height":140},"child":[{"type":"Image","props":{"y":0,"x":0,"width":0,"var":"imgItem","height":0},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":140,"renderType":"mask","height":420},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":140,"lineWidth":1,"height":420,"fillColor":"#ff0000"}}]},{"type":"Image","props":{"y":140,"x":0,"var":"icon_2","skin":"res/game/2.jpg"}},{"type":"Image","props":{"y":0,"x":0,"var":"icon_1","skin":"res/game/1.jpg"}},{"type":"Image","props":{"y":-143,"x":0,"var":"icon_0","skin":"res/game/9.jpg"}},{"type":"Image","props":{"y":280,"x":0,"var":"icon_3","skin":"res/game/3.jpg"}},{"type":"Image","props":{"y":420,"x":0,"var":"icon_4","skin":"res/game/4.jpg"}}]}]};}
		]);
		return rollerUI;
	})(View);
var warcraftViewUI=(function(_super){
		function warcraftViewUI(){
			
		    this.Winpoint=null;
		    this.betScore=null;
		    this.coin_amount=null;
		    this.cash_amount=null;
		    this.back_to_lobby=null;
		    this.spinBtn=null;
		    this.betAddBtn=null;
		    this.paytableBtn=null;
		    this.roller_0=null;
		    this.roller_1=null;
		    this.roller_2=null;
		    this.roller_3=null;
		    this.roller_4=null;
		    this.stopBtn=null;
		    this.ani_0=null;
		    this.ani_1=null;
		    this.ani_2=null;
		    this.ani_3=null;
		    this.ani_4=null;
		    this.ani_5=null;
		    this.ani_6=null;
		    this.ani_7=null;
		    this.ani_8=null;
		    this.ani_9=null;
		    this.ani_10=null;
		    this.ani_11=null;
		    this.ani_12=null;
		    this.ani_13=null;
		    this.ani_14=null;
		    this.betSubBtn=null;

			warcraftViewUI.__super.call(this);
		}

		CLASS$(warcraftViewUI,'ui.warcraftViewUI',_super);
		var __proto__=warcraftViewUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Roller",Roller);
			View.regComponent("Roller1",Roller1);
			View.regComponent("Roller2",Roller2);
			View.regComponent("Roller3",Roller3);
			View.regComponent("Roller4",Roller4);
			View.regComponent("ui.WinAniUI",ui.WinAniUI);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(warcraftViewUI.uiView);
		}

		STATICATTR$(warcraftViewUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Label","props":{"y":665,"x":707,"width":206,"var":"Winpoint","text":"123,456,789","height":55,"fontSize":30,"color":"#ecdede","align":"center"}},{"type":"Label","props":{"y":668,"x":233,"width":101,"var":"betScore","text":"1","height":55,"fontSize":30,"color":"#ecdede","align":"center"}},{"type":"Label","props":{"y":20,"x":1089,"width":173,"var":"coin_amount","text":"999,999,999","height":34,"fontSize":30,"color":"#ecdede","align":"center"}},{"type":"Label","props":{"y":57,"x":1083,"width":193,"var":"cash_amount","text":"999,999,999","height":33,"fontSize":30,"color":"#ecdede","align":"center"}},{"type":"Button","props":{"y":118,"x":20,"var":"back_to_lobby","skin":"res/share/backLobbyBtn.png"}},{"type":"Button","props":{"y":632,"x":950,"width":215,"var":"spinBtn","skin":"res/share/Btn_bg.png","height":82},"child":[{"type":"Label","props":{"y":26,"x":78,"text":"開始","fontSize":30,"color":"#fbe6e5"}}]},{"type":"Button","props":{"y":660,"x":354,"var":"betAddBtn","skin":"res/share/CarryIn.png"}},{"type":"Button","props":{"y":646,"x":124,"var":"paytableBtn","skin":"res/share/helpBtn.png"}},{"type":"roller","props":{"y":76,"x":162,"var":"roller_0","runtime":"Roller"}},{"type":"roller","props":{"y":76,"x":314,"var":"roller_1","runtime":"Roller1"}},{"type":"roller","props":{"y":76,"x":467,"var":"roller_2","runtime":"Roller2"}},{"type":"roller","props":{"y":76,"x":619,"var":"roller_3","runtime":"Roller3"}},{"type":"roller","props":{"y":76,"x":771,"var":"roller_4","runtime":"Roller4"}},{"type":"Button","props":{"y":632,"x":950,"width":215,"var":"stopBtn","skin":"res/share/Btn_bg.png","height":82},"child":[{"type":"Label","props":{"y":26,"x":78,"text":"停輪","fontSize":30,"color":"#fbe6e5"}}]},{"type":"WinAni","props":{"y":74,"x":148,"visible":false,"var":"ani_0","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":207,"x":153,"visible":false,"var":"ani_1","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":358,"x":157,"var":"ani_2","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":68,"x":304,"visible":false,"var":"ani_3","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":207,"x":303,"visible":false,"var":"ani_4","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":358,"x":307,"var":"ani_5","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":76,"x":451,"visible":false,"var":"ani_6","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":212,"x":453,"visible":false,"var":"ani_7","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":363,"x":457,"var":"ani_8","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":77,"x":614,"visible":false,"var":"ani_9","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":213,"x":616,"visible":false,"var":"ani_10","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":364,"x":620,"var":"ani_11","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":68,"x":763,"visible":false,"var":"ani_12","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":204,"x":765,"visible":false,"var":"ani_13","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":355,"x":769,"var":"ani_14","runtime":"ui.WinAniUI"}},{"type":"Button","props":{"y":658,"x":213,"var":"betSubBtn","skin":"res/share/PlayerListCloseBtn.png"}}]};}
		]);
		return warcraftViewUI;
	})(View);
var WinAniUI=(function(_super){
		function WinAniUI(){
			
		    this.winAni_0=null;
		    this.winAni_1=null;

			WinAniUI.__super.call(this);
		}

		CLASS$(WinAniUI,'ui.WinAniUI',_super);
		var __proto__=WinAniUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(WinAniUI.uiView);
		}

		STATICATTR$(WinAniUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":164,"height":164},"child":[{"type":"Animation","props":{"y":0,"x":0,"visible":false,"var":"winAni_0","source":"res/game/ani_0.png,res/game/ani_1.png,res/game/ani_0.png"}},{"type":"Animation","props":{"y":0,"x":0,"visible":false,"var":"winAni_1","source":"res/game/ani_2.png,res/game/ani_3.png,res/game/ani_2.png"}}]};}
		]);
		return WinAniUI;
	})(View);