var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var BetBtnSetUI=(function(_super){
		function BetBtnSetUI(){
			
		    this.cancelBtn=null;
		    this.comfirmBtn=null;

			BetBtnSetUI.__super.call(this);
		}

		CLASS$(BetBtnSetUI,'ui.component.BetBtnSetUI',_super);
		var __proto__=BetBtnSetUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BetBtnSetUI.uiView);
		}
		BetBtnSetUI.uiView={"type":"View","props":{"width":350,"height":170},"child":[{"type":"Button","props":{"y":3,"x":-2,"var":"cancelBtn","skin":"res/share/cancel_btn.png"}},{"type":"Button","props":{"y":2,"x":181,"var":"comfirmBtn","skin":"res/share/comfirm_btn.png"}}]};
		return BetBtnSetUI;
	})(View);
var betzoneUI=(function(_super){
		function betzoneUI(){
			
		    this.zoneEffect_0=null;
		    this.zoneEffect_1=null;
		    this.zoneEffect_2=null;
		    this.zoneEffect_3=null;
		    this.zoneEffect_4=null;
		    this.betzone_0=null;
		    this.betzone_1=null;
		    this.betzone_2=null;
		    this.betzone_3=null;
		    this.betzone_4=null;
		    this.coinzone_0=null;
		    this.coinzone_1=null;
		    this.coinzone_2=null;
		    this.coinzone_3=null;
		    this.coinzone_4=null;

			betzoneUI.__super.call(this);
		}

		CLASS$(betzoneUI,'ui.component.betzoneUI',_super);
		var __proto__=betzoneUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(betzoneUI.uiView);
		}
		betzoneUI.uiView={"type":"View","props":{"width":750,"height":720},"child":[{"type":"Image","props":{"y":317,"x":380,"var":"zoneEffect_0","skin":"res/baccarat/t02.png"}},{"type":"Image","props":{"y":317,"x":26,"var":"zoneEffect_1","skin":"res/baccarat/t01.png"}},{"type":"Image","props":{"y":226,"x":231,"var":"zoneEffect_2","skin":"res/baccarat/t04.png"}},{"type":"Image","props":{"y":160,"x":493,"var":"zoneEffect_3","skin":"res/baccarat/t05.png"}},{"type":"Image","props":{"y":155,"x":23,"var":"zoneEffect_4","skin":"res/baccarat/t03.png"}},{"type":"Sprite","props":{"y":406,"x":386,"width":351,"var":"betzone_0","skewY":-10,"height":168}},{"type":"Sprite","props":{"y":343,"x":29,"width":361,"var":"betzone_1","skewY":10,"height":167}},{"type":"Sprite","props":{"y":240,"x":257,"width":238,"var":"betzone_2","height":143}},{"type":"Sprite","props":{"y":232,"x":497,"width":205,"var":"betzone_3","skewY":-15,"skewX":12,"height":146}},{"type":"Sprite","props":{"y":178,"x":55,"width":204,"var":"betzone_4","skewY":15,"skewX":-10,"height":144}},{"type":"Sprite","props":{"y":398,"x":394,"width":321,"var":"coinzone_0","height":99}},{"type":"Sprite","props":{"y":396,"x":44,"width":321,"var":"coinzone_1","height":99}},{"type":"Sprite","props":{"y":240,"x":258,"width":226,"var":"coinzone_2","height":133}},{"type":"Sprite","props":{"y":227,"x":523,"width":171,"var":"coinzone_3","height":97}},{"type":"Sprite","props":{"y":229,"x":56,"width":171,"var":"coinzone_4","height":97}}]};
		return betzoneUI;
	})(View);
