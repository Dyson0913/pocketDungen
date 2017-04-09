var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
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
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HintViewUI.uiView);
		}

		STATICATTR$(HintViewUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{},"child":[{"type":"Image","props":{"y":178,"x":246,"width":755,"skin":"res/share/02.png","height":271,"sizeGrid":"0,1,0,1"}},{"type":"Button","props":{"y":368,"x":655,"width":310,"var":"cancel","skin":"res/share/Btn_bg.png","height":82},"child":[{"type":"Label","props":{"y":13,"x":37,"width":238,"text":"取消","height":53,"fontSize":50,"color":"#f6eaea","align":"center"}}]},{"type":"Button","props":{"y":368,"x":299,"width":310,"var":"comfirmBtn","skin":"res/share/Btn_bg.png","height":82},"child":[{"type":"Label","props":{"y":14,"x":28,"width":238,"text":"確定","height":53,"fontSize":50,"color":"#f6eaea","align":"center"}}]},{"type":"Label","props":{"y":198,"x":287,"width":696,"var":"context","text":"label","height":162,"fontSize":30,"align":"center"}}]}]};}
		]);
		return HintViewUI;
	})(View);
var lobbyViewUI=(function(_super){
		function lobbyViewUI(){
			
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
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Button","props":{"y":6,"x":8,"var":"game1","skin":"res/lobby/money.png"}},{"type":"Button","props":{"y":9,"x":1045,"skin":"res/lobby/home.png"}},{"type":"Button","props":{"y":477,"x":8,"var":"priate","skin":"res/lobby/pairate.png"}},{"type":"Button","props":{"y":476,"x":1037,"var":"warcraft","skin":"res/lobby/king.png"}},{"type":"Button","props":{"y":244,"x":917,"var":"gold","skin":"res/lobby/gold.png"}},{"type":"Button","props":{"y":236,"x":132,"skin":"res/lobby/arc.png"}}]};}
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
		    this.roller_0=null;
		    this.roller_1=null;
		    this.roller_2=null;
		    this.roller_3=null;
		    this.roller_4=null;
		    this.roller_5=null;
		    this.roller_6=null;
		    this.roller_7=null;
		    this.roller_8=null;
		    this.roller_9=null;
		    this.roller_10=null;
		    this.roller_11=null;
		    this.roller_12=null;
		    this.roller_13=null;
		    this.roller_14=null;
		    this.roller_15=null;

			loginViewUI.__super.call(this);
		}

		CLASS$(loginViewUI,'ui.loginViewUI',_super);
		var __proto__=loginViewUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Roller",Roller);
			View.regComponent("Roller15",Roller15);
			View.regComponent("Roller2",Roller2);
			View.regComponent("Roller3",Roller3);
			View.regComponent("Roller4",Roller4);
			View.regComponent("Roller5",Roller5);
			View.regComponent("Roller6",Roller6);
			View.regComponent("Roller7",Roller7);
			View.regComponent("Roller1",Roller1);
			View.regComponent("Roller9",Roller9);
			View.regComponent("Roller10",Roller10);
			View.regComponent("Roller11",Roller11);
			View.regComponent("Roller12",Roller12);
			View.regComponent("Roller13",Roller13);
			View.regComponent("Roller14",Roller14);
			View.regComponent("Roller8",Roller8);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loginViewUI.uiView);
		}

		STATICATTR$(loginViewUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":186,"width":947,"skin":"res/loading/logo.png","height":723}},{"type":"Label","props":{"y":57,"x":91,"width":423,"var":"title","text":"Dyson","height":118,"fontSize":50,"color":"#d1cccc","align":"center"}},{"type":"Button","props":{"y":605,"x":939,"width":342,"var":"oneTouch_btn","skin":"res/share/Btn_bg.png","height":85},"child":[{"type":"Label","props":{"y":11.999999999999886,"x":54.00000000000006,"width":238,"text":"一鍵登入","height":118,"fontSize":50,"color":"#f6eaea","align":"center"}}]},{"type":"Label","props":{"y":62,"x":805,"width":423,"var":"casino","text":"Casino","height":118,"fontSize":50,"color":"#d1cccc","align":"center"}},{"type":"Box","props":{"y":456,"x":12,"var":"loginZone"},"child":[{"type":"TextInput","props":{"x":37,"width":283,"var":"password","text":"22","promptColor":"#f6eeee","prompt":"password","height":47,"fontSize":20,"color":"#f4ecec"}},{"type":"TextInput","props":{"y":65,"x":36,"width":283,"var":"name","text":"11","promptColor":"#f6eeee","prompt":"TextInput","height":47,"fontSize":20,"color":"#f4ecec"}},{"type":"Button","props":{"y":147,"width":342,"var":"Login_btn","skin":"res/share/Btn_bg.png","height":85},"child":[{"type":"Label","props":{"y":14,"x":48.00000000000006,"width":238,"text":"登入","height":118,"fontSize":50,"color":"#f6eaea","align":"center"}}]}]},{"type":"roller","props":{"y":7,"x":102,"var":"roller_0","runtime":"Roller"}},{"type":"roller","props":{"y":164,"x":105,"var":"roller_1","runtime":"Roller1"}},{"type":"roller","props":{"y":309,"x":104,"var":"roller_2","runtime":"Roller2"}},{"type":"roller","props":{"y":18,"x":259,"var":"roller_3","runtime":"Roller3"}},{"type":"roller","props":{"y":170,"x":281,"var":"roller_4","runtime":"Roller4"}},{"type":"roller","props":{"y":329,"x":259,"var":"roller_5","runtime":"Roller5"}},{"type":"roller","props":{"y":7,"x":453,"var":"roller_6","runtime":"Roller6"}},{"type":"roller","props":{"y":188,"x":445,"var":"roller_7","runtime":"Roller7"}},{"type":"roller","props":{"y":359,"x":448,"var":"roller_8","runtime":"Roller8"}},{"type":"roller","props":{"y":15,"x":627,"var":"roller_9","runtime":"Roller9"}},{"type":"roller","props":{"y":190,"x":645,"var":"roller_10","runtime":"Roller10"}},{"type":"roller","props":{"y":354,"x":641,"var":"roller_11","runtime":"Roller11"}},{"type":"roller","props":{"y":19,"x":813,"var":"roller_12","runtime":"Roller12"}},{"type":"roller","props":{"y":178,"x":819,"var":"roller_13","runtime":"Roller13"}},{"type":"roller","props":{"y":366,"x":816,"var":"roller_14","runtime":"Roller14"}},{"type":"roller","props":{"y":280,"x":1008,"var":"roller_15","runtime":"Roller15"}}]};}
		]);
		return loginViewUI;
	})(View);
