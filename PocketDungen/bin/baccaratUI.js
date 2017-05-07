
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model;
var rollerNum =5;

var _tween = Laya.Tween;
var _ease = Laya.Ease;
var Handler = Laya.Handler;
var SoundManager = Laya.SoundManager;

function baccaratUI()
{
	var self = this
	baccaratUI.super(this);
	_model = model.getInstance();

	this.back_to_lobby.on(Event.CLICK, this, onBtnClick);
	this.betzone_0.on(Event.CLICK, this, onbetzone,[0]);
	this.betzone_1.on(Event.CLICK, this, onbetzone,[1]);
	this.betzone_2.on(Event.CLICK, this, onbetzone,[2]);
	this.betzone_3.on(Event.CLICK, this, onbetzone,[3]);
	this.betzone_4.on(Event.CLICK, this, onbetzone,[4]);
	
	this.coin_0.on(Event.CLICK, this, coin,[0]);
	this.coin_1.on(Event.CLICK, this, coin,[1]);
	this.coin_2.on(Event.CLICK, this, coin,[2]);
	this.coin_3.on(Event.CLICK, this, coin,[3]);
	this.coin_4.on(Event.CLICK, this, coin,[4]);
	this.coin_5.on(Event.CLICK, this, coin,[5]);

	_model.cashin.add(oncarrying);
	
	(function()
	{
		//建構式

		//SoundManager.playMusic("res/sound/slot_BGM.mp3")		
	})();

	
	function onBtnClick()
	{
		_model.eventHandle("leave_game",[]);
	}

	function onbetzone(idx)
	{
		trace("betzone0 ",idx);
	}


	function coin(idx)
	{
		trace("coin0",idx);
	}

	function oncarrying(coin,cash)
	{
		//self.coin_amount.text = coin
		//self.cash_amount.text = cash
	}

}

Laya.class(baccaratUI, "baccaratUI", BaccaratViewUI);