var coinSelectUI=(function(_super){
		function coinSelectUI(){
			
		    this.coin_0=null;
		    this.coin_2=null;
		    this.coin_4=null;
		    this.coin_1=null;
		    this.coin_3=null;
		    this.coin_5=null;
		    this.coin_light=null;

			coinSelectUI.__super.call(this);
		}

		CLASS$(coinSelectUI,'ui.component.coinSelectUI',_super);
		var __proto__=coinSelectUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(coinSelectUI.uiView);
		}
		coinSelectUI.uiView={"type":"View","props":{"width":750,"height":150},"child":[{"type":"Image","props":{"y":3,"x":14,"var":"coin_0","skin":"res/Coin/coin_10.png"}},{"type":"Image","props":{"y":58,"x":245,"var":"coin_2","skin":"res/Coin/coin_100.png"}},{"type":"Image","props":{"y":38,"x":494,"var":"coin_4","skin":"res/Coin/coin_1k.png"}},{"type":"Image","props":{"y":40,"x":126,"var":"coin_1","skin":"res/Coin/coin_50.png"}},{"type":"Image","props":{"y":57,"x":372,"var":"coin_3","skin":"res/Coin/coin_500.png"}},{"type":"Image","props":{"y":3,"x":614,"var":"coin_5","skin":"res/Coin/coin_5k.png"}},{"type":"Image","props":{"y":-9,"x":605,"var":"coin_light","skin":"res/Coin/coinlight.png"}}]};
		return coinSelectUI;
	})(View);
var CountTimerUI=(function(_super){
		function CountTimerUI(){
			
		    this.timer=null;

			CountTimerUI.__super.call(this);
		}

		CLASS$(CountTimerUI,'ui.component.CountTimerUI',_super);
		var __proto__=CountTimerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(CountTimerUI.uiView);
		}

		STATICATTR$(CountTimerUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Label","props":{"y":35,"x":9,"width":84,"var":"timer","text":"9","height":36,"fontSize":50,"font":"tableFont","align":"center"}}]};}
		]);
		return CountTimerUI;
	})(View);
var PhaseHintUI=(function(_super){
		function PhaseHintUI(){
			
		    this.PhaseText=null;
		    this.sysText=null;

			PhaseHintUI.__super.call(this);
		}

		CLASS$(PhaseHintUI,'ui.component.PhaseHintUI',_super);
		var __proto__=PhaseHintUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(PhaseHintUI.uiView);
		}

		STATICATTR$(PhaseHintUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":200,"height":100},"child":[{"type":"Label","props":{"y":45,"x":0,"width":202,"var":"PhaseText","text":"請開始下注","height":57,"fontSize":30,"color":"#6dd931","bold":true,"align":"center"}},{"type":"Label","props":{"y":45,"x":0,"width":202,"var":"sysText","text":"系統訊息","height":57,"fontSize":30,"color":"#6dd931","bold":true,"align":"center"}}]};}
		]);
		return PhaseHintUI;
	})(View);