var rollerUI=(function(_super){
		function rollerUI(){
			
		    this.imgItem=null;
		    this.next=null;
		    this.current=null;
		    this.pre=null;

			rollerUI.__super.call(this);
		}

		CLASS$(rollerUI,'ui.rollerUI',_super);
		var __proto__=rollerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(rollerUI.uiView);
		}

		STATICATTR$(rollerUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":140,"height":140},"child":[{"type":"Image","props":{"y":0,"x":0,"width":0,"var":"imgItem","height":0},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":140,"renderType":"mask","height":141},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":140,"lineWidth":1,"height":140,"fillColor":"#ff0000"}}]},{"type":"Image","props":{"y":140,"x":0,"var":"next","skin":"res/loading/2.jpg"}},{"type":"Image","props":{"y":0,"x":0,"var":"current","skin":"res/loading/1.jpg"}},{"type":"Image","props":{"y":-140,"x":0,"var":"pre","skin":"res/loading/9.jpg"}}]}]};}
		]);
		return rollerUI;
	})(View);
var roolerUI=(function(_super){
		function roolerUI(){
			
		    this.list=null;
		    this.myani=null;

			roolerUI.__super.call(this);
		}

		CLASS$(roolerUI,'ui.roolerUI',_super);
		var __proto__=roolerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(roolerUI.uiView);
		}

		STATICATTR$(roolerUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":140,"height":140},"child":[{"type":"List","props":{"y":0,"x":0,"width":140,"var":"list","selectEnable":true,"repeatY":8,"repeatX":1,"height":140},"child":[{"type":"Box","props":{"y":0,"x":0,"width":140,"name":"render","height":140},"child":[{"type":"Animation","props":{"y":0,"x":0,"var":"myani","source":"res/game/1.jpg,res/game/2.jpg,res/game/3.jpg,res/game/4.jpg,res/game/5.jpg,res/game/6.jpg,res/game/7.jpg,res/game/8.jpg,res/game/9.jpg","name":"myani"}}]},{"type":"VScrollBar","props":{"y":3,"x":144,"width":17,"name":"scrollBar","height":138}}]}]};}
		]);
		return roolerUI;
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
		    this.roller_5=null;
		    this.roller_6=null;
		    this.roller_7=null;
		    this.roller_8=null;
		    this.roller_9=null;
		    this.roller_10=null;
		    this.roller_11=null;
		    this.roller_12=null;
		    this.roller_13=null;
		    this.roller_14=null;

			warcraftViewUI.__super.call(this);
		}

		CLASS$(warcraftViewUI,'ui.warcraftViewUI',_super);
		var __proto__=warcraftViewUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("ui.roolerUI",ui.roolerUI);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(warcraftViewUI.uiView);
		}

		STATICATTR$(warcraftViewUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Label","props":{"y":665,"x":707,"width":206,"var":"Winpoint","text":"123,456,789","height":55,"fontSize":30,"color":"#ecdede","align":"center"}},{"type":"Label","props":{"y":668,"x":233,"width":101,"var":"betScore","text":"1","height":55,"fontSize":30,"color":"#ecdede","align":"center"}},{"type":"Label","props":{"y":20,"x":1089,"width":173,"var":"coin_amount","text":"999,999,999","height":34,"fontSize":30,"color":"#ecdede","align":"center"}},{"type":"Label","props":{"y":57,"x":1083,"width":193,"var":"cash_amount","text":"999,999,999","height":33,"fontSize":30,"color":"#ecdede","align":"center"}},{"type":"Button","props":{"y":118,"x":20,"var":"back_to_lobby","skin":"res/share/backLobbyBtn.png"}},{"type":"Button","props":{"y":632,"x":950,"width":215,"var":"spinBtn","skin":"res/share/Btn_bg.png","height":82},"child":[{"type":"Label","props":{"y":26,"x":78,"text":"開始","fontSize":30,"color":"#fbe6e5"}}]},{"type":"Button","props":{"y":660,"x":354,"var":"betAddBtn","skin":"res/share/CarryIn.png"}},{"type":"Button","props":{"y":646,"x":124,"var":"paytableBtn","skin":"res/share/helpBtn.png"}},{"type":"rooler","props":{"y":133,"x":252,"var":"roller_0","runtime":"ui.roolerUI"}},{"type":"rooler","props":{"y":293,"x":252,"var":"roller_1","runtime":"ui.roolerUI"}},{"type":"rooler","props":{"y":456,"x":252,"var":"roller_2","runtime":"ui.roolerUI"}},{"type":"rooler","props":{"y":134,"x":412,"var":"roller_3","runtime":"ui.roolerUI"}},{"type":"rooler","props":{"y":294,"x":413,"var":"roller_4","runtime":"ui.roolerUI"}},{"type":"rooler","props":{"y":457,"x":412,"var":"roller_5","runtime":"ui.roolerUI"}},{"type":"rooler","props":{"y":133,"x":573,"var":"roller_6","runtime":"ui.roolerUI"}},{"type":"rooler","props":{"y":294,"x":573,"var":"roller_7","runtime":"ui.roolerUI"}},{"type":"rooler","props":{"y":457,"x":573,"var":"roller_8","runtime":"ui.roolerUI"}},{"type":"rooler","props":{"y":135,"x":733,"var":"roller_9","runtime":"ui.roolerUI"}},{"type":"rooler","props":{"y":295,"x":734,"var":"roller_10","runtime":"ui.roolerUI"}},{"type":"rooler","props":{"y":457,"x":734,"var":"roller_11","runtime":"ui.roolerUI"}},{"type":"rooler","props":{"y":134,"x":892,"var":"roller_12","runtime":"ui.roolerUI"}},{"type":"rooler","props":{"y":294,"x":893,"var":"roller_13","runtime":"ui.roolerUI"}},{"type":"rooler","props":{"y":456,"x":893,"var":"roller_14","runtime":"ui.roolerUI"}}]};}
		]);
		return warcraftViewUI;
	})(View);