var PokerUI=(function(_super){
		function PokerUI(){
			
		    this.poker=null;
		    this.stype=null;
		    this.type=null;
		    this.topPoint=null;
		    this.head=null;

			PokerUI.__super.call(this);
		}

		CLASS$(PokerUI,'ui.component.PokerUI',_super);
		var __proto__=PokerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(PokerUI.uiView);
		}

		STATICATTR$(PokerUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":141,"height":197},"child":[{"type":"Animation","props":{"y":0,"x":0,"var":"poker","source":"res/poker/back.png,res/poker/front.png"},"child":[{"type":"Animation","props":{"y":62,"x":13,"var":"stype","source":"res/poker/s_s.png,res/poker/h_s.png,res/poker/d_s.png,res/poker/c_s.png","height":206}},{"type":"Animation","props":{"y":82,"x":35,"var":"type","source":"res/poker/s.png,res/poker/h.png,res/poker/d.png,res/poker/c.png"}},{"type":"Animation","props":{"y":13,"x":8,"var":"topPoint","source":"res/poker/1_r.png,res/poker/2_r.png,res/poker/3_r.png,res/poker/4_r.png,res/poker/5_r.png,res/poker/6_r.png,res/poker/7_r.png,res/poker/8_r.png,res/poker/9_r.png,res/poker/10_r.png,res/poker/11_r.png,res/poker/12_r.png,res/poker/13_r.png,res/poker/1_b.png,res/poker/2_b.png,res/poker/3_b.png,res/poker/4_b.png,res/poker/5_b.png,res/poker/6_b.png,res/poker/7_b.png,res/poker/8_b.png,res/poker/9_b.png,res/poker/10_b.png,res/poker/11_b.png,res/poker/12_b.png,res/poker/13_b.png"}},{"type":"Animation","props":{"y":73,"x":11,"var":"head","source":"res/poker/11.png,res/poker/12.png,res/poker/13.png"}}]}]};}
		]);
		return PokerUI;
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

		CLASS$(rollerUI,'ui.component.rollerUI',_super);
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
var SettleUI=(function(_super){
		function SettleUI(){
			
		    this.playerPoint=null;
		    this.bankerPoint=null;
		    this.bankerWin=null;
		    this.playerWin=null;
		    this.Tie=null;
		    this.bankerTitle=null;
		    this.playerTitle=null;

			SettleUI.__super.call(this);
		}

		CLASS$(SettleUI,'ui.component.SettleUI',_super);
		var __proto__=SettleUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SettleUI.uiView);
		}

		STATICATTR$(SettleUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":500,"height":300},"child":[{"type":"Label","props":{"y":22,"x":89,"width":109,"var":"playerPoint","text":"10","height":32,"font":"tableFont","align":"center"}},{"type":"Label","props":{"y":230,"x":89,"width":109,"var":"bankerPoint","text":"10","height":32,"font":"tableFont","align":"center"}},{"type":"Image","props":{"y":221,"x":378,"var":"bankerWin","skin":"res/settle/bankerwin.jpg"}},{"type":"Image","props":{"y":12,"x":381,"var":"playerWin","skin":"res/settle/playerwin.jpg"}},{"type":"Image","props":{"y":111,"x":414,"var":"Tie","skin":"res/settle/tie.png"}},{"type":"Sprite","props":{"y":208,"x":9,"width":281,"var":"bankerTitle","height":90},"child":[{"type":"Image","props":{"y":8,"x":227,"skin":"res/settle/bankerpoint.png"}},{"type":"Image","props":{"y":4.000000000000014,"x":16,"skin":"res/settle/banker.png"}}]},{"type":"Sprite","props":{"y":0,"x":-3,"width":283,"var":"playerTitle","height":81},"child":[{"type":"Image","props":{"y":2.000000000000007,"x":28.00000000000003,"skin":"res/settle/player.png"}},{"type":"Image","props":{"y":2,"x":238,"skin":"res/settle/playerpoint.png"}}]}]};}
		]);
		return SettleUI;
	})(View);
var lobbyViewUI=(function(_super){
		function lobbyViewUI(){
			
		    this.game2=null;
		    this.credit=null;

			lobbyViewUI.__super.call(this);
		}

		CLASS$(lobbyViewUI,'ui.Scene.lobbyViewUI',_super);
		var __proto__=lobbyViewUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(lobbyViewUI.uiView);
		}

		STATICATTR$(lobbyViewUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Button","props":{"y":284,"x":526,"var":"game2","skin":"res/lobby/pairate.png"}},{"type":"Label","props":{"y":29,"x":179,"width":214,"var":"credit","text":"label","height":41,"fontSize":30,"color":"#f8eeee","bgColor":"#339e4d","align":"center"}},{"type":"Label","props":{"y":29,"x":26,"width":141,"text":"點數","height":41,"fontSize":30,"color":"#f8eeee","bgColor":"#339e4d","align":"center"}},{"type":"Label","props":{"y":219,"x":552,"width":141,"text":"百家","height":41,"fontSize":30,"color":"#f8eeee","bgColor":"#339e4d","align":"center"}}]};}
		]);
		return lobbyViewUI;
	})(View);
var loginViewUI=(function(_super){
		function loginViewUI(){
			
		    this.title=null;
		    this.oneTouch_btn=null;
		    this.password=null;
		    this.name=null;
		    this.Login_btn=null;
		    this.title=null;
		    this.title=null;

			loginViewUI.__super.call(this);
		}

		CLASS$(loginViewUI,'ui.Scene.loginViewUI',_super);
		var __proto__=loginViewUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loginViewUI.uiView);
		}

		STATICATTR$(loginViewUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Label","props":{"y":30,"x":382,"width":423,"var":"title","text":"Dyson Casino","height":118,"fontSize":50,"color":"#d1cccc","align":"center"}},{"type":"Button","props":{"y":559,"x":435,"width":342,"var":"oneTouch_btn","skin":"res/share/Btn_bg.png","height":85},"child":[{"type":"Label","props":{"y":11.999999999999886,"x":54.00000000000006,"width":238,"text":"一鍵登入","height":118,"fontSize":50,"color":"#f6eaea","align":"center"}}]},{"type":"TextInput","props":{"y":258,"x":443,"width":283,"var":"password","text":"22","promptColor":"#f6eeee","prompt":"password","height":47,"fontSize":30,"color":"#f4ecec","bgColor":"#24ad2f"}},{"type":"TextInput","props":{"y":187,"x":442,"width":283,"var":"name","text":"11","promptColor":"#f6eeee","prompt":"TextInput","height":55,"fontSize":30,"color":"#f4ecec","bgColor":"#24ad2f"}},{"type":"Button","props":{"y":327,"x":435,"width":342,"var":"Login_btn","skin":"res/share/Btn_bg.png","height":85},"child":[{"type":"Label","props":{"y":14,"x":48.00000000000006,"width":238,"text":"登入","height":118,"fontSize":50,"color":"#f6eaea","align":"center"}}]},{"type":"Label","props":{"y":185,"x":273,"width":177,"var":"title","text":"帳號:","height":63,"fontSize":50,"color":"#d1cccc","align":"center"}},{"type":"Label","props":{"y":251,"x":273,"width":177,"var":"title","text":"密碼:","height":63,"fontSize":50,"color":"#d1cccc","align":"center"}}]};}
		]);
		return loginViewUI;
	})(View);
var BonusGameUI=(function(_super){
		function BonusGameUI(){
			

			BonusGameUI.__super.call(this);
		}

		CLASS$(BonusGameUI,'ui.Scene.slot.BonusGameUI',_super);
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

		CLASS$(FreeGameUI,'ui.Scene.slot.FreeGameUI',_super);
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
		    this.roller_0=null;
		    this.roller_1=null;
		    this.roller_2=null;
		    this.roller_3=null;
		    this.roller_4=null;

			warcraftViewUI.__super.call(this);
		}

		CLASS$(warcraftViewUI,'ui.Scene.slot.warcraftViewUI',_super);
		var __proto__=warcraftViewUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("ui.WinAniUI",ui.WinAniUI);
			View.regComponent("Roller",Roller);
			View.regComponent("Roller1",Roller1);
			View.regComponent("Roller2",Roller2);
			View.regComponent("Roller3",Roller3);
			View.regComponent("roller_4",roller_4);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(warcraftViewUI.uiView);
		}
		warcraftViewUI.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Label","props":{"y":665,"x":707,"width":206,"var":"Winpoint","text":"123,456,789","height":55,"fontSize":30,"color":"#ecdede","align":"center"}},{"type":"Label","props":{"y":668,"x":233,"width":101,"var":"betScore","text":"1","height":55,"fontSize":30,"color":"#ecdede","align":"center"}},{"type":"Label","props":{"y":20,"x":1089,"width":173,"var":"coin_amount","text":"999,999,999","height":34,"fontSize":30,"color":"#ecdede","align":"center"}},{"type":"Label","props":{"y":57,"x":1083,"width":193,"var":"cash_amount","text":"999,999,999","height":33,"fontSize":30,"color":"#ecdede","align":"center"}},{"type":"Button","props":{"y":118,"x":20,"var":"back_to_lobby","skin":"res/share/backLobbyBtn.png"}},{"type":"Button","props":{"y":632,"x":950,"width":215,"var":"spinBtn","skin":"res/share/Btn_bg.png","height":82},"child":[{"type":"Label","props":{"y":26,"x":78,"text":"開始","fontSize":30,"color":"#fbe6e5"}}]},{"type":"Button","props":{"y":660,"x":354,"var":"betAddBtn","skin":"res/share/CarryIn.png"}},{"type":"Button","props":{"y":646,"x":124,"var":"paytableBtn","skin":"res/share/helpBtn.png"}},{"type":"Button","props":{"y":632,"x":950,"width":215,"var":"stopBtn","skin":"res/share/Btn_bg.png","height":82},"child":[{"type":"Label","props":{"y":26,"x":78,"text":"停輪","fontSize":30,"color":"#fbe6e5"}}]},{"type":"WinAni","props":{"y":74,"x":148,"visible":false,"var":"ani_0","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":207,"x":153,"visible":false,"var":"ani_1","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":358,"x":157,"var":"ani_2","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":68,"x":304,"visible":false,"var":"ani_3","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":207,"x":303,"visible":false,"var":"ani_4","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":358,"x":307,"var":"ani_5","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":76,"x":451,"visible":false,"var":"ani_6","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":212,"x":453,"visible":false,"var":"ani_7","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":363,"x":457,"var":"ani_8","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":77,"x":614,"visible":false,"var":"ani_9","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":213,"x":616,"visible":false,"var":"ani_10","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":364,"x":620,"var":"ani_11","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":68,"x":763,"visible":false,"var":"ani_12","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":204,"x":765,"visible":false,"var":"ani_13","runtime":"ui.WinAniUI"}},{"type":"WinAni","props":{"y":355,"x":769,"var":"ani_14","runtime":"ui.WinAniUI"}},{"type":"Button","props":{"y":658,"x":213,"var":"betSubBtn","skin":"res/share/PlayerListCloseBtn.png"}},{"type":"roller","props":{"y":74,"x":156,"var":"roller_0","runtime":"Roller"}},{"type":"roller","props":{"y":76,"x":318,"var":"roller_1","runtime":"Roller1"}},{"type":"roller","props":{"y":77,"x":484,"var":"roller_2","runtime":"Roller2"}},{"type":"roller","props":{"y":78,"x":647,"var":"roller_3","runtime":"Roller3"}},{"type":"roller","props":{"y":81,"x":811,"var":"roller_4","runtime":"roller_4"}}]};
		return warcraftViewUI;
	})(View);
var BaccaratViewUI=(function(_super){
		function BaccaratViewUI(){
			
		    this.bg=null;
		    this.poker_0=null;
		    this.poker_1=null;
		    this.poker_2=null;
		    this.poker_3=null;
		    this.poker_4=null;
		    this.poker_5=null;

			BaccaratViewUI.__super.call(this);
		}

		CLASS$(BaccaratViewUI,'ui.Scene.versus.BaccaratViewUI',_super);
		var __proto__=BaccaratViewUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("CountTimer",CountTimer);
			View.regComponent("roadBoard",roadBoard);
			View.regComponent("Poker1",Poker1);
			View.regComponent("Poker2",Poker2);
			View.regComponent("Poker3",Poker3);
			View.regComponent("Poker4",Poker4);
			View.regComponent("Poker5",Poker5);
			View.regComponent("Poker",Poker);
			View.regComponent("BetZone",BetZone);
			View.regComponent("BetBtnSet",BetBtnSet);
			View.regComponent("CoinSelect",CoinSelect);
			View.regComponent("PhaseHint",PhaseHint);
			View.regComponent("Menu",Menu);
			View.regComponent("CreditBoard",CreditBoard);
			View.regComponent("Settle",Settle);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BaccaratViewUI.uiView);
		}
		BaccaratViewUI.uiView={"type":"View","props":{"width":1280,"pivotX":1,"height":720},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg","skin":"res/baccarat/bg-02.png","height":720}},{"type":"CountTimer","props":{"y":157,"x":325,"runtime":"CountTimer"}},{"type":"Poker","props":{"y":113,"x":835,"width":141,"var":"poker_0","runtime":"Poker","name":"poker_0","height":197,"anchorY":0.5,"anchorX":0.5}},{"type":"Poker","props":{"y":113,"x":990,"var":"poker_1","runtime":"Poker1","name":"poker_1","anchorY":0.5,"anchorX":0.5}},{"type":"Poker","props":{"y":114,"x":1170,"var":"poker_2","runtime":"Poker2","name":"poker_2","anchorY":0.5,"anchorX":0.5}},{"type":"Poker","props":{"y":604,"x":836,"var":"poker_3","runtime":"Poker3","name":"poker_3","anchorY":0.5,"anchorX":0.5}},{"type":"Poker","props":{"y":603,"x":991,"var":"poker_4","runtime":"Poker4","name":"poker_4","anchorY":0.5,"anchorX":0.5}},{"type":"Poker","props":{"y":605,"x":1172,"var":"poker_5","runtime":"Poker5","name":"poker_5","anchorY":0.5,"anchorX":0.5}},{"type":"Settle","props":{"y":219,"x":758,"runtime":"Settle"}},{"type":"betzone","props":{"y":0,"x":0,"runtime":"BetZone"}},{"type":"BetBtnSet","props":{"y":37,"x":436,"runtime":"BetBtnSet"}},{"type":"coinSelect","props":{"y":541,"x":11,"runtime":"CoinSelect"}},{"type":"PhaseHint","props":{"y":114,"x":279,"runtime":"PhaseHint"}},{"type":"Menu","props":{"y":52,"x":-33,"runtime":"Menu"}},{"type":"CreditBoard","props":{"y":2,"x":3,"runtime":"CreditBoard"}},{"type":"roadBoard","props":{"y":48,"x":786,"runtime":"roadBoard"}}]};
		return BaccaratViewUI;
	})(View);
var historyBallUI=(function(_super){
		function historyBallUI(){
			
		    this.history=null;
		    this.bPair=null;
		    this.pPair=null;
		    this.point=null;

			historyBallUI.__super.call(this);
		}

		CLASS$(historyBallUI,'ui.Scene.versus.historyBallUI',_super);
		var __proto__=historyBallUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(historyBallUI.uiView);
		}
		historyBallUI.uiView={"type":"View","props":{"width":50,"height":50},"child":[{"type":"Animation","props":{"y":8,"x":8,"var":"history","source":"res/baccarat/bankerSymbol.png,res/baccarat/playerSymbol.png,res/baccarat/tieSymbol.png"},"child":[{"type":"Image","props":{"y":-3,"x":-3,"visible":false,"var":"bPair","skin":"res/baccarat/bPair.png"}},{"type":"Image","props":{"y":23,"x":26,"visible":false,"var":"pPair","skin":"res/baccarat/pPair.png"}}]},{"type":"Label","props":{"y":15,"x":12,"width":28,"var":"point","text":"3","height":26,"fontSize":20,"color":"#e8dbda","align":"center"}}]};
		return historyBallUI;
	})(View);
var roadBoardUI=(function(_super){
		function roadBoardUI(){
			
		    this.history_0=null;
		    this.history_1=null;
		    this.history_2=null;
		    this.history_3=null;
		    this.history_4=null;
		    this.history_5=null;
		    this.history_6=null;
		    this.history_7=null;
		    this.history_8=null;
		    this.history_9=null;
		    this.history_10=null;
		    this.history_11=null;
		    this.history_12=null;
		    this.history_13=null;
		    this.history_14=null;
		    this.history_15=null;
		    this.history_16=null;
		    this.history_17=null;
		    this.history_18=null;
		    this.history_19=null;
		    this.history_20=null;
		    this.history_21=null;
		    this.history_22=null;
		    this.history_23=null;
		    this.history_24=null;
		    this.history_25=null;
		    this.history_26=null;
		    this.history_27=null;
		    this.history_28=null;
		    this.history_29=null;
		    this.history_30=null;
		    this.history_31=null;
		    this.history_32=null;
		    this.history_33=null;
		    this.history_34=null;
		    this.history_35=null;
		    this.history_36=null;
		    this.history_37=null;
		    this.history_38=null;
		    this.history_39=null;
		    this.history_40=null;
		    this.history_41=null;
		    this.history_42=null;
		    this.history_43=null;
		    this.history_44=null;
		    this.history_45=null;
		    this.history_46=null;
		    this.history_47=null;
		    this.history_48=null;
		    this.history_49=null;
		    this.history_50=null;
		    this.history_51=null;
		    this.history_52=null;
		    this.history_53=null;
		    this.history_54=null;
		    this.history_55=null;
		    this.history_56=null;
		    this.history_57=null;
		    this.history_58=null;
		    this.history_59=null;

			roadBoardUI.__super.call(this);
		}

		CLASS$(roadBoardUI,'ui.Scene.versus.roadBoardUI',_super);
		var __proto__=roadBoardUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("ui.Scene.versus.historyBallUI",ui.Scene.versus.historyBallUI);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(roadBoardUI.uiView);
		}
		roadBoardUI.uiView={"type":"View","props":{"width":450,"height":250},"child":[{"type":"Image","props":{"y":0,"x":20,"skin":"res/baccarat/roadbg.png"}},{"type":"historyBall","props":{"y":0,"x":18,"var":"history_0","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":39,"x":18,"var":"history_1","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":78,"x":18,"var":"history_2","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":118,"x":18,"var":"history_3","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":158,"x":18,"var":"history_4","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":197,"x":18,"var":"history_5","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":0,"x":58,"var":"history_6","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":39,"x":58,"var":"history_7","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":78,"x":58,"var":"history_8","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":118,"x":58,"var":"history_9","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":158,"x":58,"var":"history_10","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":197,"x":58,"var":"history_11","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":0,"x":97,"var":"history_12","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":39,"x":97,"var":"history_13","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":78,"x":97,"var":"history_14","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":118,"x":97,"var":"history_15","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":158,"x":97,"var":"history_16","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":197,"x":97,"var":"history_17","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":0,"x":137,"var":"history_18","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":39,"x":137,"var":"history_19","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":78,"x":137,"var":"history_20","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":118,"x":137,"var":"history_21","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":158,"x":137,"var":"history_22","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":197,"x":137,"var":"history_23","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":0,"x":177,"var":"history_24","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":39,"x":177,"var":"history_25","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":78,"x":177,"var":"history_26","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":118,"x":177,"var":"history_27","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":158,"x":177,"var":"history_28","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":197,"x":177,"var":"history_29","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":0,"x":216,"var":"history_30","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":39,"x":216,"var":"history_31","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":78,"x":216,"var":"history_32","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":118,"x":216,"var":"history_33","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":158,"x":216,"var":"history_34","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":197,"x":216,"var":"history_35","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":0,"x":255,"var":"history_36","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":39,"x":255,"var":"history_37","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":78,"x":255,"var":"history_38","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":118,"x":255,"var":"history_39","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":158,"x":255,"var":"history_40","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":197,"x":255,"var":"history_41","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":0,"x":294,"var":"history_42","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":39,"x":294,"var":"history_43","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":78,"x":294,"var":"history_44","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":118,"x":294,"var":"history_45","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":158,"x":294,"var":"history_46","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":197,"x":294,"var":"history_47","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":0,"x":334,"var":"history_48","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":39,"x":334,"var":"history_49","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":78,"x":334,"var":"history_50","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":118,"x":334,"var":"history_51","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":158,"x":334,"var":"history_52","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":197,"x":334,"var":"history_53","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":0,"x":373,"var":"history_54","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":39,"x":373,"var":"history_55","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":78,"x":373,"var":"history_56","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":118,"x":373,"var":"history_57","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":158,"x":373,"var":"history_58","runtime":"ui.Scene.versus.historyBallUI"}},{"type":"historyBall","props":{"y":197,"x":373,"var":"history_59","runtime":"ui.Scene.versus.historyBallUI"}}]};
		return roadBoardUI;
	})(View);
var CreditBoardUI=(function(_super){
		function CreditBoardUI(){
			
		    this.game_credit=null;
		    this.total_bet=null;
		    this.total_win=null;
		    this.round_code=null;

			CreditBoardUI.__super.call(this);
		}

		CLASS$(CreditBoardUI,'ui.share.CreditBoardUI',_super);
		var __proto__=CreditBoardUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(CreditBoardUI.uiView);
		}
		CreditBoardUI.uiView={"type":"View","props":{"width":200,"height":100},"child":[{"type":"Label","props":{"y":6,"x":98,"width":128,"var":"game_credit","text":"999999","height":35,"fontSize":30,"color":"#efeeee"}},{"type":"Label","props":{"y":7,"x":392,"width":128,"var":"total_bet","text":"999999","height":35,"fontSize":30,"color":"#efeeee"}},{"type":"Label","props":{"y":38,"x":392,"width":128,"var":"total_win","text":"999999","height":35,"fontSize":30,"color":"#efeeee"}},{"type":"Label","props":{"y":6,"x":-5,"width":124,"text":"小錢包:","height":31,"fontSize":28,"color":"#fbf5f4"}},{"type":"Label","props":{"y":7,"x":285,"width":97,"text":"總下注:","height":31,"fontSize":28,"color":"#fbf5f4"}},{"type":"Label","props":{"y":38,"x":285,"width":124,"text":"總輪贏:","height":31,"fontSize":28,"color":"#fbf5f4"}},{"type":"Label","props":{"y":10,"x":545,"width":72,"text":"局號:","height":31,"fontSize":28,"color":"#fbf5f4"}},{"type":"Label","props":{"y":9,"x":616,"width":128,"var":"round_code","text":"999999","height":35,"fontSize":30,"color":"#efeeee"}}]};
		return CreditBoardUI;
	})(View);
var HintViewUI=(function(_super){
		function HintViewUI(){
			
		    this.cancel=null;
		    this.comfirmBtn=null;
		    this.context=null;

			HintViewUI.__super.call(this);
		}

		CLASS$(HintViewUI,'ui.share.HintViewUI',_super);
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
var MenuUI=(function(_super){
		function MenuUI(){
			
		    this.back_to_lobby=null;

			MenuUI.__super.call(this);
		}

		CLASS$(MenuUI,'ui.share.MenuUI',_super);
		var __proto__=MenuUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MenuUI.uiView);
		}
		MenuUI.uiView={"type":"View","props":{"width":200,"height":100},"child":[{"type":"Button","props":{"y":5,"x":56,"var":"back_to_lobby","skin":"res/share/backLobbyBtn.png"}}]};
		return MenuUI;
	})(View);
var TakeInUI=(function(_super){
		function TakeInUI(){
			
		    this.range=null;
		    this.inputtext=null;
		    this.takeInBtn=null;
		    this.closeBtn=null;

			TakeInUI.__super.call(this);
		}

		CLASS$(TakeInUI,'ui.share.TakeInUI',_super);
		var __proto__=TakeInUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TakeInUI.uiView);
		}

		STATICATTR$(TakeInUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":205,"x":310,"width":647,"skin":"res/share/03.png","height":297,"sizeGrid":"0,1,0,1"}},{"type":"Label","props":{"y":232,"x":356,"width":538,"var":"range","text":"帶入點數","height":47,"fontSize":30,"align":"center"}},{"type":"TextInput","props":{"y":299,"x":473,"width":320,"var":"inputtext","promptColor":"#170302","height":46,"fontSize":30,"borderColor":"#000000","bgColor":"#a6dba6","align":"center"}},{"type":"Button","props":{"y":375,"x":543,"width":198,"var":"takeInBtn","skin":"res/share/Btn_bg.png","height":89},"child":[{"type":"Label","props":{"y":27,"x":16,"width":175,"text":"帶入","height":42,"fontSize":30,"color":"#f8f0ef","align":"center"}}]},{"type":"Button","props":{"y":213,"x":902,"var":"closeBtn","skin":"res/share/btn_close.png"}}]};}
		]);
		return TakeInUI;
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